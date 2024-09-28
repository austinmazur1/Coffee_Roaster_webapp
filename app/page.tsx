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
import { RoastersPage } from "@/containers/tables/roasters/page";
import { getRoasters } from "@/packages/client-only/services/roasters";
import Roasters from "@/packages/server-only/models/Roasters";
import { connectDB } from "@/packages/server-only/lib/connectDB";

export default async function Home() {
  await connectDB();
  const res = await Roasters.find().lean();

  const roasters = res.map((roaster) => ({
    ...roaster,
    _id: String(roaster._id),
  }));

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <RoastersPage roasterData={roasters} />
    </div>
  );
}
