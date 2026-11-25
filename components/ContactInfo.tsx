import Icon from "./Icon";
import { ADDRESS, EMAIL, PHONE_1, PHONE_2 } from "@/lib/content";

/** Navy contact cards used on the Contact and Enquiry pages. */
export default function ContactInfo() {
  return (
    <>
      <div className="info">
        <Icon name="pin" size={22} />
        <div>
          <h3>Address</h3>
          <p>{ADDRESS}</p>
        </div>
      </div>
      <div className="info">
        <Icon name="phone" size={22} />
        <div>
          <h3>Phone Number</h3>
          <p>
            <a href={`tel:${PHONE_1}`}>080-41698199</a> | <a href={`tel:${PHONE_2}`}>+91-98802 71555</a>
          </p>
        </div>
      </div>
      <div className="info">
        <Icon name="mail" size={22} />
        <div>
          <h3>E-Mail</h3>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </div>
    </>
  );
}

export const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.9117420610459!2d77.55320069126965!3d12.930790759915531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2f8388500b%3A0xc179259aefa892c2!2sMrinaal%20Technologies!5e0!3m2!1sen!2sin!4v1795436475692!5m2!1sen!2sin";
