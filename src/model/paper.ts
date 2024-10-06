import { BASE_URL } from "./base";

interface FragmentCategory {
  Id: number;
  Name: string;
  Description: string;
}

interface PaperFragment {
  Id: number;
  Content: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  FragmentCategoryId: number;
  PaperId: number;
}

interface Paper {
  Id: number;
  Title: string;
  Keywords: string;
  OwnerId: number;
}

const url = BASE_URL + "paper";

export async function actionSavePaper(formData: FormData) {
  "use server";
  const res = await fetch(url, { body: formData });
}
