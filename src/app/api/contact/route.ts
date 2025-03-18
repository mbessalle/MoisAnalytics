import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

// Define a schema for input validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  service: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the input
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.format() },
        { status: 400 }
      );
    }
    
    // Create a new contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name: body.name,
        email: body.email,
        company: body.company || null,
        phone: body.phone || null,
        message: body.message,
        serviceInterest: body.service || null,
        status: 'PENDING',
      },
    });
    
    // In a real application, you might want to send an email notification here
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: submission.id,
    });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
