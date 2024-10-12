"use client";
import { PartialRoasterType, RoasterType } from "@/types/roasterTypes";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useRouter } from "next/navigation";

interface RoastersPageProps {
  roasterData: PartialRoasterType[];
}

export const RoastersPage = ({ roasterData }: RoastersPageProps) => {
  const router = useRouter();
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={roasterData}
        ctaName={"Add roaster"}
        cta={() => router.push('roasters/new')}
      />
    </div>
  );
};
