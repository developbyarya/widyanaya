import { getPublicationById } from "@/model/publication";
import Image from "next/image";

export default async function Page({params : {id}} : {params: {id: number}}) {
    const pubInfo = await getPublicationById(id);
    return <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-100"> 
      <h1 className="my-6 text-3xl font-extrabold">Submit Your Article</h1>
      <div className="flex w-full gap-16 items-center justify-center min-h-screen bg-gray-100">
    
      <div className="w-fit flex gap-4 items-center">
        <Image src={pubInfo.cover_url} alt="Journal Cover" width={200} height={400} className="w-28 h-auto" />
        <div>
          <h3 className="text-lg font-bold">{pubInfo.title}</h3>
        </div>
      </div>
      <form className="w-1/2 p-8 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="authors" className="block mb-2 text-sm font-medium text-gray-700">Authors:</label>
          <input 
            type="text" 
            id="authors" 
            name="authors" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="abstract" className="block mb-2 text-sm font-medium text-gray-700">Abstract:</label>
          <textarea 
            id="abstract" 
            name="abstract" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" 
          />
        </div>
        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-700">Upload Article File:</label>
            <input 
              type="file" 
              id="file" 
              name="file" 
              required 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
        <button 
          type="submit" 
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
}