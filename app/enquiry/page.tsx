import type { Metadata } from "next";
import T from "@/components/T";
import { PageHero } from "@/components/Blocks";
import { EnquiryForm } from "@/components/ClientBits";
import ContactInfo, { MAP_SRC } from "@/components/ContactInfo";
import { BANNER, ENQUIRY, ENQUIRY_FORM_TITLE } from "@/lib/content";

export const metadata: Metadata = { title: "Enquiry", description: ENQUIRY.intro };

export default function Enquiry() {
  return (
    <>
      <PageHero title={ENQUIRY.title} sub={BANNER} crumbs={[{ label: "Enquiry" }]} />
      <section className="overlap" style={{ paddingBottom: "6rem" }}>
        <div className="wrap">
          <div className="white-card enq-grid">
            <div>
              <span className="pill">Enquiry</span>
              <h2 style={{ fontSize: "2rem" }}><T v={ENQUIRY_FORM_TITLE} /></h2>
              <p style={{ color: "var(--muted)" }}>{ENQUIRY.intro}</p>
              <EnquiryForm />
            </div>
            <div className="info-list">
              <ContactInfo />
              <div className="map">
                <iframe
                  title="Mrinaal Technologies location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={MAP_SRC}
                  style={{ minHeight: 220 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
