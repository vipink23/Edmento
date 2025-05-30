import { NextResponse } from "next/server"
import { COURSE } from "@/app/utils"


export const course : COURSE[] =[
{
  id:1,
  title: "Bachelor of Science",
  description:"A broad undergraduate degree focusing on scientific fields like biology, chemistry, physics, etc.",
  initialProgress :70
},
{
  id:2,
  title: "Bachelor of Technology",
  description:"A four-year undergraduate degree focused on engineering and technology, offering specializations like computer science, mechanical engineering, civil engineering, etc",
  initialProgress :40
},
{
  id:3,
  title: "Bachelor of Arts",
  description:"An undergraduate degree that explores a broad range of humanities and social sciences, including literature, history, philosophy, and languages.",
  initialProgress :60
},
{
    id:4,
    title :"Bachelor of Commerce",
    description:"An undergraduate degree focused on business, finance, and accounting, preparing students for careers in commerce and management",
    initialProgress:70
},
{
    id:5,
    title:"Bachelor of Architecture",
    description:"An undergraduate degree that teaches students the principles of designing and planning buildings and other structures.",
    initialProgress :60
},
{
    id:6,
    title:"Bachelor of Computer Applications",
    description:"A three-year undergraduate degree that focuses on the application of computer technology, preparing students for careers in IT and software development",
    initialProgress :95
},
{
    id:7,
    title:"Bachelor of Law",
    description:"An undergraduate degree that prepares students for careers in law, covering legal principles, jurisprudence, and legal research",
    initialProgress :80
},
{
    id:8,
    title:"Bachelor of Pharmacy",
    description:"An undergraduate degree that prepares students to become pharmacists, focusing on drug knowledge, compounding, and dispensing",
    initialProgress :85
},
{
    id:9,
    title:"Bachelor of Fine Arts",
    description:"An undergraduate degree that focuses on creative arts, including visual arts, performing arts, and design",
    initialProgress :80
},
{
    id:10,
    title:"Business and Management",
    description:"Covering finance, accounting, marketing, HR management and administrative studies, you'll gain skills that can open doors for your own initiatives as well as global companies projects.",
    initialProgress :70
},
{
    id:11,
    title:"Travel and Hospitality",
    description:"You will study hospitality and travel industry, and its global impact. You will have the possibility to make your passion for travel your career and possibly develop your own business",
    initialProgress :78
}

]


export async function GET() {
  return NextResponse.json(course, { status: 200 });
}

export async function PATCH(request: Request) {
  try {
    const { id } = await request.json();

    const courseItem = course.find((c) => c.id === Number(id));

    if (courseItem) {
      courseItem.initialProgress = 100;
      return NextResponse.json({ message: "Progress updated", courseItem });
    }

    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}