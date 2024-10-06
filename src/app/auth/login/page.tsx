import { TextInput, Label, Button } from "flowbite-react";
import Image from "next/image";
import WidyanayaLogo from "@/assets/Widyanaya Logo(2).svg";
import Link from "next/link";
import {actionLogin} from "@/model/user"
export default function Page() {

  return (
    <div className="w-full grid place-items-center">
      <div className="p-10 flex flex-col  w-4/5 lg:w-2/5 items-center gap-4">
        <Link href="/">
          <Image src={WidyanayaLogo.src} width={150} height={50} alt="Widyanaya Logo" className="w-36"/>
        </Link>
        <h1 className="text-3xl text-center font-extrabold">Login</h1>
        <form action={actionLogin} className="w-full">
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <TextInput type="email" id="email" name="email" />
          </div>
          <div className="mb-3">
            <Label htmlFor="password">Password</Label>
            <TextInput type="password" id="password" name="password" />
          </div>

          <Button type="submit" fullSized className="mb-4">Login</Button>
          <Link href="/auth/register"><Button fullSized outline>Register</Button></Link>
        </form>
      </div>
    </div>
  );
}
