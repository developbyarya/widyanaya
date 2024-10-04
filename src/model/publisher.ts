import { BASE_URL } from "./base";

export interface Publication {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  volume: number;
  year: number;
  opening_date: Date;
  closing_date: Date;
  sub_fee: number;
  review_est: number;
  publisher_id: number;
  cateogry: string;
}

const URL = BASE_URL + ".json";

export async function getAllPublication(
  limit: number = 4
): Promise<Publication[]> {
  // CHANGE ON PRODUCTION (DUMMY)!
  const data: Publication[] = await (await fetch(URL)).json();

  return data.slice(0, 4);
}

export async function getPublicationById(id: number): Promise<Publication> {
  const data: Publication[] = await (await fetch(URL)).json();
  const filter =data.filter((pub) => pub.id == id);
  if (filter.length <= 0) {
    
  } 

  return filter[0];
}
