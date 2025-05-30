import CourseList from "@/Components/Course"; // your client component
import Sidebar from "@/Components/Sidebar";
import WithDelayLoading from "../loading";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/course", {
    cache: "no-store", // or 'force-cache' depending on your caching needs
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  const courses = await res.json();

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

      <WithDelayLoading>
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="w-full lg:w-3/4 p-4 lg:mx-20 sm:mx-2">
            <div className="justify-center text-center font-bold mb-2">Course</div>
            <CourseList initialCourses={courses} />
          </div>
        </div>
      </WithDelayLoading>
    </>
  );
}
