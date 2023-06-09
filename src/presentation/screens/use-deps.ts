import { useContext } from "react";
import { AppServicesContext } from "./app-providers";

export function useDeps() {
  const deps = useContext(AppServicesContext);
  return deps;
}

