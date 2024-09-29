import React from "react";
import { CardComponent } from "@/components/card/card";
import { BeanType } from "@/types/beanTypes";

interface BeansOverviewProps {
  data: BeanType[];
}

export default async function page({ data }: BeansOverviewProps) {
  return (
    <div className="w-full px-4">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((bean) => (
            <div key={bean._id}>
              <CardComponent
                title={bean.name}
                description={bean.roaster}
                content={bean.roastLevel}
                footer={bean.elevation}
              />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
