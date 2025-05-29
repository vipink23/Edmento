import { NextResponse } from 'next/server';
import { course } from '../route';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;  
  const c = course.find(cs => cs.id === Number(id));  
  if (!c) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }
  return NextResponse.json(c);
}
