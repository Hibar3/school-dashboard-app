"use client";

import { useState } from "react";
import { Box, Profile } from "@/components";
import View from "@/containers/View";
import ApexChart from "@/containers/ApexCharts";
import GradeTable from "@/containers/Table";
import { Pagination } from "flowbite-react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // lazy import for chart.js
import { useSize } from "../lib/helper";
import { data, options, series } from "./data";
import { subjects } from "../lib/constants";

export default function Index() {
  const windowsize = useSize();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

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

  const subjectTable = () => {

    return (
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Class Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Exam 1
                </th>
                <th scope="col" className="py-3 px-6">
                  Exam 2
                </th>
                <th scope="col" className="py-3 px-6">
                  Exam 3
                </th>
                <th scope="col" className="py-3 px-6">
                  Final Paper
                </th>
                <th scope="col" className="py-3 px-6">
                  Final Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr
                  key={subject.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {subject.name}
                  </td>
                  <td className="py-4 px-6">{subject.exam1}</td>
                  <td className="py-4 px-6">{subject.exam2}</td>
                  <td className="py-4 px-6">{subject.exam3}</td>
                  <td className="py-4 px-6">{subject.finalPaper}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded-full ${subject.gradeColor}`}
                    >
                      {subject.finalGrade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <View>
      <div className="p-1 rounded-lg">
        {/* Double panel view -  Left + Right  */}
        <div className="gap-1 sm:grid grid-cols-2 grid-rows-2 grid-flow-col mb-4">
          {/* Left Panel */}
          <div className="col-span-2 row-span-2 p-2 sm:w-full">
            {/* Table */}
            <div className="p-2 border-dashed rounded-lg">
              <p className="font-bold text-black dark:text-white">Grades</p>
              {subjectTable()}
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
            <div className="sm:flex sm:flex-1 mt-2 p-1 border-dashed rounded-lg w-full overflow-x-auto">
              {/* Bar Chart */}
              <div className="sm:flex sm:flex-1 m-2 rounded-lg w-full">
                <div className="sm:flex sm:flex-1 bg-white dark:bg-gray-800 shadow p-2 sm:p-4 rounded-lg w-full">
                  <div className="sm:flex sm:flex-1 justify-between border-gray-200 dark:border-gray-700 mb-4 pb-4 border-b">
                    <div className="flex flex-1 border-dashed">
                      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-0 rounded-lg w-12 h-12 me-2">
                        {renderIcon()}
                      </div>
                      <div className="items-center border-dashed w-full">
                        <h5 className="pb-1 font-bold text-gray-900 text-xl dark:text-white leading-none">
                          In Perspective
                        </h5>
                        <p className="font-normal text-gray-500 text-sm dark:text-gray-400">
                          Scores by subjects
                        </p>
                        <div
                          id="bar-chart"
                          className="items-center border-dashed overflow-x-auto"
                        >
                          <ApexChart
                            options={options}
                            series={series}
                            type="bar"
                            width={`${windowsize[0] > 500 ? "360" : "280"}px`}
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
                    <div className="flex flex-1 border-dashed">
                      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 sm:p-0 rounded-lg w-12 h-12 me-2">
                        {renderIcon()}
                      </div>
                      <div className="items-center border-dashed w-full">
                        <h5 className="pb-1 font-bold text-gray-900 text-xl dark:text-white leading-none">
                          Overall Perfomance
                        </h5>
                        <p className="font-normal text-gray-500 text-sm dark:text-gray-400">
                          Average score per Semester
                        </p>
                        <div
                          id="bar-chart"
                          className="flex justify-end justify-items-center items-center border-dashed max-w-64 overflow-x-auto"
                        >
                          <Pie data={data} width={"220"} height={"220"} />
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
            className={`sm:col-span-3 sm:row-span-3 p-2 border-dashed border-gray-700 rounded-lg max-w-xs sm:${isOpen ? "w-48" : "w-64"
              } min-w-48 transition-all duration-300`}
          >
            {/* Profile card */}
            <p className="font-bold text-black dark:text-white">Profile</p>
            <Profile />

            {/* Quick Navigations */}
            <div className="mt-4">
              <p className="font-bold text-black dark:text-white">
                Latest Grades
              </p>
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
