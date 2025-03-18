import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const service = await prisma.service.findUnique({
      where: {
        id: params.id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        features: true,
        icon: true,
        slug: true,
      },
    });

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    console.error(`Error fetching service with ID ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}
