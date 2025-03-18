import { NextRequest } from 'next/server';
import { POST } from '@/app/api/contact/route';
import { prisma } from '@/lib/db';

// Mock Prisma
jest.mock('@/lib/db', () => ({
  prisma: {
    contactSubmission: {
      create: jest.fn(),
    },
  },
}));

// Mock Request
const createMockRequest = (body: any) => {
  return {
    json: jest.fn().mockResolvedValue(body),
  } as unknown as Request;
};

describe('Contact API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a contact submission with valid data', async () => {
    // Mock data
    const mockSubmission = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Test Company',
      phone: '1234567890',
      message: 'This is a test message',
      serviceInterest: 'data-analysis',
      status: 'PENDING',
      createdAt: new Date(),
    };

    const requestBody = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Test Company',
      phone: '1234567890',
      message: 'This is a test message',
      service: 'data-analysis',
    };

    // Setup the mock implementation
    (prisma.contactSubmission.create as jest.Mock).mockResolvedValue(mockSubmission);

    // Call the API handler
    const request = createMockRequest(requestBody);
    const response = await POST(request);
    const data = await response.json();

    // Assertions
    expect(prisma.contactSubmission.create).toHaveBeenCalledTimes(1);
    expect(prisma.contactSubmission.create).toHaveBeenCalledWith({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Test Company',
        phone: '1234567890',
        message: 'This is a test message',
        serviceInterest: 'data-analysis',
        status: 'PENDING',
      },
    });
    expect(data).toEqual({
      success: true,
      message: 'Contact form submitted successfully',
      id: '1',
    });
  });

  it('should return validation errors for invalid data', async () => {
    // Invalid request body
    const requestBody = {
      name: 'J', // Too short
      email: 'not-an-email', // Invalid email
      message: 'Short', // Too short
    };

    // Call the API handler
    const request = createMockRequest(requestBody);
    const response = await POST(request);
    const data = await response.json();

    // Assertions
    expect(prisma.contactSubmission.create).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid input');
    expect(data.details).toBeDefined();
  });

  it('should handle database errors gracefully', async () => {
    // Valid request body
    const requestBody = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    };

    // Setup the mock to throw an error
    (prisma.contactSubmission.create as jest.Mock).mockRejectedValue(new Error('Database error'));

    // Call the API handler
    const request = createMockRequest(requestBody);
    const response = await POST(request);
    const data = await response.json();

    // Assertions
    expect(prisma.contactSubmission.create).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(500);
    expect(data).toEqual({ error: 'Failed to process contact form submission' });
  });
});
