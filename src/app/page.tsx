import Navbar from "@/components/fraqments/navbar";
import BGMain from "@/assets/Background.jpg";
import Image from "next/image";
import { AnchorButton } from "@/components/fraqments/button";
import BigCard from "@/components/fraqments/card/bigCard";
import { BsClock, BsCalendar } from "react-icons/bs";
import { getAllPublication } from "@/model/publication";
import PublicationCard from "@/assets/components/publicationCard";

export default async function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full flex flex-col items-center">
        <Image
          src={BGMain.src}
          width={4000}
          height={4000}
          className="w-full h-auto absolute -z-10 -top-2"
          alt=""
        />
        <h1 className="text-center text-primary text-5xl leading-relaxed font-extrabold mt-24">
          Riset Kini, Inovasi Esok, <br></br> Masa Depan
          <span className="text-gold"> Emas</span>
        </h1>
        <p className="text-gray-600 text-center">
          Platform belajar riset ilmiah, karya tulis ilmiah, dan pencarian
          call-for-paper
        </p>
        <div className="flex gap-4 mt-8 justify-between">
          <AnchorButton href="/publikasi/" variant="secondary" size="lg">
            Publikasi
          </AnchorButton>
          <AnchorButton href="/publikasi/" variant="primary" size="lg">
            Tulis Karya
          </AnchorButton>
          <AnchorButton href="/publikasi/" variant="secondary" size="lg">
            Lomba KTI
          </AnchorButton>
        </div>
      </section>

      <section className="mt-20 p-10 w-full rounded-t-3xl border-t items-center border-gray-400">
        <h2 className="text-primary text-3xl font-bold text-center">
          Publikasikan Karya Anda
        </h2>
        <div className="w-full flex flex-wrap mt-10 justify-center gap-16">
          {(await getAllPublication()).map((publication) => (
            <PublicationCard {...publication} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-primary text-3xl font-bold text-center">
          Ujikan karya anda, ikuti lomba KTI
        </h1>
        <div className="w-full flex flex-wrap mt-10 justify-center gap-16">
          {(await getAllPublication()).map((publication) => (
            <PublicationCard {...publication} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-primary text-3xl font-bold text-center">
          Belajar Penulisan Karya Ilmiah dengan menulis langsung!
        </h1>
      </section>
    </>
  );
}
