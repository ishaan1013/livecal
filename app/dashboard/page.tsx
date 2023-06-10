import { redirect } from "next/navigation";

export default function DashboardRedirect() {
  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");

  redirect(`/dashboard/${year}/${month}`);
}
