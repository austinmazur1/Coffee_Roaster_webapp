import { getAllBeans } from "@/packages/client-only/services/beans";
import BeansPage from "@/containers/pages/beans/beans-overview";

export default async function BeansOverview() {
  const res = await getAllBeans();
  return (
    <div>
      <p>Beans</p>
      <BeansPage data={res.data}/>
    </div>
  );
}
