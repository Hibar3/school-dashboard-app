"use client";

import { useState } from "react";
import { Header, SideBar, VideoPlayer } from "@/components";
import {
  IoArrowForwardCircleOutline,
  IoBookOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import Comments from "@/containers/Comments";
import Chatbox from "@/containers/Chatbox";

export default function Index() {
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
      <Header title="Ongoing Lesson" onToggle={toggleSidebar} />
      <SideBar isToggled={isOpen} onToggle={toggleSidebar} />
      <div>
        <div className="p-1 border-gray-700 rounded-lg">
          <div className="grid grid-cols-2 grid-flow-col gap-1 mb-4">
            <div className="col-span-2 row-span-2 p-2 sm:w-full">
              {/* Video Player */}
              <div className="p-2 border border-dashed rounded-lg">
                <p className="font-bold text-black dark:text-white">
                  Your Classes
                </p>
                <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-800 mb-2 align-center">
                  <VideoPlayer className="w-full aspect-video" />
                </div>
              </div>
              {/* End of Video Player */}

              {/* Comments Section*/}
              <div className="mt-2 p-2 border border-dashed rounded-lg">
                <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-800 mb-2 rounded">
                  <Comments />
                </div>
              </div>
            </div>
            {/* End Comments Section*/}

            {/* Side Panel */}
            <div
              className={`flex-1 col-span-3 row-span-3 p-2 border-2 border-dashed border-gray-700  rounded-lg max-w-64 ${
                isOpen ? "w-48" : "w-64"
              } transition-all duration-300`}
            >
              {/* Chat Box */}
              <Chatbox />

              {/* Quick Navigations */}
              <div className="mt-4">
                <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="max-w-12 text-gray-900 dark:text-white place-self-center rounded">
                    <IoBookOutline />
                  </div>
                  <div className="flex items-center justify-end ml-2 w-full max-h-12 leading-normal">
                    <p className="flex w-full font-normal text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
                      Lesson Materials
                    </p>
                    <div className="flex justify-end text-ellipsis text-gray-900 text-sm dark:text-white overflow-hidden">
                      <IoArrowForwardCircleOutline />
                    </div>
                  </div>
                </div>
                <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="max-w-12 text-gray-900 dark:text-white place-self-center rounded">
                    <IoBriefcaseOutline />
                  </div>
                  <div className="flex items-center justify-end ml-2 w-full max-h-12 leading-normal">
                    <p className="flex w-full font-normal text-ellipsis text-gray-900 text-sm dark:text-white tracking-tight overflow-hidden">
                      Homework
                    </p>
                    <p className="flex justify-end text-ellipsis text-gray-900 text-sm dark:text-white overflow-hidden">
                      <IoArrowForwardCircleOutline />
                    </p>
                  </div>
                </div>
                <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="max-w-12 text-gray-900 dark:text-white place-self-center rounded">
                    <HiOutlineClipboardList />
                  </div>
                  <div className="flex items-center justify-end ml-2 w-full max-h-12 leading-normal">
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
    </div>
  );
}
