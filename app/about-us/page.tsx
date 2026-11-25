import type { Metadata } from "next";
import T from "@/components/T";
import { Cta, PageHero } from "@/components/Blocks";
import { ABOUT_PAGE as A, BANNER } from "@/lib/content";

export const metadata: Metadata = { title: "About Us", description: A.lead };

export default function AboutUs() {
  return (
    <>
      <PageHero title={A.title} sub={BANNER} crumbs={[{ label: A.title }]} art="hardware" />
      <section className="overlap">
        <div className="wrap">
          <div className="white-card two">
            <div>
              <span className="pill">About Us</span>
              <h2>{A.lead}</h2>
            </div>
            <div>
              {A.paras.map((p, i) => (
                <p key={i}><T v={p} /></p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section after-overlap">
        <div className="wrap">
          <blockquote className="motto">{A.motto}</blockquote>
        </div>
      </section>
      <Cta />
    </>
  );
}
