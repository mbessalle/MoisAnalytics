import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        company: true,
        content: true,
        rating: true,
        imageUrl: true,
      },
      orderBy: {
        rating: 'desc',
      },
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
