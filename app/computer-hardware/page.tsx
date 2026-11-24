import type { Metadata } from "next";
import { ProductPage } from "@/components/Blocks";
import { HARDWARE } from "@/lib/content";

export const metadata: Metadata = { title: HARDWARE.title, description: HARDWARE.description };

export default function Page() {
  return <ProductPage data={HARDWARE} />;
}
