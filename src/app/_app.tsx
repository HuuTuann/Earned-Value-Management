"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@/state/store";

export const App = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
