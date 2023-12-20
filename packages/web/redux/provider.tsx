"use client";

import type { FC,ReactNode } from "react";
import { makeStore } from "./store";
import { Provider } from "react-redux";

interface Props{
  children?: ReactNode;
}

const CustomProvider:FC<Props>= ({ children }) =>{
  return (
    <Provider store={makeStore()}>
      {children}
    </Provider>
  );
}

export default CustomProvider;

