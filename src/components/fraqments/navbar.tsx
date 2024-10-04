"use client";
import Image from "next/image";
import WidyanayaLogo from "@/assets/Widyanaya Logo(2).svg";
import { AnchorButton } from "./button";
import { BsJustify } from "react-icons/bs";


export default function Navbar(): React.ReactNode {
  return (
    <nav className="flex flex-col absolute md:flex-row justify-between w-full items-center z-50 h-20 pt-4 gap-8 px-20">
      <Image
        src={WidyanayaLogo.src}
        alt="widyanaya logo"
        width={150}
        height={60}
        className="w-auto h-16"
      />
      <div className="hidden md:flex w-full p-4">
        <div className="flex  md:flex-row gap-4">
          <a href="#">Home</a>
          <a href="#">Publikasi Jurnal</a>
          <a href="#">Lomba KTI</a>
          <a href="#">Tulis Karya</a>
        </div>
        <div className="md:flex-1"></div>
          <AnchorButton href="/auth/login" size="md" variant="primary">
            Login
          </AnchorButton>
      </div>
  
    </nav>
  );
}
