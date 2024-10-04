import { BASE_URL } from "./base";

export interface Lomba {
  id: number;
  name: string;
  description: string;
  opening_date: Date;
  closing_date: Date;
  fees: number;
  caterogy: number;
  publisher_id: number;
  cover_url: string;
}

const URL = BASE_URL + "Lomba.json";

export async function getAllLomba(limit: number = 4): Promise<Lomba[]> {
  // CHANGE ON PRODUCTION (DUMMY)!
  const data = await fetch(URL, { next: { revalidate: 0 } })
  const response: Lomba[] = await data.json();
  console.log(data);

  return response.slice(0, limit);
}
