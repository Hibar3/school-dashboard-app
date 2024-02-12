"use client";

import { useState } from "react";
import { Header, SideBar, VideoPlayer } from "@/components";
import {
  IoSendSharp,
  IoArrowForwardCircleOutline,
  IoBookOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import Comments from "@/containers/Comments";

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
      <Header onToggle={toggleSidebar} />
      <SideBar isToggled={isOpen} onToggle={toggleSidebar} />
      <div>
        <div className="p-2 border-gray-700 rounded-lg">
          <div className="grid grid-cols-2 grid-flow-col gap-1 mb-4">
            <div className="col-span-2 row-span-2 p-2 sm:w-full">
              {/* Video Player */}
              <div className="mt-2 p-2 border border-dashed rounded-lg">
                <p> Your Classes</p>
                <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-800 mb-2 align-center">
                  <VideoPlayer className="w-full aspect-video" />
                </div>
              </div>
              {/* End of Video Player */}

              {/* Comments Section*/}
              <div className="mt-2 p-2 border border-dashed rounded-lg">
                <p>Comments</p>
                <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-800 mb-2 rounded">
                  <Comments />
                </div>
              </div>
            </div>
            {/* End Comments Section*/}

            {/* Side Panel */}
            <div className="col-span-3 row-span-3 p-2 border-2 border-dashed border-gray-700 rounded-lg max-w-64">
              {/* Chat Box */}
              <div className="flex flex-col bg-slate-600 border-dashed border-gray-700 max-h-94">
                <div className="flex flex-col shadow-md border sm:h-96 rounded">
                  <div className="flex items-center justify-between p-2 border-b">
                    <div className="flex items-center">
                      <div className="pl-2">
                        <div className="font-semibold">
                          <a className="hover:underline" href="#">
                            Live Chat
                          </a>
                        </div>
                        <div className="text-gray-600 text-xs">Online</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-2 overflow-y-auto">
                    {/* Chat LTR */}
                    <div className="flex items-start gap-2.5 mb-4">
                      <img
                        className="rounded-full w-8 h-8"
                        src="https://i.pravatar.cc/300"
                        alt="placeholder"
                      />
                      <div className="flex flex-col bg-gray-700 dark:bg-gray-700 p-4 border-gray-200 rounded-e-xl rounded-es-xl w-full max-w-44 leading-1.5">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="font-semibold text-xs dark:text-gray-900">
                            Bonnie Green
                          </span>
                          <span className="font-normal text-gray-400 text-xs dark:text-gray-500">
                            11:46
                          </span>
                        </div>
                        <p className="py-2 font-normal text-xs dark:text-gray-900">
                          That's awesome. I think our users will really
                          appreciate the improvements.
                        </p>
                        <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                          Delivered
                        </span>
                      </div>
                    </div>

                    {/* Chat RTL */}
                    <div className="flex flex-row-reverse mb-4">
                      <div className="flex flex-col bg-gray-100 dark:bg-gray-700 p-2.5 border-gray-200 rounded-ee-xl rounded-s-xl w-full max-w-[320px] leading-1.5">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="font-semibold text-gray-900 text-xs dark:text-white">
                            You
                          </span>
                          <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                            11:46
                          </span>
                        </div>
                        <p className="py-2 font-normal text-gray-900 text-xs dark:text-white">
                          That's awesome. I think our users will really
                          appreciate the improvements.
                        </p>
                        <span className="font-normal text-gray-500 text-xs dark:text-gray-400">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-2 border-t">
                    <div className="mx-2 w-full">
                      <input
                        className="bg-slate-600 border border-gray-200 rounded-full sm:w-full"
                        type="text"
                        defaultValue=""
                        placeholder="Aa"
                      />
                    </div>
                    <div>
                      <button
                        className="inline-flex hover:bg-indigo-50 p-2 rounded-full"
                        type="button"
                      >
                        <IoSendSharp />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Navigations */}
              <div className="mt-4">
                <div className="flex bg-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow mb-2 p-2 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-slate-200 max-w-12 text-gray-900 place-self-center rounded">
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
                  <div className="bg-slate-200 max-w-12 text-gray-900 place-self-center rounded">
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
                  <div className="bg-slate-200 max-w-12 text-gray-900 place-self-center rounded">
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
