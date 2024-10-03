import { BASE_URL } from "./base";

interface Lomba {
  id: number;
  name: string;
  description: string;
  opening_date: Date;
  closing_date: Date;
  fees: number;
  caterogy: number;
  publisher_id: number;
}

const URL = BASE_URL + "Lomba.json";

export async function getAllLomba(limit: number = 4): Promise<Lomba[]> {
  // CHANGE ON PRODUCTION (DUMMY)!
  const data: Lomba[] = await (await fetch(URL)).json();

  return data.slice(0, 4);
}
