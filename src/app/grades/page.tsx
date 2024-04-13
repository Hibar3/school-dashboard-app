"use client";

import { useState } from "react";
import { Header, Profile, SideBar, VideoPlayer } from "@/components";
import View from "@/containers/View";
import Chatbox from "@/containers/Chatbox";
import Comments from "@/containers/Comments";
import {
  IoArrowForwardCircleOutline,
  IoBookOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import GradeTable from "@/containers/Table";
import { Pagination } from "flowbite-react";

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <div>
        <div className="border-gray-700 p-1 rounded-lg">
          {/* Double panel view -  Left + Right  */}
          <div className="gap-1 sm:grid grid-cols-2 grid-flow-col mb-4">
            {/* Left Panel */}
            <div className="col-span-2 row-span-2 p-2 sm:w-full max-w-sm sm:max-w-screen-2xl">
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
              <div className="mt-2 p-2 border border-dashed rounded-lg">
                <div className="gap-4 grid grid-flow-col grid-col-2">
                  <div className="mt-2 p-2 border border-dashed rounded-lg">
                    01
                  </div>

                  <div className="mt-2 p-2 border border-dashed rounded-lg">
                    09
                  </div>
                </div>
              </div>
            </div>
            {/* End Chart Section*/}

            {/* Right Panel */}
            <div
              className={`col-span-3 row-span-3 p-2 border-2 border-dashed border-gray-700 rounded-lg max-w-[300px] sm:${
                isOpen ? "w-48" : "w-64"
              } transition-all duration-300`}
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
