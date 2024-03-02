'use client'
import fetcher from "@/lib/fetcher";
import { RoasterType } from "@/types/roasterTypes";
import useSWR from "swr";
import Form from "@/components/Form";

export default function Home() {
const {data, error, isLoading} = useSWR<RoasterType[]>('/api/roasters/', fetcher) 
const transformedData = data?.map((roaster:RoasterType) => ({
  id: roaster._id, // Assuming each roaster has a unique _id
  name: roaster.name,
}));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1 className="text-2xl font-bold mb-8">Specialty Coffee Roasters DB</h1>
       <Form data={transformedData}/>
    </main>
  );
}
