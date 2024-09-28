"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RoasterType, PartialRoasterType } from "@/types/roasterTypes";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  _id: string;
  name: number;
  location: string;
  beans: [];
  socialMedia: string;
};

export const columns: ColumnDef<PartialRoasterType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "location.address",
    header: 'Location'
  },
  {
    accessorKey: `beans.length`,
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Beans registered{" "} 
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
  },
  {
    accessorKey: "socialMedia.instagram.handle",
    header: "Socials",
  },
];
