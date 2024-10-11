import { useState } from "react";
import { Header, SideBar } from "@/components";

// default layout view with sidebar
export const View = ({
  children,
  isLongpage,
}: Readonly<{
  children: React.ReactNode;
  isLongpage?: boolean // see sidebar props
}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-dvh`}>
      <div className={`flex`}>
        <SideBar isLongpage={isLongpage} isToggled={isOpen} onToggle={toggleSidebar} />
        <div className={`flex-1 transition-all duration-300`}>
          <Header onToggle={toggleSidebar} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default View;
