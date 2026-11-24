import Link from "next/link";
import Icon from "./Icon";
import T from "./T";
import {
  CTA_TITLE,
  EMAIL,
  PHONE_1,
  PHONE_2,
  type CardItem,
  type ProductData,
  type Txt,
} from "@/lib/content";

export function PageHero({
  kicker,
  title,
  sub,
}: {
  kicker: Txt;
  title: Txt;
  sub?: Txt;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="eyebrow">
          <T v={kicker} />
        </p>
        <h1>
          <T v={title} />
        </h1>
        {sub && (
          <p className="lead">
            <T v={sub} />
          </p>
        )}
      </div>
    </section>
  );
}

export function Cards({ items }: { items: CardItem[] }) {
  return (
    <div className="cards">
      {items.map((c, i) => (
        <article className="card" key={i}>
          <div className="ico">
            <Icon name={c.icon} />
          </div>
          <h3>
            <T v={c.title} />
          </h3>
          <p>
            <T v={c.text} />
          </p>
          <Link className="btn btn-ghost" href="/enquiry">
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
        <div className="row">
          <Link className="btn btn-accent" href="/contact-us">
            Contact Us
          </Link>
          <a className="btn btn-light" href={`tel:${PHONE_2}`}>
            Call Now
          </a>
        </div>
        <p className="cta-meta">
          <a href={`tel:${PHONE_1}`}>080-41698199</a> ·{" "}
          <a href={`tel:${PHONE_2}`}>+91-98802 71555</a> ·{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

export function ProductPage({ data }: { data: ProductData }) {
  return (
    <>
      <PageHero kicker={data.kicker} title={data.title} />
      <section className="section">
        <div className="wrap narrow">
          <p className="eyebrow">{data.label}</p>
          <h2>
            <T v={data.heading} />
          </h2>
          {data.paras.map((p, i) => (
            <p key={i}>
              <T v={p} />
            </p>
          ))}
        </div>
      </section>
      <section className="section alt">
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
