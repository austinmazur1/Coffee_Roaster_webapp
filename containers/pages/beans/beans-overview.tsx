import React from "react";
import { CardComponent } from "@/components/card/card";
import { BeanTypePopulated } from "@/types/beanTypes";

interface BeansOverviewProps {
  data: BeanTypePopulated[];
}

// export default async function page({ data }: BeansOverviewProps) {
//   return (
//     <div className="w-full px-4">
//       {data?.length > 0 ? (
//         <div className="flex h-auto w-full gap-4 flex-wrap bg-blue-100">
//           {data.map((bean) => (
//             <div
//               key={bean._id}
//               className="w-full sm:w-1/2 lg:w-1/3 bg-gray-900"
//             >
//               <CardComponent
//                 title={bean.name}
//                 description={bean?.roaster?.name}
//                 content={bean.roastLevel}
//                 footer={bean.elevation}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

export default async function page({ data }: BeansOverviewProps) {
  return (
    <div className="w-full px-4">
      {data?.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense auto-rows-min"> 
          {data.map((bean) => (
            <div key={bean._id} className="w-full bg-gray-900">
              <CardComponent
                title={bean.name}
                description={bean?.roaster?.name}
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
