import type { Metadata } from "next";
import T from "@/components/T";
import { Cta, PageHero } from "@/components/Blocks";
import { ABOUT_PAGE as A, BANNER } from "@/lib/content";

export const metadata: Metadata = { title: "About Us", description: A.lead };

export default function AboutUs() {
  return (
    <>
      <PageHero kicker={BANNER} title={A.title} />
      <section className="section">
        <div className="wrap narrow">
          <h2>{A.lead}</h2>
          {A.paras.map((p, i) => (
            <p key={i}><T v={p} /></p>
          ))}
          <blockquote className="motto">{A.motto}</blockquote>
        </div>
      </section>
      <Cta />
    </>
  );
}
