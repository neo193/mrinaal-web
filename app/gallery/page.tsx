import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { Gallery } from "@/components/ClientBits";
import { BANNER, GALLERY } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery", description: "Project photos from Mrinaal Technologies." };

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" sub={BANNER} crumbs={[{ label: "Gallery" }]} art="network" />
      <section className="overlap" style={{ paddingBottom: "6rem" }}>
        <div className="wrap">
          <div className="white-card">
            <Gallery images={GALLERY} />
          </div>
        </div>
      </section>
    </>
  );
}
