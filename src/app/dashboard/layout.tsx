
import type { Metadata } from "next";
import SideBar from "@/components/fraqments/sidebar";

export const metadata: Metadata = {
  title: "Widyanaya - Publikasi untuk Indonesia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <SideBar />
    {children}
    </div>
  );
}
