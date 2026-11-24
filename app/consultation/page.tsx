import type { Metadata } from "next";
import { ProductPage } from "@/components/Blocks";
import { CONSULT } from "@/lib/content";

export const metadata: Metadata = { title: CONSULT.title, description: CONSULT.description };

export default function Page() {
  return <ProductPage data={CONSULT} />;
}
