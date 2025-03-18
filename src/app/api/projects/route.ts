import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    // Get the URL object to extract query parameters
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : undefined;
    const featured = searchParams.get('featured') === 'true';

    // Build the query
    const query: any = {
      select: {
        id: true,
        title: true,
        description: true,
        slug: true,
        imageUrl: true,
        featured: true,
        client: true,
        industry: true,
        completionDate: true,
      },
      orderBy: {
        completionDate: 'desc',
      },
    };

    // Add filters if needed
    if (featured) {
      query.where = {
        featured: true,
      };
    }

    // Add limit if specified
    if (limit) {
      query.take = limit;
    }

    const projects = await prisma.project.findMany(query);

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
