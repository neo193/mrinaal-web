import type { Metadata } from "next";
import { ProductPage } from "@/components/Blocks";
import { SECURITY } from "@/lib/content";

export const metadata: Metadata = { title: SECURITY.title, description: SECURITY.description };

export default function Page() {
  return <ProductPage data={SECURITY} />;
}
