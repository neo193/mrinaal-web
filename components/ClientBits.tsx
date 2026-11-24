"use client";

import { useEffect, useRef, useState } from "react";

/** Adds a yellow highlight to draft (non-verbatim) text when the URL contains ?drafts */
export function DraftToggle() {
  useEffect(() => {
    if (/[?&]drafts/.test(window.location.search)) document.body.classList.add("show-drafts");
  }, []);
  return null;
}

export function Stats({ items }: { items: { label: string; value: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState(items.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let n = 0;
        const t = setInterval(() => {
          n += 1;
          setVals(items.map((it) => Math.min(it.value, Math.round((it.value * n) / 40))));
          if (n >= 40) clearInterval(t);
        }, 30);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="stats" ref={ref}>
      {items.map((it, i) => (
        <div key={it.label}>
          <b>{vals[i]}+</b>
          <span>{it.label}</span>
        </div>
      ))}
    </div>
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
      <label>
        <span>Phone Number</span>
        <input type="tel" name="phone" autoComplete="tel" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} maxLength={180} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <small className="count">{msg.length} / 180</small>
      </label>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}
