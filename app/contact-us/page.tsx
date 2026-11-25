import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import ContactInfo, { MAP_SRC } from "@/components/ContactInfo";
import { BANNER } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us", description: BANNER };

export default function ContactUs() {
  return (
    <>
      <PageHero title="Contact Us" sub={BANNER} crumbs={[{ label: "Contact Us" }]} />
      <section className="overlap" style={{ paddingBottom: "6rem" }}>
        <div className="wrap">
          <div className="white-card contact-grid">
            <div className="info-list">
              <ContactInfo />
              <Link className="btn btn-accent" href="/enquiry" style={{ justifySelf: "start", marginTop: ".5rem" }}>
                Enquire Now
              </Link>
            </div>
            <div className="map">
              <h2 style={{ fontSize: "1.6rem" }}>Location</h2>
              <iframe
                title="Mrinaal Technologies location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_SRC}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
