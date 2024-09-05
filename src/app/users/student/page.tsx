"use client";

import { useState } from "react";
import { Box, Profile } from "@/components";
import View from "@/containers/View";
import { Pagination } from "flowbite-react";
import "chart.js/auto"; // lazy import for chart.js
import { useSize } from "../../lib/helper";
import { users } from "@/app/lib/constants";

export default function Index() {
  const windowsize = useSize();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const renderTable = () => {
    return (
      <div className="mx-auto mt-2 container">
        <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
          <table className="w-full text-gray-500 text-left text-sm dark:text-gray-400">
            <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 text-xs dark:text-gray-400 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="dark:border-gray-700 bg-white dark:bg-gray-800 border-b"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.contact}</td>
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
              <p className="font-bold text-black dark:text-white">Students</p>
              {renderTable()}
              <div className="flex sm:place-content-end mt-2 overflow-x-auto">
                <Pagination
                  currentPage={currentPage}
                  totalPages={100}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
            {/* End of Table */}
          </div>

          {/* Right Panel */}
          <div
            className={`sm:col-span-3 sm:row-span-3 p-2 border-dashed border-gray-700 rounded-lg max-w-xs sm:${
              isOpen ? "w-48" : "w-64"
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
