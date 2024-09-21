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
      {/* <div className="flex bg-blue-500 w-full p-6 justify-end"> */}
        {/* <div className="flex gap-4"> */}
          {/* <a href="/roasters">Roasters</a> */}
          {/* <a href="/">Beans</a> */}
        {/* </div> */}
      {/* </div> */}
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
        {/* <h1 className="text-2xl font-bold mb-8">Coffeepedia ☕️</h1> */}
        {/* <Form data={transformedData} /> */}
       
      {/* </main> */}
    </>
  );
}
{/* <Sheet open={true}>
<SheetContent side={"left"} className="w-[300px]">
  <SheetHeader>
    <SheetTitle>Coffeepedia ☕️</SheetTitle>
  </SheetHeader>
  <Separator />
  <div className="grid gap-4 py-4">
    {SIDEBAR_OPTIONS.map(({ key, label, route }) => {
      return (
        <Link
          key={key}
          href={route}
          onClick={() => {
            // if (setOpen) setOpen(false);
          }}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 justify-start gap-x-3",
            path === route && "bg-muted font-bold hover:bg-muted"
          )}
        >
          {/* <child.icon className={cn("h-5 w-5", child.color)} /> TODO add icons */}
//           <div
//             className={cn(
//               "absolute left-12 text-base duration-200",
//               // !isOpen && className
//             )}
//           >
//             {label}
//           </div>
//         </Link>
//       );
//     })}
//   </div>
//   <SheetFooter>
//   </SheetFooter>
// </SheetContent>
// </Sheet> */}