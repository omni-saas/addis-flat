'use client'
import { ReactNode } from "react";
import DashboardLayout from "@/components/common/dashboard-layout";

export default function Layout({ children }: { children: ReactNode }){
  
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
