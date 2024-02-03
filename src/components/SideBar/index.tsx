"use client";

import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUser,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  isToggled?: boolean;
  onToggle?: () => void;
};

export const SideBar = (props?: Props) => {
  const { isToggled, onToggle } = props || {};

  return (
    <Sidebar
      className={`[&>div]:bg-gray-900 absolute top-0 ${
        isToggled ? `left-70` : `left-0`
      } z-40 h-screen p-2  overflow-y-auto transition-all duration-300 -translate-x-full bg-gray-900 w-64`}
    >
      <div className="flex justify-end mr-4">
        <button onClick={onToggle} className="block text-white">
          {isToggled ? "X" : "."}
        </button>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            key={0}
            href="#"
            icon={HiChartPie}
            className="text-white hover:text-gray-800"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            key={0}
            href="#"
            icon={FaGraduationCap}
            className="text-white hover:text-gray-800"
          >
            Classes
          </Sidebar.Item>
          <Sidebar.Item
            key={0}
            href="#"
            icon={HiOutlineCheckCircle}
            className="text-white hover:text-gray-800"
          >
            Grades
          </Sidebar.Item>
          <Sidebar.Collapse
            key={1}
            icon={HiUser}
            label="Users"
            className="text-white hover:text-gray-800"
          >
            <Sidebar.Item
              href="#"
              icon={HiUser}
              className="text-white hover:text-gray-800"
            >
              Teacher
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
              className="text-white hover:text-gray-800"
            >
              Student
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            key={0}
            href="#"
            icon={HiOutlineClipboardList}
            className="text-white hover:text-gray-800"
          >
            Notes
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
