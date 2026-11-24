import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { PageHero } from "@/components/Blocks";
import { ADDRESS, BANNER, EMAIL, PHONE_1, PHONE_2 } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us", description: BANNER };

export default function ContactUs() {
  return (
    <>
      <PageHero kicker={BANNER} title="Contact Us" />
      <section className="section">
        <div className="wrap split">
          <div className="contact-list">
            <div>
              <Icon name="pin" />
              <div>
                <h3>Address</h3>
                <p>{ADDRESS}</p>
              </div>
            </div>
            <div>
              <Icon name="phone" />
              <div>
                <h3>Phone Number</h3>
                <p>
                  <a href={`tel:${PHONE_1}`}>080-41698199</a> |{" "}
                  <a href={`tel:${PHONE_2}`}>+91-98802 71555</a>
                </p>
              </div>
            </div>
            <div>
              <Icon name="mail" />
              <div>
                <h3>E-Mail</h3>
                <p>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
            </div>
            <Link className="btn btn-primary" href="/enquiry">
              Enquire Now
            </Link>
          </div>
          <div className="map">
            <h3>Location</h3>
            <iframe
              title="Mrinaal Technologies location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.9117420610459!2d77.55320069126965!3d12.930790759915531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2f8388500b%3A0xc179259aefa892c2!2sMrinaal%20Technologies!5e0!3m2!1sen!2sin!4v1795436475692!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
