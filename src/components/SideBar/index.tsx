"use client";

import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

type Props = {
  isToggled?: boolean;
  onToggle?: () => void;
};


export const SideBar = (props?: Props) => {
  const { isToggled, onToggle } = props || {};

  return (
    <div
      id="drawer-navigation"
      className={`absolute top-0 ${isToggled ? `left-60` : `left-0`} z-40 h-screen p-4 overflow-y-auto transition-all duration-300 -translate-x-full bg-gray-800 w-64`}
      tabIndex={1}
      aria-labelledby="drawer-navigation-label"
    >
      <Sidebar color="bg-gray-800" className="bg-gray-800" >
        <button className="block bg-gray-800 text-blue-400" onClick={onToggle}>
          {isToggled ? "Close" : "Open"}
        </button>
        <Sidebar.Items  className="bg-gray-800">
          <Sidebar.ItemGroup  className="bg-gray-800">
            <Sidebar.Item key={0} href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse  className="bg-gray-800" key={1} icon={HiShoppingBag} label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
