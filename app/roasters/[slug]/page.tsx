"use client";
import fetcher from "@/lib/fetcher";
import { BeanType } from "@/types/beanTypes";
import { RoasterType } from "@/types/roasterTypes";
import useSWR from "swr";

export default function RoasterDetails({
  params,
}: {
  params: { slug: string };
}) {
  const {
    data: roasterData,
    error: roasterError,
    isLoading: roasterLoading,
  } = useSWR<RoasterType>(`/api/roasters/${params.slug}`, fetcher);

  const {
    data: coffeeBeans,
    error: beansError,
    isLoading: beansLoading,
  } = useSWR<BeanType>(`/api/beans/${roasterData?.beans}`, fetcher);

  return (
    <div className="flex flex-col justify-between items-center p-24 h-screen">
      <div className="flex flex-col self-start">
        <p className="lg:text-5xl">{roasterData?.name}</p>
        <p className="lg:text-3xl">{roasterData?.location.address}</p>
        <a href={roasterData?.socialMedia.instagram.url} className="">
          {roasterData?.socialMedia.instagram.handle}
        </a>
      </div>
      {Array.isArray(coffeeBeans) ? (
        coffeeBeans.map((beanData) => (
          <div key={beanData._id}>
            <p>{beanData.name}</p>
            <p className="">{beanData.origin.country}</p>
            <p className="">{beanData.origin.region}</p>
            <p className="">{beanData.elevation}</p>
            <p className="">{beanData.process}</p>
            <p className="">{beanData.roastLevel}</p>
            <p className="">{beanData.brewMethods}</p>
            {beanData.notes.map((note: string, index: string) => (
              <span key={index}>{note}</span>
            ))}
          </div>
        ))
      ) : (
        <div className="flex flex-col" key={coffeeBeans?._id}>
          <div className="flex flex-col">
            <p className="lg:text-3xl">{coffeeBeans?.name}</p>
            <p className="lg:text-2xl">{coffeeBeans?.origin.region} {coffeeBeans?.origin.country}</p>
          </div>
          <p className="">{coffeeBeans?.elevation}</p>
          <p className="">{coffeeBeans?.process}</p>
          <p className="">{coffeeBeans?.roastLevel}</p>
          <p className="">{coffeeBeans?.brewMethods}</p>
          {coffeeBeans?.notes.map((note: string, index: string) => (
            <span key={index}>{note}</span>
          ))}
        </div>
      )}
      <div className="flex self-start justify-between w-full items-end">
        <a href={roasterData?.website} className="">
          {roasterData?.website}
        </a>
        <div className="flex flex-col">
          <p className="">Email: {roasterData?.contactInfo.email}</p>
          <p className="">Phone: {roasterData?.contactInfo.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
