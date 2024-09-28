import { PartialRoasterType, RoasterType } from "@/types/roasterTypes";
import { Payment, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface RoastersPageProps {
  roasterData: PartialRoasterType[];
}

export const RoastersPage = async ({ roasterData }: RoastersPageProps) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={roasterData} />
    </div>
  );
};
