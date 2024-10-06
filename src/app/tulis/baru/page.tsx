import RichTextEditor from "@/components/fraqments/richtext";
import { actionSavePaper } from "@/model/paper";
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <div className="p-16 w-full lg:w-3/4">
      <form action={actionSavePaper}>
        <input
          type="text"
          className="border-none text-lg w-full placeholder:underline focus:outline-none focus:border-none"
          placeholder="Judul Anda"
        />
        <h6 className="text-lg mt-8">Pendahuluan</h6>
        <RichTextEditor name="pendahuluan" />
        <h6 className="text-lg mt-8">Tinjauan Pustaka</h6>
        <RichTextEditor name="tinjauan" />
        <h6 className="text-lg mt-8">Metodologi</h6>
        <RichTextEditor name="metode" />
        <h6 className="text-lg mt-8">Pembahasan</h6>
        <RichTextEditor name="pembahasan" />
        <h6 className="text-lg mt-8">Penutup</h6>
        <RichTextEditor name="penutup" />
        <Button type="submit">Simpan</Button>
      </form>
    </div>
  );
}
