"use client";

import { Header, SideBar, ProductCard, Calendar } from "@/components";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header onToggle={toggleSidebar} />
      <SideBar isToggled={isOpen} onToggle={toggleSidebar} />

      <div
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-2"
        } transition-all duration-300`}
      >
        <div className="p-2 border-2 rounded-lg border-gray-700">
          <div className="grid grid-cols-2 grid-flow-col gap-1 mb-4">
            <div className="p-2 border-2 border-dashed rounded-lg border-gray-700 row-span-2 col-span-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
            <div className="p-2 max-w-sm border-2 border-dashed rounded-lg border-gray-700 row-span-3 col-span-3">
              shit sadsadda
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-2"
        } transition-all duration-300`}
      >
        <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex items-center mb-2 justify-center rounded bg-gray-50 dark:bg-gray-800">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
