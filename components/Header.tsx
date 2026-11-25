"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LOGO, PRODUCTS } from "@/lib/content";

const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export default function Header() {
  const path = norm(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const setHdr = () => {
      if (headerRef.current)
        document.documentElement.style.setProperty("--hdr", headerRef.current.offsetHeight + "px");
    };
    setHdr();
    window.addEventListener("resize", setHdr);
    const onDoc = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node) && window.innerWidth > 1020) setSub(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSub(false);
        setOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", setHdr);
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // close menus on navigation
  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cur = (href: string) => (norm(href) === path ? ({ "aria-current": "page" } as const) : {});
  const productActive = PRODUCTS.some((p) => norm(p.href) === path);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="Mrinaal Technologies home">
          <Image src={LOGO} alt="Mrinaal Technologies" width={180} height={100} priority />
        </Link>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="nav" aria-label="Main" className={open ? "open" : ""}>
          <ul>
            <li><Link href="/" {...cur("/")}>Home</Link></li>
            <li><Link href="/about-us" {...cur("/about-us")}>About us</Link></li>
            <li ref={subRef} className={`has-sub${sub ? " open" : ""}${productActive ? " is-active" : ""}`}>
              <button className="sub-toggle" aria-expanded={sub} onClick={() => setSub((s) => !s)}>
                Products &amp; Solutions
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </button>
              <ul className="sub">
                {PRODUCTS.map((p) => (
                  <li key={p.href}><Link href={p.href} {...cur(p.href)}>{p.label}</Link></li>
                ))}
              </ul>
            </li>
            <li><Link href="/gallery" {...cur("/gallery")}>Gallery</Link></li>
            <li><Link href="/contact-us" {...cur("/contact-us")}>Contact Us</Link></li>
          </ul>
          <Link className="btn btn-soft nav-cta" href="/enquiry" {...cur("/enquiry")}>Enquire Now</Link>
        </nav>
      </div>
    </header>
  );
}
