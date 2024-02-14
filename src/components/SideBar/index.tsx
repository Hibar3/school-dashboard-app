import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUser,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

/** @SideBar props */
type SidebarProps = {
  isToggled?: boolean;
  onToggle?: () => void;
};

export const SideBar = (props?: SidebarProps) => {
  const { isToggled, onToggle } = props || {};

  return (
    <Sidebar
      className={`[&>div]:bg-stone-900 sm:absolute sm:top-0 sm:${
        isToggled ? `left-70` : `left-0`
      } sm:z-40 sm:h-dvh sm:inline-block sm:items-stretch sm:p-2 sm:overflow-y-auto sm:transition-all duration-300 sm:-translate-x-full bg-stone-900 dark:bg-gray-800 sm:max-w-64 hidden`}
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
            href="/dashboard"
            icon={HiChartPie}
            className="text-white hover:text-gray-800"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            key={0}
            href="/classes"
            icon={FaGraduationCap}
            className="text-white hover:text-gray-800"
          >
            Classes
          </Sidebar.Item>
          <Sidebar.Item
            key={0}
            href="/grades"
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
              href="/users/teacher"
              icon={HiUser}
              className="text-white hover:text-gray-800"
            >
              Teacher
            </Sidebar.Item>
            <Sidebar.Item
              href="/users/student"
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
