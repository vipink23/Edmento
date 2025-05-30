import { NextResponse } from 'next/server';
import { course } from '../route';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const { id } =await params;  
  const c = course.find(cs => cs.id === Number(id));  
  if (!c) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }
  return NextResponse.json(c);
}

// PATCH or POST method to update initialProgress
export async function PATCH(_request: Request, { params }: { params: { id: string }}) {
  const { id } = await params

  // Find the course and update progress
  const courseItem = course.find((c) => c.id === Number(id));
  if (courseItem) {
    courseItem.initialProgress = 100;
    return NextResponse.json(courseItem ,{status:200});
  }

  return NextResponse.json({ message: "Course not found" }, { status: 404 });
}


