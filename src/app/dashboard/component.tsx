"use client";

import {
  Header,
  SideBar,
  ProductCard,
  Calendar,
  Box,
  VideoPlayer,
} from "@/components";
import { useState } from "react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex-1 ${
        isOpen ? "ml-64" : "ml-0"
      } transition-all duration-300`}
    >
      <Header onToggle={toggleSidebar} />
      <SideBar isToggled={isOpen} onToggle={toggleSidebar} />
      <div>
        <div className="p-2 border-gray-700 rounded-lg">
          <div className="grid grid-cols-2 grid-flow-col gap-1 mb-4">
            <div className="col-span-2 row-span-2 p-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-x-1 gap-y-3">
                <ProductCard
                  title="English 101"
                  subtitle="Learn the basics"
                  text="Class Starts today at 11AM, Class-3A"
                  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/800px-Closed_Book_Icon.svg.png"
                />
                <ProductCard
                  title="Biology"
                  subtitle="How brain works?"
                  text="Class Starts today at 11AM, Class-3A"
                  imgSrc="https://cdn-icons-png.flaticon.com/512/2201/2201544.png"
                />
                <ProductCard
                  title="World Economy"
                  subtitle="Learn the basics"
                  text="Class Starts today at 11AM, Class-3A"
                  imgSrc="https://cdn-icons-png.flaticon.com/512/3635/3635799.png"
                />
                <ProductCard
                  title="Paper Review"
                  subtitle="Learn the basics"
                  text="Class Starts today at 11AM, Class-3A"
                  imgSrc="https://cdn-icons-png.flaticon.com/256/10239/10239994.png"
                />
              </div>
              <div className="mt-2 p-2 rounded-lg">
                <p> Your Schedule</p>
                <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-800 mb-2 rounded">
                  <Calendar />
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-3 p-2 border-2 border-dashed border-gray-700 rounded-lg w-64 max-w-xs">
              <h5 className="font-bold">Ongoing Lesson </h5>
              <VideoPlayer />
              <h5 className="mt-2 font-bold">Grades</h5>
              <Box />
              <Box />
              <Box />
              <h5 className="mt-2 font-bold">Inbox </h5>
              <div className="bg-gray-800 shadow p-2 dark:border-gray-700 rounded-lg max-w-sm max-h-40">
                <a href="#">
                  <h5 className="mb-2 font-bold text-sm dark:text-white tracking-tight">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 text-xs">
                  Here are the biggest enterprise technology acquisitions of
                </p>
                <a
                  href="#"
                  className="inline-flex items-center bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 p-3 rounded-full font-medium text-center text-white text-xs focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-3.5 h-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
