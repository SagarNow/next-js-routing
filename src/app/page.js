
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] flex flex-col justify-center items-center">
      
      
      <h1 className="text-4xl font-bold  text-purple-600 p-4">
        Routing in <span className="text-pink-600">Next.js</span>
      </h1>

      {/* Big "sagar" text */}
      <h2 className="text-[200px] font-extrabold text-white opacity-20 select-none -mt-10">
        sagar
      </h2>

      {/* Example Routing Buttons */}
      <div className="mt-8 flex gap-4">
        <Link href="/about">
          <button className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 shadow-md">
            About
          </button>
        </Link>
        <Link href="/projects">
          <button className="px-6 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-500 shadow-md">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;

   

