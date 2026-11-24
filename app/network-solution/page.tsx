import type { Metadata } from "next";
import { ProductPage } from "@/components/Blocks";
import { NETWORK } from "@/lib/content";

export const metadata: Metadata = { title: NETWORK.title, description: NETWORK.description };

export default function Page() {
  return <ProductPage data={NETWORK} />;
}
