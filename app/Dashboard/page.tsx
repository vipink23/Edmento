"use client";
import Course from "@/Components/Course";
import { useState } from "react";

const page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 via-blue-900 to-blue-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-11">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center gap-4">
            <div className="w-full md:w-80 flex-none text-white font-bold text-xl">
              EDMENTO LEARNING
            </div>
            <div className="w-full md:w-64 flex-auto text-amber-50">
              <p>Academic</p>
              <h1 className="font-bold text-4xl">Course List</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Sidebar */}
        <div className="text-blue-900 px-2 py-6 w-full lg:w-1/6 bg-white border border-slate-300">
          <ul className="text-white px-9 cursor-pointer">
            {["Programs", "Science", "Accademic Center", "History"].map(
              (subject, index) => (
                <li
                  key={index}
                  className="mb-2 text-blue-900 gap-4 cursor-pointer"
                >
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full text-left font-bold transition-transform duration-200 hover:scale-105 flex justify-between items-end cursor-pointer"
                  >
                    {subject}
                  </button>
                  {openIndex === index && (
                    <ul className="ml-4 mt-2 rounded p-2 text-sm text-blue-900">
                      <li className="hover:underline cursor-pointer">
                        Chapter 1
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Chapter 2
                      </li>
                      <li className="hover:underline cursor-pointer">
                        Chapter 3
                      </li>
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4">
          <Course />
        </div>
      </div>
    </>
  );
};

export default page;
