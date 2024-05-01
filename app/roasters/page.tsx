"use client";
import fetcher from "@/lib/fetcher";
import { RoasterType } from "@/types/roasterTypes";
import useSWR from "swr";

export default function Roaster() {
  const { data, error, isLoading } = useSWR<RoasterType[]>(
    "/api/roasters/",
    fetcher
  );

  return (
    <main className="flex flex-col items-center p-24 ">
      <a href="/roasters/new-roaster">Add a roaster!</a>
      <h1 className="text-2xl font-bold mb-8">Coffeepedia ☕️</h1>
      <div className="flex w-full justify-around">
        {data?.map((roasterData) => (
          <a href={`/roasters/${roasterData?._id}`}
            className="bg-blue-500 flex flex-col justify-around px-6 py-2 rounded-lg w-64 h-auto hover:scale-105 transform transition-all"
            key={roasterData._id}
          >
            <h3 className="lg:text-2xl text-xl">{roasterData.name}</h3>
            <p className="lg:text-xl">{roasterData.location.address}</p>
            <div className="flex justify-end items-end mt-6 h-fit">
              <p className="lg:text-md">
                {roasterData.socialMedia.instagram.handle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
