"use client";

import { useState } from "react";
import { Header, Profile, SideBar } from "@/components";

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
        <Profile/>
      </div>
    </div>
  );
}
