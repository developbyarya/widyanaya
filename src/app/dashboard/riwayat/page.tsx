import { cookies } from "next/headers";
import { getPublicationReq } from "@/model/publicationReq";
import { getPublicationById } from "@/model/publication";
export default async function Page() {
  const userId = cookies().get("userId") as unknown as number;

  const publications = await getPublicationReq(userId);
  return (
    <div className="m-8 lg:pl-96">
      <h1 className="text-lg text-center font-semibold">Riwayat Pengiriman</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Jurnal
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {publications.data?.map(async (data) => {
              const pubName = await getPublicationById(data.PublicationId);
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {pubName.title}
                  </th>
                  <td className="px-6 py-4">{data.Status};</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
