import { TextInput, Label, Button } from "flowbite-react";
import Image from "next/image";
import WidyanayaLogo from "@/assets/Widyanaya Logo(2).svg";
import Link from "next/link";
import { PasswordElement } from "./PasswordElement";

export default function Page() {
  return (
    <div className="w-full grid place-items-center">
      <div className="p-10 flex flex-col  w-4/5 lg:w-2/5 items-center gap-4">
        <Link href="/">
          <Image
            src={WidyanayaLogo.src}
            width={150}
            height={50}
            alt="Widyanaya Logo"
            className="w-36"
          />
        </Link>
        <h1 className="text-3xl text-center font-extrabold">Register</h1>
        <form action="" className="w-full">
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <TextInput type="email" id="email" name="email" />
          </div>
          <div className="mb-3">
            <Label htmlFor="nama">Nama Lengkap</Label>
            <TextInput type="text" id="nama" name="nama" />
          </div>
          <div className="mb-3">
            <Label htmlFor="institusi">Institusi</Label>
            <TextInput type="text" id="institusi" name="institusi" />
          </div>
          <PasswordElement />

          <Button type="submit" fullSized className="mb-4">
            Register
          </Button>
          <Link href="/auth/login" className="text-blue-500 underline">
            Sudah Punya Akun?
          </Link>
        </form>
      </div>
    </div>
  );
}
