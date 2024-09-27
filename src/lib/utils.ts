import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = <T>(...args: [string, RequestInit?]): Promise<T> => {
  return fetch(...args).then((res) => res.json() as Promise<T>);
};
