"use client";

import { useState } from "react";
import { Profile } from "@/components";
import View from "@/containers/View";
import ApexChart from "@/containers/ApexCharts";
import GradeTable from "@/containers/Table";
import {
  IoArrowForwardCircleOutline,
  IoBookOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // lazy import for chart.js



const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => (
    <svg
      className="w-6 h-6 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 19"
    >
      <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
      <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
    </svg>
  );

  return (
    <View>
      <div>
        <div className="border-gray-700 p-1 rounded-lg">
          {/* Double panel view -  Left + Right  */}
          <div className="gap-1 sm:grid grid-cols-2 grid-rows-2 grid-flow-col mb-4">
            {/* Left Panel */}
            <div className="col-span-2 row-span-2 p-2 sm:w-full max-w-sm sm:max-w-screen-2xl">
              {/* Table */}
              <div className="p-2 border border-dashed rounded-lg">
                <p className="font-bold text-black dark:text-white">Grades</p>
                <GradeTable />
                <div className="flex sm:place-content-end mt-2 overflow-x-auto">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={100}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
              {/* End of Table */}

              {/* Chart Section*/}
              <div className="sm:flex sm:flex-1 mt-2 p-1 border border-dashed rounded-lg w-full overflow-x-auto">
                {/* Bar Chart */}
                <div className="sm:flex sm:flex-1 m-2 rounded-lg w-full">
                  <div className="sm:flex sm:flex-1 bg-white dark:bg-gray-800 shadow p-2 sm:p-4 rounded-lg w-full">
                    <div className="sm:flex sm:flex-1 justify-between border-gray-200 dark:border-gray-700 mb-4 pb-4 border-b">
                      <div className="flex flex-1 border border-dashed">
                        <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg w-12 h-12 me-2">
                          {renderIcon()}
                        </div>
                        <div className="items-center border border-dashed w-full">
                          <h5 className="pb-1 font-bold text-gray-900 text-xl dark:text-white leading-none">
                            In Perspective
                          </h5>
                          <p className="font-normal text-gray-500 text-sm dark:text-gray-400">
                            Scores by subjects
                          </p>
                          <div
                            id="bar-chart"
                            className="items-center border border-dashed overflow-x-auto"
                          >
                            <ApexChart
                              options={options}
                              series={series}
                              type="bar"
                              width={"320px"}
                            />
                          </div>
                        </div>
                        <div className="">
                          <span className="inline-flex items-center bg-green-100 dark:bg-green-900 px-2.5 py-1 rounded-md font-medium text-green-800 text-xs dark:text-green-300">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pie Chart */}
                <div className="sm:flex sm:flex-1 m-2 rounded-lg w-full">
                  <div className="sm:flex sm:flex-1 bg-white dark:bg-gray-800 shadow p-2 sm:p-4 rounded-lg w-full">
                    <div className="sm:flex sm:flex-1 justify-between border-gray-200 dark:border-gray-700 mb-4 pb-4 border-b">
                      <div className="flex flex-1 border border-dashed">
                        <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg w-12 h-12 me-2">
                          {renderIcon()}
                        </div>
                        <div className="items-center border border-dashed w-full">
                          <h5 className="pb-1 font-bold text-gray-900 text-xl dark:text-white leading-none">
                            Overall Perfomance
                          </h5>
                          <p className="font-normal text-gray-500 text-sm dark:text-gray-400">
                            Average score per Semester
                          </p>
                          <div
                            id="bar-chart"
                            className="flex justify-end justify-items-center items-center border border-dashed max-w-64 overflow-x-auto"
                          >
                            <Pie
                              data={data}
                              width={"120"}
                              height={"120"}
                              style={{ alignSelf: "center", padding: 10 }}
                            />
                          </div>
                        </div>
                        <div className="">
                          <span className="inline-flex items-center bg-green-100 dark:bg-green-900 px-2.5 py-1 rounded-md font-medium text-green-800 text-xs dark:text-green-300">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Chart Section*/}

            {/* Right Panel */}
            <div
              className={`sm:col-span-3 sm:row-span-3 p-2 border-2 border-dashed border-gray-700 rounded-lg sm:max-w-[300px] sm:${
                isOpen ? "w-48" : "w-64"
              } max-w-sm w-10/12 min-w-48 transition-all duration-300`}
            >
              {/* Profile card */}
              <p className="font-bold text-black dark:text-white">Profile</p>
              <Profile />

              {/* Quick Navigations */}
              <div className="mt-4">
                <p className="font-bold text-black dark:text-white">
                  Latest Grades
                </p>
                <div className="flex border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border rounded-lg overflow-hidden">
                  <div className="rounded max-w-12 text-gray-900 dark:text-white place-self-center">
                    <IoBookOutline />
                  </div>
                  <div className="flex justify-end items-center ml-2 w-full max-h-12 leading-normal">
                    <p className="flex w-full font-normal text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
                      Lesson Materials
                    </p>
                    <div className="flex justify-end text-ellipsis text-gray-900 text-sm dark:text-white overflow-hidden">
                      <IoArrowForwardCircleOutline />
                    </div>
                  </div>
                </div>
                <div className="flex border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border rounded-lg overflow-hidden">
                  <div className="rounded max-w-12 text-gray-900 dark:text-white place-self-center">
                    <IoBriefcaseOutline />
                  </div>
                  <div className="flex justify-end items-center ml-2 w-full max-h-12 leading-normal">
                    <p className="flex w-full font-normal text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
                      Homework
                    </p>
                    <p className="flex justify-end text-ellipsis text-gray-900 text-sm dark:text-white overflow-hidden">
                      <IoArrowForwardCircleOutline />
                    </p>
                  </div>
                </div>
                <div className="flex border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border rounded-lg overflow-hidden">
                  <div className="rounded max-w-12 text-gray-900 dark:text-white place-self-center">
                    <HiOutlineClipboardList />
                  </div>
                  <div className="flex justify-end items-center ml-2 w-full max-h-12 leading-normal">
                    <p className="flex w-full font-normal text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
                      Your Notes
                    </p>
                    <p className="flex justify-end text-ellipsis text-gray-900 text-sm dark:text-white overflow-hidden">
                      <IoArrowForwardCircleOutline />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
