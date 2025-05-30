"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { COURSE } from "../app/utils";

type Props = {
  initialCourses: COURSE[];
};

export default function CourseList({ initialCourses }: Props) {
  const router = useRouter();
  const [courses, setCourses] = useState<COURSE[]>(initialCourses);

  if (courses.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">No courses found.</div>
    );
  }

  const handleComplete = (id: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, initialProgress: 100 } : course
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 mx-5">
      {courses.map((item) => (
        <div
          key={item.id}
          className="max-w-sm rounded-xl shadow-lg overflow-hidden bg-white flex flex-col cursor-pointer"
          onClick={() => router.push(`/Dashboard/${item.id}`)}
        >
          <div className="p-4 flex flex-col flex-grow mt-2 text-center">
            <h2 className="font-bold text-xl mb-2 text-black">
              {item.title || "Course Title"}
            </h2>
            <p className="text-gray-700  mb-4 flex-grow mt-3 text-start text-sm">
              {item.description || "No description provided."}
            </p>
            <div className="mt-auto">
              <div className="w-full bg-gray-200 rounded-full h-1 mb-4 mt-3">
                <div
                  // className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                  className={`h-1 rounded-full transition-all duration-500 ${
                    item.initialProgress >= 100 ? "bg-green-600" : "bg-blue-600"
                  }`}
                  title={item.initialProgress.toString() + "%"}
                  style={{ width: `${item.initialProgress}%` }}
                ></div>
              </div>
              <button
                // className="text-blue-950 rounded-lg hover:text-blue-600 transition cursor-pointer"
                className={`text-blue-950 rounded-lg hover:text-blue-600 transition cursor-pointer
                 ${
                   item.initialProgress >= 100
                  ? "opacity-50 pointer-events-none"
                   : "opacity-100"
                  }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click navigation
                  handleComplete(item.id);
                }}
              >
                {item.initialProgress >= 100 ? "Completed" : "Complete"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
