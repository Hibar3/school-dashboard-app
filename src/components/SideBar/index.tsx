import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUser,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

/** @SideBar props */
type SidebarProps = {
  isToggled?: boolean;
  onToggle?: () => void;
  className?: string;
  isFixed?: boolean;
  height?: number | string;
  isLongpage?: boolean; // set h-screen viewport for long pages
};

export const SideBar = (props?: SidebarProps) => {
  const {
    isToggled,
    onToggle,
    className,
    isFixed,
    height = 20,
    isLongpage = true,
  } = props || {};
  return (
    <div
      className={`${
        isFixed && "fixed"
      } ${
        isLongpage && "h-screen min-h-screen"
      }   sm:z-40 sm:inline-block sm:overflow-y-auto sm:transition-all duration-300 bg-stone-900 dark:bg-gray-800 sm:max-w-64 ${
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
              key={1}
              href="/classes"
              icon={FaGraduationCap}
              className="text-white hover:text-gray-800"
            >
              Classes
            </Sidebar.Item>
            <Sidebar.Item
              key={2}
              href="/grades"
              icon={HiOutlineCheckCircle}
              className="text-white hover:text-gray-800"
            >
              Grades
            </Sidebar.Item>
            <Sidebar.Collapse
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
              key={3}
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
