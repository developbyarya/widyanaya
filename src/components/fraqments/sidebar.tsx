"use client";
import Link from "next/link";
import Image from "next/image";
import WidyanayaLogo from "@/assets/Widyanaya Logo(2).svg";
import { BsFileEarmark, BsJustify } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="inline">
      <BsJustify
        size={28}
        className="lg:hidden absolute top-6 left-6 z-50 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      <aside
        className={
          (!isOpen ? "hidden lg:grid" : "grid") +
          " absolute top-4 left-4 h-screen z-30 bg-gray-50 grid-cols-1 w-[calc(100%-1rem)] m-2 rounded-lg lg:w-1/5 px-4 py-8"
        }
      >
        <Link href="/" className="place-self-center">
          <Image
            src={WidyanayaLogo.src}
            width={150}
            height={50}
            alt="widyanaya logo"
            className="w-40 justify-self-center"
          />
        </Link>
        <ul className="mt-8 flex flex-col">
          <li className="flex gap-2 items-center hover:bg-gray-100 p-3 rounded-lg">
            <BsFileEarmark size={18} />
            <Link href="/dashboard" className="text-lg font-semibold">
              Draft Artikel
            </Link>
          </li>
          <li className="flex gap-2 items-center hover:bg-gray-100 p-3 rounded-lg">
            <FaHistory size={18} />
            <Link href="/dashboard/riwayat" className="text-lg font-semibold">
              Riwayat Publikasi
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
