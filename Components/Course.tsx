import React from "react";

const Course = () => {
  const progress = 70;
  return (
    <>
      <div className="justify-center text-center font-bold mb-2">Course</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mx-5">
        <div className="max-w-sm rounded-xl shadow-lg overflow-hidden bg-white">
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2 text-blue-900">Card Title</h2>
            <p className="text-gray-700 text-base mb-4">
              This is a sample card description. You can customize it with your
              own content and styles.
            </p>

            {/* Progress Bar inside card content */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button className="text-blue-950 rounded-lg hover:text-blue-600 transition">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
