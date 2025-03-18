import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        content: true,
        slug: true,
        imageUrl: true,
        featured: true,
        client: true,
        industry: true,
        completionDate: true,
        challenge: true,
        solution: true,
        results: true,
        technologies: true,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error(`Error fetching project with ID ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}
