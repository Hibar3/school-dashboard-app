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

export const SideBar = (props: SidebarProps) => {
  const {
    isToggled,
    onToggle,
    className,
    isFixed,
    height = 20,
    isLongpage = true,
  } = props || {};
  
  return (
    <>
      <nav>
        {/* Mobile Dropdown Menu (using Flowbite) */}
        {isToggled && (
          <div
            id="dropdown"
            className="z-10 absolute bg-white dark:bg-gray-700 shadow mt-12 rounded-lg divide-y divide-gray-100 w-44"
          >
            <ul
              className="py-2 text-gray-700 text-sm dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="/dashboard"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <HiChartPie className="inline-block mr-2" /> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/classes"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <FaGraduationCap className="inline-block mr-2" /> Classes
                </a>
              </li>
              <li>
                <a
                  href="/grades"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <HiOutlineCheckCircle className="inline-block mr-2" /> Grades
                </a>
              </li>
              <li>
                <a
                  href="/users/teacher"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <HiUser className="inline-block mr-2" /> Teacher
                </a>
              </li>
              <li>
                <a
                  href="/users/student"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <HiUser className="inline-block mr-2" /> Student
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 dark:hover:text-white"
                >
                  <HiOutlineClipboardList className="inline-block mr-2" /> Notes
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop View: Sidebar */}
      <div
        className={`${isFixed && "fixed"} ${
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
    </>
  );
};

export default SideBar;
