"use client";
import Image from "next/image";
import WidyanayaLogo from "@/assets/Widyanaya Logo(2).svg";
import { AnchorButton } from "./button";

export default function Navbar(): React.ReactNode {
  return (
    <nav className="flex justify-between w-full items-center h-20 pt-4 gap-8 px-20">
      <Image
        src={WidyanayaLogo.src}
        alt="widyanaya logo"
        width={150}
        height={60}
        className="w-auto h-16"
      />
      <div className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
      </div>
      <div className="flex-1"></div>
      <div>
        <AnchorButton href="/auth/login" size="md" variant="primary">
          Login
        </AnchorButton>
      </div>
    </nav>
  );
}
