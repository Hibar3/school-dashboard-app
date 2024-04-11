"use client";

import { ProductCard, Calendar, Box, VideoPlayer } from "@/components";
import View from "@/containers/View";

export default function Dashboard() {
  return (
    <View>
      <div className="flex-1">
        <div className="border-gray-700 p-2 rounded-lg">
          <div className="gap-1 grid grid-cols-2 grid-flow-col mb-4">
            <div className="col-span-2 row-span-2 p-2">
              <div className="gap-x-1 gap-y-3 grid grid-cols-2 grid-rows-2">
                <ProductCard
                  title="English 101"
                  subtitle="Learn the basics"
                  text="Class Starts today at 11AM, Class-3A"
                  imgSrc="/book-icon.svg.png"
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
                <p className="font-bold text-black dark:text-white">
                  Your Schedule
                </p>
                <div className="flex justify-center items-center dark:bg-gray-800 mb-2 rounded">
                  <Calendar />
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-700 col-span-3 row-span-3 p-2 border-dashed rounded-lg w-64 max-w-xs">
              <h5 className="font-bold text-black dark:text-white">
                Ongoing Lesson
              </h5>
              <VideoPlayer />
              <h5 className="mt-2 font-bold text-black dark:text-white">
                Grades
              </h5>
              <Box />
              <Box />
              <Box />
              <h5 className="mt-2 font-bold text-black dark:text-white">
                Inbox
              </h5>
              <div className="dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-2 rounded-lg max-w-sm max-h-40">
                <a href="#">
                  <h5 className="mb-2 font-bold text-black text-sm dark:text-white tracking-tight">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
