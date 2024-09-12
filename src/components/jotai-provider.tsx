"use client";

import { Provider } from "jotai";

export const Jotaiprovider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};
