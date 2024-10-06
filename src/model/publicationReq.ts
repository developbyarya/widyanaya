import { BASE_URL } from "./base";

export interface PublicationReq {
  Id: number;
  PaperURL: string;
  CoverLetterURL: string;
  ApprovalLetterURL: string;
  Status: string;
  MetadataID: number;
  ReferenceFormatID: number;
  RequesterID: number;
  PublicationId: number;
}

const req_url = BASE_URL + "/publication_requests";

interface Response {
  hasError: boolean;
  errorMsg?: string;
  data?: PublicationReq[];
}

export async function getPublicationReq(userId: number): Promise<Response> {
  const req = await fetch(req_url);
  if (req.status != 200) {
    return {
      hasError: true,
      errorMsg: "Server Error",
    };
  }
  const data: PublicationReq[] = await req.json();

  const result =  data.filter((d) => d.RequesterID == userId);
  return {
    hasError: false,
    data: result,
  }
}
