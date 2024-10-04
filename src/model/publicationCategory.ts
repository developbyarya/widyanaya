import { BASE_URL } from "./base";

interface PublicationCategory {
    id:number;
    categoryName: string;
    descripction: string;
}

const URL = BASE_URL + "/publicationCategory";

export async function getPublicationCategoryById(id:number) {
    const raw = await fetch(BASE_URL);
    if (raw.status != 200) return;
    
    const data:PublicationCategory = await raw.json()

    return data;
    
}
