import Link from "next/link";
import Icon from "@/components/Icon";
import T from "@/components/T";
import { HeroArt } from "@/components/Art";
import { Cta } from "@/components/Blocks";
import { DeliverTabs, Stats } from "@/components/ClientBits";
import {
  ABOUT_LEAD, ABOUT_POINTS, ABOUT_TEASER, BANNER, CONSULT, DELIVER_TITLE, FAQ, FAQ_TITLE, GALLERY,
  GALLERY_TEASER, HARDWARE, HERO_BUTTONS, HERO_INTRO, HERO_TITLE, HIGHLIGHTS, HOME_CONSULT,
  HOME_PRODUCTS, HOME_PRODUCTS_INTRO, NETWORK, PRODUCTS, SECURITY, STATS, STATS_TITLE, WHY_PHOTOS,
  WHY_POINTS, WHY_TAGS, WHY_TITLE, type Txt,
} from "@/lib/content";

const plain = (t: Txt) => (typeof t === "string" ? t : t.draft);

export default function Home() {
  const statItems = STATS.filter(
    (s): s is { label: string; value: number; suffix?: string } => s.value !== null
  );
  const showStats = statItems.length === STATS.length;
  const [bannerHead] = BANNER.split(" — ");

  const deliver = [HARDWARE, NETWORK, SECURITY, CONSULT].map((d, i) => ({
    label: PRODUCTS[i].label,
    href: PRODUCTS[i].href,
    items: d.cards.map((c) => ({ title: plain(c.title), icon: c.icon })),
  }));

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{BANNER}</p>
            <h1>{HERO_TITLE}</h1>
            <p className="lead"><T v={HERO_INTRO} /></p>
            <div className="row">
              {HERO_BUTTONS.map((b, i) => (
                <Link key={b.label} className={`btn ${i === 0 ? "btn-accent" : "btn-soft"}`} href={b.href}>
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
          <HeroArt />
        </div>
        <div className="wrap hl-strip">
          {HIGHLIGHTS.map(([a, c], i) => (
            <div key={i}>
              <h3><Icon name="check" size={22} /><T v={a} /></h3>
              <p><T v={c} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className="overlap">
        <div className="wrap">
          <div className="panel">
            <span className="pill white">About Us</span>
            <h2>{ABOUT_LEAD}</h2>
            <p><T v={ABOUT_TEASER} /></p>
            <ul className="chips">
              {ABOUT_POINTS.map((p, i) => (
                <li key={i}><Icon name="check" size={16} /><T v={p} /></li>
              ))}
            </ul>
            <Link className="btn btn-dark" href="/about-us">Know More</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="intro">
            <span className="pill">Products &amp; Solutions</span>
            <h2>{bannerHead}</h2>
            <p><T v={HOME_PRODUCTS_INTRO} /></p>
            <Link className="btn btn-accent" href="/enquiry">Enquire Now</Link>
          </div>
          <div className="svc-grid">
            {[...HOME_PRODUCTS, HOME_CONSULT].map((p) => (
              <Link className="card" href={p.href} key={p.href}>
                <div className="blob"><Icon name={p.icon} size={38} /></div>
                <h3>{p.label}</h3>
                <p><T v={p.text} /></p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap center">
          <h2><T v={DELIVER_TITLE} /></h2>
          <DeliverTabs groups={deliver} initial={2} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2><T v={WHY_TITLE} /></h2></div>
          <div className="why-grid">
            {WHY_POINTS.map(([a, c], i) => (
              <article className="why" key={i}>
                <span className="pill light"><T v={WHY_TAGS[i]} /></span>
                <h3><T v={a} /></h3>
                <p><T v={c} /></p>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GALLERY[WHY_PHOTOS[i]]} alt="" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showStats && (
        <section className="section alt">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: "2rem" }}><h2><T v={STATS_TITLE} /></h2></div>
            <Stats items={statItems} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="section-head"><span className="pill">Work</span><h2><T v={GALLERY_TEASER.title} /></h2></div>
          <div className="gal">
            {GALLERY_TEASER.items.map((g, i) => (
              <figure key={i}>
                <Link href="/gallery">
                  <div className="im">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={GALLERY[g.photo]} alt={`Mrinaal Technologies project: ${plain(g.caption)}`} loading="lazy" />
                  </div>
                  <figcaption><b><T v={g.caption} /></b><span>View Gallery</span></figcaption>
                </Link>
              </figure>
            ))}
          </div>
          <p className="center" style={{ marginTop: "2.6rem" }}>
            <Link className="btn btn-accent" href="/gallery">Discover More</Link>
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head"><span className="pill">FAQ</span><h2>{FAQ_TITLE}</h2></div>
          <div className="faq-grid">
            {FAQ.map(([q, a], i) => (
              <details className="faq" key={i} open={i < 2}>
                <summary><T v={q} /></summary>
                <p><T v={a} /></p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
