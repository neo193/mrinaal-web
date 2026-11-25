"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { IconName } from "@/lib/content";

/** Adds a yellow highlight to draft (non-verbatim) text when the URL contains ?drafts */
export function DraftToggle() {
  useEffect(() => {
    if (/[?&]drafts/.test(window.location.search)) document.body.classList.add("show-drafts");
  }, []);
  return null;
}

type Stat = { label: string; value: number; suffix?: string };

/** Count-up numbers shown on a winding road (desktop) or a 2x2 grid (mobile). */
export function Stats({ items }: { items: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState(items.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVals(items.map((it) => it.value));
      return;
    }
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let n = 0;
        t = setInterval(() => {
          n += 1;
          setVals(items.map((it) => Math.min(it.value, Math.round((it.value * n) / 40))));
          if (n >= 40) clearInterval(t);
        }, 30);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (t) clearInterval(t);
    };
  }, [items]);

  const fmt = (i: number) => `${vals[i]}${items[i].suffix ?? "+"}`;
  // circle centres along the road; alternate step numbers above / below
  const xs = [135, 370, 605, 840];
  const road =
    "M30 150c0 0 0 105 105 105s105-105 117-105 0-105 118-105 117 105 117 105 0 105 118 105 117-105 117-105 0-105 118-105 117 105 117 105";

  return (
    <div ref={ref}>
      <div className="wave">
        <svg viewBox="0 0 980 300" role="img" aria-label={items.map((it, i) => `${fmt(i)} ${it.label}`).join(", ")}>
          <g fill="#fff" stroke="#e3e9f2" strokeWidth="10">
            {xs.map((x) => <circle key={x} cx={x} cy="150" r="92" />)}
          </g>
          <path d={road} stroke="#0b2447" strokeWidth="34" fill="none" strokeLinecap="round" />
          <path d={road} stroke="#4a6a96" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          <g textAnchor="middle" fontFamily="inherit">
            {items.map((it, i) => {
              const x = xs[i];
              const words = it.label.split(" ");
              const lines = it.label.length > 20 ? [words.slice(0, -1).join(" "), words[words.length - 1]] : [it.label];
              return (
                <g key={it.label}>
                  <text x={x} y={i % 2 ? 285 : 40} fontWeight="700" fontSize="22" fill="#00a6a6">
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text x={x} y="152" fontWeight="800" fontSize="40" fill="#0b2447">{fmt(i)}</text>
                  {lines.map((l, j) => (
                    <text key={j} x={x} y={lines.length > 1 ? 176 + j * 20 : 180} fontWeight="500" fontSize="16" fill="#5b6579">{l}</text>
                  ))}
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <div className="stats-grid">
        {items.map((it, i) => (
          <div key={it.label}>
            <b>{fmt(i)}</b>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

type DeliverGroup = { label: string; href: string; items: { title: string; icon: IconName }[] };

/** Tabbed row of circles listing what each product line covers. */
export function DeliverTabs({ groups, initial = 0 }: { groups: DeliverGroup[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  const g = groups[active];
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Products & Solutions">
        {groups.map((x, i) => (
          <button
            key={x.label}
            role="tab"
            id={`dt-${i}`}
            aria-selected={i === active}
            aria-controls="dt-panel"
            onClick={() => setActive(i)}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className="circles" role="tabpanel" id="dt-panel" aria-labelledby={`dt-${active}`}>
        {g.items.map((it) => (
          <Link className="circle" href={g.href} key={it.title}>
            <Icon name={it.icon} size={30} />
            {it.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery">
        {images.map((u, i) => (
          <a
            key={u}
            href={u}
            className="g"
            onClick={(e) => {
              e.preventDefault();
              setActive(u);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={u} alt={`Mrinaal Technologies project photo ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button aria-label="Close">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active} alt="" />
        </div>
      )}
    </>
  );
}

/**
 * Enquiry form. Posts to FormSubmit (free, no backend needed) which emails the address in
 * FORM_ENDPOINT. Swap FORM_ENDPOINT for any other form handler (Formspree, a Cloudflare
 * Worker, etc.) - it only needs to accept a standard POST.
 */
const FORM_ENDPOINT = "https://formsubmit.co/info@mrinaal.com";

export function EnquiryForm() {
  const [msg, setMsg] = useState("");
  return (
    <form className="form" action={FORM_ENDPOINT} method="POST">
      <input type="hidden" name="_subject" value="New enquiry from website" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <label>
        <span>First Name <span className="req">*</span></span>
        <input name="first_name" required autoComplete="given-name" />
      </label>
      <label>
        <span>Email Address <span className="req">*</span></span>
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label className="full">
        <span>Phone Number</span>
        <input type="tel" name="phone" autoComplete="tel" />
      </label>
      <label className="full">
        <span>Message</span>
        <textarea name="message" rows={5} maxLength={180} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <small className="count">{msg.length} / 180</small>
      </label>
      <button className="btn btn-accent" type="submit">Submit</button>
    </form>
  );
}
