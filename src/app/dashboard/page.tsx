import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
function Paper({
  paperContent,
  title,
}: {
  paperContent: string;
  title: string;
}) {
  return (
    <div>
      <div className="h-40 lg:h-72 w-36 lg:w-48 border border-gray-200 p-4">
        <p className="text-[5px]">{paperContent}</p>
      </div>
      <h6 className="text-sm mt-2 ml-1">{title}</h6>
    </div>
  );
}

export default function Page() {
  return (
    <div className="m-20 lg:pl-96 grid grid-cols-3 lg:grid-cols-6 gap-4">
        <Link href="/tulis/baru" className="h-40 lg:h-72 w-36 lg:w-48 border border-gray-200 hover:bg-gray-200 p-4 grid place-items-center">
            <IoMdAdd size={28} />
        </Link>
      <Paper
        title="Klasifikasi judi online"
        paperContent="Klasifikasi Watermark (WM) Judi Online pada Konten Meme. Studi Kasus: Instagram Reels  "
      />
    </div>
  );
}
