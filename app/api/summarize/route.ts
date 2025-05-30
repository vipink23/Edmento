import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title } =await request.json();
    return NextResponse.json(
      {
        summary: `This content discusses the key principles of ${title}. It provides foundational knowledge in this subject and outlines the core topics covered.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}
