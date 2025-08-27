import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddProduct from "./components/AddProduct";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <AddProduct />;
}