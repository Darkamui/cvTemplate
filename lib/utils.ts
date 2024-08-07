import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert string date to real date object
export const monthYearToDate = (monthYear: string) => {
  const [month, year] = monthYear.split(" ");
  return new Date(Date.parse(`${month} 1, ${year}`));
};
// Get difference in months between start and end date objects generated
export const monthsDifference = (start: string, end: string) => {
  const startDate = monthYearToDate(start);
  const endDate = monthYearToDate(end);

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();

  return yearsDiff * 12 + monthsDiff;
};
