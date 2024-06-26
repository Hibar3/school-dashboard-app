import { useState } from "react";
import { Header, SideBar } from "@/components";

// default layout view with sidebar
export const View = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`h-dvh`}>
    <div className={`flex flex-row`}>
      <SideBar isToggled={isOpen} onToggle={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300`}>
        <Header onToggle={toggleSidebar} />
        {children}
      </div>
    </div>
    </div>
  );
};

export default View;
