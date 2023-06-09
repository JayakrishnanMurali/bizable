import React from "react";

interface NavContainerProps {
  children: React.ReactNode;
}

export const NavContainer = ({ children }: NavContainerProps) => {
  return (
    <nav className="flex h-16 bg-theme-50 dark:bg-theme-900 border-b border-b-theme-200  dark:border-b-theme-700 items-center justify-between py-4">
      {children}
    </nav>
  );
};
