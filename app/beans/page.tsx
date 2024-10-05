import { getAllBeans } from "@/packages/client-only/services/beans";
import BeansPage from "@/containers/pages/beans/beans-overview";

export default async function BeansOverview() {
  const res = await getAllBeans();
  console.log('res',res)
  return (
    <div className="pt-6">
      <BeansPage data={res.data}/>
    </div>
  );
}
