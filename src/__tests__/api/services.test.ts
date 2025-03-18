import { NextRequest } from 'next/server';
import { GET } from '@/app/api/services/route';
import { prisma } from '@/lib/db';

// Mock Prisma
jest.mock('@/lib/db', () => ({
  prisma: {
    service: {
      findMany: jest.fn(),
    },
  },
}));

describe('Services API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all services', async () => {
    // Mock data
    const mockServices = [
      {
        id: '1',
        name: 'Data Analysis',
        description: 'Comprehensive data analysis services',
        features: ['Feature 1', 'Feature 2'],
        icon: 'chart-bar',
        slug: 'data-analysis',
      },
      {
        id: '2',
        name: 'Data Visualization',
        description: 'Interactive data visualization',
        features: ['Feature 1', 'Feature 2'],
        icon: 'chart-pie',
        slug: 'data-visualization',
      },
    ];

    // Setup the mock implementation
    (prisma.service.findMany as jest.Mock).mockResolvedValue(mockServices);

    // Call the API handler
    const response = await GET();
    const data = await response.json();

    // Assertions
    expect(prisma.service.findMany).toHaveBeenCalledTimes(1);
    expect(prisma.service.findMany).toHaveBeenCalledWith({
      select: {
        id: true,
        name: true,
        description: true,
        features: true,
        icon: true,
        slug: true,
      },
    });
    expect(data).toEqual(mockServices);
  });

  it('should handle errors gracefully', async () => {
    // Setup the mock to throw an error
    (prisma.service.findMany as jest.Mock).mockRejectedValue(new Error('Database error'));

    // Call the API handler
    const response = await GET();
    const data = await response.json();

    // Assertions
    expect(prisma.service.findMany).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(500);
    expect(data).toEqual({ error: 'Failed to fetch services' });
  });
});
