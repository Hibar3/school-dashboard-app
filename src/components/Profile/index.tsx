import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Image from "next/image";

type ProfileProps = {
  className?: string;
  enableButtons?: boolean;
};

export const Profile = (props?: ProfileProps) => {
  const { className, enableButtons = false } = props || {};
  return (
    <Card className="sm:max-w-sm">
      <div className="flex justify-end">
        <Dropdown inline label="" className="ml-2">
          <DropdownItem>
            <a
              href="#"
              className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 text-gray-700 text-sm dark:hover:text-white dark:text-gray-200"
            >
              Edit
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 text-gray-700 text-sm dark:hover:text-white dark:text-gray-200"
            >
              Export Data
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 text-red-600 text-sm dark:hover:text-white dark:text-gray-200"
            >
              Delete
            </a>
          </DropdownItem>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bonnie image"
          height="80"
          src="https://cdn-icons-png.flaticon.com/512/4646/4646084.png"
          width="80"
          className="shadow-lg mb-3 rounded-full"
        />
        <h5 className="mb-1 font-medium text-gray-900 text-xl dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-gray-500 text-sm dark:text-gray-400">
          Visual Designer
        </span>
        {enableButtons && (
          <div className="flex space-x-3 mt-4 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center bg-cyan-700 hover:bg-cyan-800 dark:hover:bg-cyan-700 dark:bg-cyan-600 px-4 py-2 rounded-lg font-medium text-center text-sm text-white focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              Add friend
            </a>
            <a
              href="#"
              className="inline-flex items-center border-gray-300 dark:hover:border-gray-700 dark:border-gray-600 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-lg font-medium text-center text-gray-900 text-sm focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Profile;
