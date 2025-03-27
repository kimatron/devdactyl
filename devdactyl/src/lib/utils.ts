import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This utility function helps us combine Tailwind classes efficiently
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}