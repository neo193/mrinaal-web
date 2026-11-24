export type Txt = string | { draft: string };
export const d = (s: string): Txt => ({ draft: s });

export const SITE = "Mrinaal Technologies";
export const LOGO =
  "https://mrinaal.in/wp-content/uploads/2025/07/LOGO_Google-2.jpg";
const UPLOADS = "https://mrinaal.in/wp-content/uploads/2025/07/";

export const PHONE_1 = "08041698199";
export const PHONE_2 = "+919880271555";
export const EMAIL = "info@mrinaal.com";
export const ADDRESS =
  "No 30, 2nd floor, 3rd main, 1st Cross, KEB Layout, Vivekanandanagar, Katriguppe main road, Bangalore-560085";
export const COPYRIGHT = "©2025. Mrinaal Technologies. All Rights Reserved";
export const FOOTER_TAGLINE =
  "Reliable IT solutions provider specializing in infrastructure, security, and consulting services.";
export const BANNER =
  "From Consultation to Execution — Complete IT and Security Solutions Under One Roof.";

// URL slugs
export const PRODUCTS = [
  { label: "Computer Hardware", href: "/computer-hardware" },
  { label: "Network Solutions", href: "/network-solution" },
  { label: "Security Systems", href: "/security-systems" },
  { label: "Consultation", href: "/consultation" },
];

export type IconName =
  | "monitor"
  | "laptop"
  | "printer"
  | "storage"
  | "board"
  | "network"
  | "cable"
  | "raceway"
  | "fiber"
  | "wifi"
  | "shield"
  | "camera"
  | "door"
  | "fingerprint"
  | "alarm"
  | "fire"
  | "phone"
  | "strategy"
  | "guide"
  | "support"
  | "mail"
  | "pin"
  | "check";

export type CardItem = { title: Txt; text: Txt; icon: IconName };

// ---------------- Home ----------------
export const HERO_TITLE = "Innovating Tomorrow, Securing Today";
export const HERO_INTRO =
  "At Mrinaal Technologies, we are committed to delivering cutting-edge technology solutions that empower your business, protect your spaces, and enhance everyday connectivity.";
export const HERO_BUTTONS = [
  { label: "Get Started", href: "/enquiry" },
  { label: "Know More", href: "/about-us" },
];

export const HIGHLIGHTS: [Txt, Txt][] = [
  [
    "Expert Team",
    "A skilled team of certified professionals dedicated to delivering reliable and innovative tech solutions.",
  ],
  [
    "Timely Project Delivery",
    "We ensure every project is completed on schedule without compromising on quality or precision.",
  ],
  [
    "Top-Quality Products",
    "We offer only high-quality, trusted products to ensure long-lasting performance and reliability.",
  ],
];

export const ABOUT_LEAD =
  "Founded in 2002, with a strong foundation of technical expertise";
export const ABOUT_TEASER =
  "Founded in 2002, Mrinaal Technologies delivers intelligent IT solutions by blending technical expertise with domain knowledge. We offer customized services in Software, Networking, Security, Managed Services, Telephony, and Electrical works. Our consultative approach ensures tailored, effective results for every client.";
export const ABOUT_POINTS: Txt[] = [
  "Expert Technicians",
  "Quality Repairs",
  "Quick Turnaround",
  "Top-Quality Products",
];

export const HOME_PRODUCTS: {
  label: string;
  href: string;
  text: Txt;
  icon: IconName;
}[] = [
  {
    label: "Computer Hardware",
    href: "/computer-hardware",
    text: "Branded and assembled systems, laptops and printers.",
    icon: "monitor",
  },
  {
    label: "Network Solutions",
    href: "/network-solution",
    text: "Structured cabling, raceway, OFC, wireless and firewalls.",
    icon: "network",
  },
  {
    label: "Security Systems",
    href: "/security-systems",
    text: "CCTV cameras, intruder alarms and fire alarms.",
    icon: "shield",
  },
];

export const WHY_TITLE = "What sets us apart";
export const WHY_POINTS: [Txt, Txt][] = [
  [
    "End-to-End Solutions",
    "From hardware to networking and security, we handle everything—so you don’t have to juggle multiple vendors.",
  ],
  [
    "Timely Execution",
    "We stick to deadlines with efficient planning and seamless coordination, ensuring your systems go live without delay.",
  ],
  [
    "Trusted Quality & Security",
    "We work with top brands and follow industry-best practices to ensure maximum reliability, performance, and protection.",
  ],
];

export const STATS: { label: string; value: number | null }[] = [
  { label: "Years of Excellence", value: 23 },
  { label: "Global Clients", value: 200 },
  { label: "Happy Clients", value: 500 },
  { label: "On-Time Project Completion", value: 99 },
];

export const FAQ_TITLE = "Got questions? we've got answers";
export const FAQ: [Txt, Txt][] = [
  [
    "What services does Mrinaal Technologies offer?",
    "We provide complete solutions including computer hardware (desktops, laptops, printers, NAS), network infrastructure (structured cabling, wireless, OFC), and security systems (CCTV, fire alarms, access control).",
  ],
  [
    "Do you provide installation and after-sales support?",
    "Yes, we handle installation, configuration, and provide reliable after-sales support for all our products and solutions.",
  ],
  [
    "Can I get customized hardware or networking solutions?",
    "Absolutely! We tailor solutions to meet your specific requirements, whether you're a home user, business, or enterprise.",
  ],
  [
    "Which brands do you work with?",
    "We partner with leading global brands known for performance and reliability in computing, networking, and security technologies.",
  ],
  [
    "Do you offer on-site or remote assistance?",
    "Yes, we offer both on-site visits and remote support, depending on the nature of the issue and your location.",
  ],
  [
    "How do I request a quote or consultation?",
    "You can reach us through our contact form, email, or phone. Our team will respond promptly to discuss your needs and provide a free consultation.",
  ],
];

export const CTA_TITLE = "Every connection we build is a solution empowered.";

// ---------------- About ----------------
export const ABOUT_PAGE = {
  title: "About Us",
  lead: ABOUT_LEAD,
  motto: "Smart Solutions. Strong Foundations. Seamless Execution.",
  paras: [
    "Founded in 2002, Mrinaal Technologies delivers IT solutions by blending technical expertise with domain knowledge. We offer customized services in software, networking, security, managed services, telephony and electrical works through a consultative, customized approach.",
    "Our certified team follows EIA/TIA structured cabling standards and covers active (Layer 2 and above) and passive (Layer 1) infrastructure, including LAN and WAN design.",
    "We aim to align IT initiatives with business goals, with responsive, cost-effective service from server maintenance to end-user support.",
  ],
};

// ---------------- Product pages ----------------
export type ProductData = {
  kicker: string;
  title: string;
  // All four product pages share the same layout, so these are required.
  label: string; // small caps label above the heading
  heading: Txt; // main heading of the intro block
  paras: Txt[];
  sub: Txt; // secondary headline above the cards
  subPara: Txt; // short line under the secondary headline
  cards: CardItem[];
  description: string;
};

export const HARDWARE: ProductData = {
  kicker: "Intelligent Solutions",
  title: "Computer Hardware",
  description: "Computer hardware solutions from Mrinaal Technologies.",
  label: "ABOUT",
  heading: d("Computer Hardware Solutions"),
  paras: [
    "At Mrinaal Technologies, we offer a comprehensive range of computer hardware solutions to meet the evolving needs of businesses across industries. From desktops and laptops to high-performance servers and peripherals, we ensure every product we deliver is reliable, scalable, and backed by top-tier brands.",
    "Our hardware services include supply, installation, configuration, and maintenance.",
  ],
  sub: "Comprehensive Computer Hardware Solutions",
  subPara:
    "At Mrinaal Technologies, we offer a wide range of cutting-edge computer hardware products.",
  cards: [
    {
      title: "Branded and Assembled Systems",
      text: "High-performance branded and custom-assembled systems tailored to meet specific business and personal computing needs.",
      icon: "monitor",
    },
    {
      title: "Laptops",
      text: "Reliable, high-quality laptops from top brands designed for business, education, creative, and everyday use.",
      icon: "laptop",
    },
    {
      title: "Printers",
      text: "Efficient, high-speed printers for offices and businesses, supporting sharp printing, scanning, and multifunction tasks.",
      icon: "printer",
    },
    {
      title: "NAS (Network Attached Storage)",
      text: "Secure, centralized data storage with easy access, sharing, and backup for homes, offices, and enterprises.",
      icon: "storage",
    },
    {
      title: "Interactive Boards",
      text: "Touch-enabled interactive boards designed for smart classrooms and meetings to enhance collaboration and engagement.",
      icon: "board",
    },
  ],
};

export const NETWORK: ProductData = {
  kicker: "Intelligent Solutions",
  title: "Network Solutions",
  description: "Scalable network solutions from Mrinaal Technologies.",
  label: "ABOUT",
  heading: d("Network Infrastructure Solutions"),
  paras: [
    "We offer scalable network infrastructure for connectivity, security and performance, from structured cabling to wireless and firewall solutions.",
    "Our certified team checks installations against industry standards and designs networks that can grow with your business.",
  ],
  sub: "Reliable and Scalable Network Solutions",
  subPara:
    "Whether you are building a new network or upgrading an existing one, we focus on performance, security and reliability.",
  cards: [
    {
      title: "Structured Cabling",
      text: "Organized, high-performance cabling for voice, data and video.",
      icon: "cable",
    },
    {
      title: "Raceway Solutions",
      text: "Durable cable routing for commercial and industrial sites.",
      icon: "raceway",
    },
    {
      title: "OFC Cabling and Solutions",
      text: "High-speed fiber optic cabling for long-distance data transmission with low signal loss.",
      icon: "fiber",
    },
    {
      title: "Wireless Network Solutions",
      text: "Secure, scalable wireless access across premises and devices.",
      icon: "wifi",
    },
    {
      title: "Firewalls",
      text: "Protection against unauthorized access, threats and data breaches.",
      icon: "shield",
    },
  ],
};

export const SECURITY: ProductData = {
  kicker: "Intelligent Solutions",
  title: "Security Systems",
  description: "Security systems from Mrinaal Technologies.",
  label: "ABOUT",
  heading: d("Security Solutions"),
  paras: [
    "We protect people, property and assets, from surveillance to fire and intrusion alarms, for homes, businesses and industrial sites, with installation, integration and ongoing support.",
  ],
  sub: d("Comprehensive Security Solutions"),
  subPara: d(
    "Protecting your people, property and assets with dependable surveillance, access control and alarm systems.",
  ),
  cards: [
    {
      title: "CCTV Cameras",
      text: "High-resolution recording and remote viewing.",
      icon: "camera",
    },
    {
      title: "Video Door Phone",
      text: "Two-way audio and video for visitor checks.",
      icon: "door",
    },
    {
      title: "Access Door & Attendance Solutions",
      text: "Controlled entry and attendance tracking using biometric or RFID.",
      icon: "fingerprint",
    },
    {
      title: "Intruder Alarm",
      text: "Alerts to unauthorized access or suspicious movement.",
      icon: "alarm",
    },
    {
      title: "Fire Alarms",
      text: "Early warning to protect lives and limit damage.",
      icon: "fire",
    },
    {
      title: "Intercom & EPABX Solutions",
      text: "Internal voice communication for offices and multi-department sites.",
      icon: "phone",
    },
  ],
};

export const CONSULT: ProductData = {
  kicker: "Intelligent Solutions",
  title: "Consultation",
  description: "IT consultation services from Mrinaal Technologies.",
  label: "ABOUT",
  heading: "IT Consultation Services",
  paras: [
    "We offer IT consulting to help businesses make strategic technology decisions, including infrastructure upgrades, network security and adopting new technologies.",
    "Our consultants assess current systems, identify gaps and recommend scalable, cost-effective solutions, from planning through implementation.",
    "Partner with us for future-ready IT strategies backed by industry experience.",
  ],
  sub: "Comprehensive IT Consulting Services",
  subPara:
    "We help businesses plan, implement and optimize technology infrastructure for growth, upgrades and stronger security.",
  cards: [
    {
      title: "Customized IT Strategy",
      text: "Analyzes business needs and builds solutions aligned with goals and budget.",
      icon: "strategy",
    },
    {
      title: "Expert Guidance",
      text: "Experienced consultants provide practical, scalable recommendations.",
      icon: "guide",
    },
    {
      title: "End-to-End Support",
      text: "Guidance from assessment through implementation.",
      icon: "support",
    },
  ],
};

// ---------------- Enquiry ----------------
export const ENQUIRY = {
  title: "Your Vision. Our Expertise. Let's Build Together.",
  intro:
    "Fill out the enquiry form below with your details and requirements, and our team will get back to you shortly.",
};

// ---------------- Gallery ----------------
const scaled = new Set([1, 10, 14, 15, 16]);
export const GALLERY: string[] = [
  ...Array.from(
    { length: 49 },
    (_, i) => `${UPLOADS}MRINAAL-PROJECT-PHOTOS-${i + 1}.jpeg`,
  ),
  ...Array.from(
    { length: 16 },
    (_, i) =>
      `${UPLOADS}MRINAAL-PROJECT-PHOTS-51-${i + 1}${scaled.has(i + 1) ? "-scaled" : ""}.jpg`,
  ),
];
