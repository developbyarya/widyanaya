import LombaCard from "@/assets/components/lombaCard";
import PublicationCard from "@/assets/components/publicationCard";
import { getAllLomba } from "@/model/lomba";
import { getAllPublication } from "@/model/publication";

export default async function Page() {
  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-extrabold text-center">Lomba KTI</h1>
      <form action="" className="flex gap-4 mt-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Cari judul jurnal"
          className="border border-gray-300 px-4 py-2 rounded-lg w-3/4"
        />
        <select
          id="countries"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-1/4  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Pilih Cateogry</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
      <div className="flex flex-wrap flex-col md:flex-row justify-between w-full px-16 py-5 gap-y-8">
        {(await getAllLomba(10)).map((lomba) => (
          <LombaCard {...lomba} key={lomba.id} />
        ))}
      </div>
    </div>
  );
}
