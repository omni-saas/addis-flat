import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import ThemeRegistry from "@/components/theme-registry";

const kanit = Kanit({ 
  weight:['200','400','600','800'],
  subsets: ['latin'],
 });
export const metadata: Metadata = {
  title: 'Addis-flat',
  description: "Streamline, Simplify, Succeed: Empowering Property Management with Cutting-Edge SaaS Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <ThemeRegistry>
          <body className={kanit.className}>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
