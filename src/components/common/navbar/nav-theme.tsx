import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsDarkTheme } from "@/hooks/use-isdarktheme";
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import * as React from "react";

export const NavThemeToggle = () => {
  const { setTheme } = useTheme();

  const isDarktheme = useIsDarkTheme();

  const mounted = useMounted();

  const SelectedIcon =
    isDarktheme && mounted ? Icons.themeDark : Icons.themeLight;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <SelectedIcon className="hover:text-theme-900 dark:text-theme-400 dark:hover:text-theme-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.themeLight className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.themeDark className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.themeSystem className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
