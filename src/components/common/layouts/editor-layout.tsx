import { NavContainer, NavProfile } from "@/components/common/navbar";
import { NavPostStatus } from "@/components/common/navbar/nav-post-status";
import { NavPublish } from "@/components/common/navbar/nav-publish";
import React from "react";

interface iLayout {
  children: React.ReactNode;
}

export const EditorLayout: React.FC<iLayout> = ({ children }) => {
  return (
    <main>
      <header className="container sticky top-0 z-40">
        <NavContainer>
          <NavPostStatus />
          <NavPublish />
        </NavContainer>
      </header>

      <main className="container mx-auto grid items-start gap-10 py-8">
        {children}
      </main>
    </main>
  );
};
