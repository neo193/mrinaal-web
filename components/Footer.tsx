import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { ADDRESS, COPYRIGHT, EMAIL, FOOTER_TAGLINE, LOGO, PHONE_1, PHONE_2, PRODUCTS } from "@/lib/content";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap grid">
          <div>
            <Link className="brand light" href="/">
              <Image src={LOGO} alt="Mrinaal Technologies" width={180} height={100} />
            </Link>
            <p>{FOOTER_TAGLINE}</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/enquiry">Enquiry</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3>Products &amp; Solutions</h3>
            <ul>
              {PRODUCTS.map((p) => (
                <li key={p.href}><Link href={p.href}>{p.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact us</h3>
            <p><Icon name="pin" size={16} /> {ADDRESS}</p>
            <p>
              <Icon name="phone" size={16} />
              <span><a href={`tel:${PHONE_1}`}>080-41698199</a> | <a href={`tel:${PHONE_2}`}>+91-98802 71555</a></span>
            </p>
            <p><Icon name="mail" size={16} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
        </div>
        <div className="wrap legal">{COPYRIGHT}</div>
      </footer>
      <a className="call-fab" href={`tel:${PHONE_2}`} aria-label="Call now">
        <Icon name="phone" size={22} />
        <span>Call Now</span>
      </a>
    </>
  );
}
