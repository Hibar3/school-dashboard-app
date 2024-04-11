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
  className?: string;
};

export const SideBar = (props?: SidebarProps) => {
  const { isToggled, onToggle, className } = props || {};

  return (
    <div
      className={`[&>div]:bg-stone-900 sm:top-0 sm:z-40 sm:inline-block sm:items-stretch sm:overflow-y-auto sm:transition-all duration-300 bg-stone-900 dark:bg-gray-800 sm:max-w-64 ${
        isToggled ? "w-64" : "w-0"
      } hidden`}
    >
      <Sidebar className={className || `[&>div]:bg-stone-900`}>
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
    </div>
  );
};

export default SideBar;
