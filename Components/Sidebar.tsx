"use client";

import { useState } from "react";

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-blue-900 px-2 py-6 w-full lg:w-1/6 bg-white border border-slate-300">
      <ul className="text-white px-9 cursor-pointer">
        {["Programs", "Science", "Accademic Center", "History"].map(
          (subject, index) => (
            <li key={index} className="mb-2 text-blue-900 gap-4 cursor-pointer">
              <button
                onClick={() => toggleSubmenu(index)}
                className="w-full text-left font-bold transition-transform duration-200 hover:scale-105 flex justify-between items-end cursor-pointer"
              >
                {subject}
              </button>
              {openIndex === index && (
                <ul className="ml-4 mt-2 rounded p-2 text-sm text-blue-900">
                  <li className="hover:underline cursor-pointer">Chapter 1</li>
                  <li className="hover:underline cursor-pointer">Chapter 2</li>
                  <li className="hover:underline cursor-pointer">Chapter 3</li>
                </ul>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
