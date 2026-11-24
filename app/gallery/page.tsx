import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { Gallery } from "@/components/ClientBits";
import { BANNER, GALLERY } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery", description: "Project photos from Mrinaal Technologies." };

export default function GalleryPage() {
  return (
    <>
      <PageHero kicker={BANNER} title="Gallery" />
      <section className="section">
        <div className="wrap">
          <Gallery images={GALLERY} />
        </div>
      </section>
    </>
  );
}
