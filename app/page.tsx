"use client";
import fetcher from "@/lib/fetcher";
import { RoasterType } from "@/types/roasterTypes";
import useSWR from "swr";
import Form from "@/components/Form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { usePathname } from "next/navigation";

const SIDEBAR_OPTIONS = [
  { key: "dashboard", label: "Dashboard", route: "/" },
  { key: "roasters", label: "Roasters", route: "/roasters" },
  { key: "beans", label: "Beans", route: "/beans" },
];

export default function Home() {
  const path = usePathname();
  const { data, error, isLoading } = useSWR<RoasterType[]>(
    "/api/roasters/",
    fetcher
  );
  const transformedData = data?.map((roaster: RoasterType) => ({
    id: roaster._id, // Assuming each roaster has a unique _id
    name: roaster.name,
  }));

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      {/* <Form data={transformedData} /> */}
    </>
  );
}
