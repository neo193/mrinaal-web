import Link from "next/link";
import Icon from "@/components/Icon";
import T from "@/components/T";
import { Cta } from "@/components/Blocks";
import { Stats } from "@/components/ClientBits";
import {
  ABOUT_LEAD, ABOUT_POINTS, ABOUT_TEASER, BANNER, FAQ, FAQ_TITLE, HERO_BUTTONS, HERO_INTRO,
  HERO_TITLE, HIGHLIGHTS, HOME_PRODUCTS, STATS, WHY_POINTS, WHY_TITLE,
} from "@/lib/content";

export default function Home() {
  const statItems = STATS.filter((s): s is { label: string; value: number } => s.value !== null);
  const showStats = statItems.length === STATS.length;

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">{BANNER}</p>
          <h1>{HERO_TITLE}</h1>
          <p className="lead"><T v={HERO_INTRO} /></p>
          <div className="row">
            {HERO_BUTTONS.map((b, i) => (
              <Link key={b.label} className={`btn ${i === 0 ? "btn-accent" : "btn-light"}`} href={b.href}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="wrap grid3">
          {HIGHLIGHTS.map(([a, c], i) => (
            <div className="hl" key={i}>
              <Icon name="check" size={22} />
              <div>
                <h3><T v={a} /></h3>
                <p><T v={c} /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>{ABOUT_LEAD}</h2>
            <p><T v={ABOUT_TEASER} /></p>
            <Link className="btn btn-primary" href="/about-us">Know More</Link>
          </div>
          <ul className="ticks">
            {ABOUT_POINTS.map((p, i) => (
              <li key={i}><Icon name="check" size={20} /><T v={p} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Products &amp; Solutions</p>
            <h2>{BANNER.split(" — ")[0]}</h2>
          </div>
          <div className="cards">
            {HOME_PRODUCTS.map((p) => (
              <Link className="card link" href={p.href} key={p.href}>
                <div className="ico"><Icon name={p.icon} /></div>
                <h3>{p.label}</h3>
                <p><T v={p.text} /></p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2><T v={WHY_TITLE} /></h2></div>
          <div className="grid3">
            {WHY_POINTS.map(([a, c], i) => (
              <div className="why" key={i}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3><T v={a} /></h3>
                <p><T v={c} /></p>
              </div>
            ))}
          </div>
          {showStats && <Stats items={statItems} />}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap narrow">
          <div className="section-head"><h2>{FAQ_TITLE}</h2></div>
          {FAQ.map(([q, a], i) => (
            <details className="faq" key={i}>
              <summary><T v={q} /></summary>
              <p><T v={a} /></p>
            </details>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
