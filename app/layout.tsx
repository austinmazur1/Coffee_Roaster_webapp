import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/layout/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Coffeepeida",
  description: "Great coffee everywhere",
};
// TODO add top bar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="grid grid-cols-[auto,1fr] min-h-screen">
          <Sidebar className="sticky top-0 h-screen" />
          <main className="overflow-y-auto">
            {/* <div className="w-screen mt-20-2 h-14 bg-blue-100"></div> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
