import Link from "next/link";
import Icon from "./Icon";
import T from "./T";
import { PageArt, type ArtVariant } from "./Art";
import {
  BANNER,
  CTA_TITLE,
  EMAIL,
  PHONE_1,
  PHONE_2,
  type CardItem,
  type ProductData,
  type Txt,
} from "@/lib/content";

type Crumb = { label: string; href?: string };

export function PageHero({
  kicker,
  title,
  sub,
  crumbs,
  art = "contact",
}: {
  kicker?: Txt;
  title: Txt;
  sub?: Txt;
  crumbs: Crumb[];
  art?: ArtVariant;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div>
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {" / "}
                {c.href ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : i === crumbs.length - 1 ? (
                  <span aria-current="page">{c.label}</span>
                ) : (
                  c.label
                )}
              </span>
            ))}
          </nav>
          {kicker && (
            <span className="pill light">
              <T v={kicker} />
            </span>
          )}
          <h1>
            <T v={title} />
          </h1>
          {sub && (
            <p>
              <T v={sub} />
            </p>
          )}
        </div>
        <PageArt variant={art} />
      </div>
    </section>
  );
}

export function Cards({ items }: { items: CardItem[] }) {
  return (
    <div className="cards">
      {items.map((c, i) => (
        <article className="card" key={i}>
          <div className="blob">
            <Icon name={c.icon} size={38} />
          </div>
          <h3>
            <T v={c.title} />
          </h3>
          <p>
            <T v={c.text} />
          </p>
          <Link className="btn btn-soft btn-sm" href="/enquiry">
            Enquire Now
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>
          <T v={CTA_TITLE} />
        </h2>
        <p className="cta-meta">
          <a href={`tel:${PHONE_1}`}>080-41698199</a> · <a href={`tel:${PHONE_2}`}>+91-98802 71555</a> ·{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="row">
          <Link className="btn btn-accent" href="/contact-us">
            Contact Us
          </Link>
          <a className="btn btn-soft" href={`tel:${PHONE_2}`}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

const ART: Record<string, ArtVariant> = {
  "Computer Hardware": "hardware",
  "Network Solutions": "network",
  "Security Systems": "security",
  Consultation: "consult",
};

export function ProductPage({ data }: { data: ProductData }) {
  return (
    <>
      <PageHero
        kicker={data.kicker}
        title={data.title}
        sub={BANNER}
        crumbs={[{ label: "Products & Solutions" }, { label: data.title }]}
        art={ART[data.title]}
      />
      <section className="overlap">
        <div className="wrap">
          <div className="white-card two">
            <div>
              <span className="pill">{data.label.charAt(0) + data.label.slice(1).toLowerCase()}</span>
              <h2>
                <T v={data.heading} />
              </h2>
            </div>
            <div>
              {data.paras.map((p, i) => (
                <p key={i}>
                  <T v={p} />
                </p>
              ))}
              <Link className="btn btn-accent" href="/enquiry">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section after-overlap">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T v={data.sub} />
            </h2>
            <p>
              <T v={data.subPara} />
            </p>
          </div>
          <Cards items={data.cards} />
        </div>
      </section>
      <Cta />
    </>
  );
}
