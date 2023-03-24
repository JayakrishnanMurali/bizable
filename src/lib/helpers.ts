import { env } from "@/env.mjs";
import ms from "ms";

export const getUserInitials = (name: string | null) => {
  const userName = name;
  const initials = userName
    ?.split(" ")
    .map((str) => str.slice(0, 1))
    .join("")
    .trim()
    .toUpperCase()
    .slice(0, 2);
  return initials;
};

export const removeDay = (timestamp?: Date): string => {
  if (!timestamp) return "";
  return timestamp.toDateString().split(" ").slice(1).join(" ");
};

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export const timeToRead = (content: string): string => {
  const wordsPerMinute = 250;
  const words = content.split(" ").length;
  const readingTimeInMinutes = words / wordsPerMinute;
  const roundedReadingTime = Math.ceil(readingTimeInMinutes);

  return roundedReadingTime + " min";
};

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_URL}${path}`;
}
