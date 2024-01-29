import { ReactNode } from "react";

export type PropertySetup={
  id: string;
  title: string;
  description: string;
  redirect_url: string;
  icon?: ReactNode;
  redirect_url_text: string;
}