import { COURSE } from "@/app/utils";
import AIsummary from "@/Components/AIButton";
import React from "react";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/course/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }
  const course: COURSE = await res.json();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-300">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-26">
          <div className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center gap-4">
            <div className="w-full md:w-350 flex-auto text-amber-50">
              <p>Academic</p>
              <h1 className="font-bold lg:text-7xl md:text-5xl">
                {course.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="px-5 md:px-10 lg:px-20 mt-5 w-full lg:w-1/2 mb-6">
          <div className="font-bold text-xl">About this Course</div>
          <div>
            <p className="my-5">{course.description}</p>
          </div>
        </div>

        <div className="px-5 md:px-10 lg:px-20 mt-5 w-full lg:w-1/2 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
              <p>Overview of the course</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
              <p>Key skills to be learned</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
              <p>Course duration and schedule</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
              <p>Certification details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-end px-8 py-4">
        <AIsummary title={course.title} />
      </div>
    </>
  );
}
