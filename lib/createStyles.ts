import { ClassValue } from "clsx";

type Props<T> = Record<string, Record<string, ClassValue>>;

export const wva: <T>(config?: T | undefined) => string = (config) => {
  return "";
};
