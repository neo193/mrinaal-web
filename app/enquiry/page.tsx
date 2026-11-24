import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import { EnquiryForm } from "@/components/ClientBits";
import { BANNER, ENQUIRY } from "@/lib/content";

export const metadata: Metadata = { title: "Enquiry", description: ENQUIRY.intro };

export default function Enquiry() {
  return (
    <>
      <PageHero kicker={BANNER} title={ENQUIRY.title} />
      <section className="section">
        <div className="wrap narrow">
          <p>{ENQUIRY.intro}</p>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
