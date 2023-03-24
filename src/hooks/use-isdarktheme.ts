import { strStrip } from "@/lib/helpers";
import { useTheme } from "next-themes";

export function useIsDarkTheme() {
  const { theme } = useTheme();

  const isDarkTheme = strStrip(theme) === "dark";

  return isDarkTheme;
}
