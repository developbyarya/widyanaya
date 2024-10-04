import { redirect } from "next/navigation";

export interface Metadata {
    title: string;
    abstract: string;
    authors: string[];
    file_url: URL;
}

export async function saveMetadata(formdata: FormData) {
    "use server"
    console.log(formdata);
    const title: string = formdata.get("title") as string;
    const abstract: string = formdata.get("abstract") as string;
    const authors_raw: string = formdata.get("authors") as string;
    const authors: string[] = authors_raw.split(",").map(a => a.trim());
    const file: File = formdata.get("file") as File;




}

