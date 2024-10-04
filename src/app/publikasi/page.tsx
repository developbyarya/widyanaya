import PublicationCard from "@/assets/components/publicationCard";
import { getAllPublication } from "@/model/publication";

export default async function Page() {
    
return <div className="w-full p-8">
    <h1 className="text-3xl font-extrabold text-center">Daftar Publikasi</h1>
    <div className="flex flex-wrap flex-col md:flex-row justify-between w-full px-16 py-5 gap-y-8">
 {(await getAllPublication(10)).map((publication) => (
            <PublicationCard {...publication} key={publication.id}/>
          ))}
    </div>
</div>
}