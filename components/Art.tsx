/* Flat illustrations for the hero areas, drawn in the site palette. Decorative only. */

const C = {
  navy: "#0b2447",
  navy2: "#14366b",
  accent: "#00a6a6",
  light: "#cfe0f5",
  pale: "#e3e9f2",
  orbit: "#8fa6c8",
};

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
};

export function HeroArt() {
  return (
    <div className="art">
      <svg viewBox="0 0 520 470" {...svgProps}>
        <ellipse cx="270" cy="250" rx="235" ry="150" stroke={C.orbit} strokeWidth="1.4" transform="rotate(-14 270 250)" />
        <circle cx="60" cy="292" r="5" fill="#fff" />
        <circle cx="470" cy="160" r="5" fill="#fff" />
        <circle cx="380" cy="395" r="5" fill="#fff" />
        <path d="M440 410l40-26M478 386l-8 14 14-2z" stroke={C.orbit} strokeWidth="1.4" />
        {/* server rack */}
        <rect x="70" y="150" width="92" height="190" rx="10" fill={C.pale} stroke={C.accent} strokeWidth="3" />
        <g fill={C.navy}>
          <rect x="84" y="168" width="64" height="26" rx="4" />
          <rect x="84" y="204" width="64" height="26" rx="4" />
          <rect x="84" y="240" width="64" height="26" rx="4" />
          <rect x="84" y="276" width="64" height="26" rx="4" />
        </g>
        <g fill={C.accent}>
          <circle cx="138" cy="181" r="3.5" />
          <circle cx="138" cy="217" r="3.5" />
          <circle cx="138" cy="289" r="3.5" />
        </g>
        <circle cx="138" cy="253" r="3.5" fill={C.light} />
        <path d="M92 181h30M92 217h30M92 253h30M92 289h30" stroke={C.light} strokeWidth="2" />
        {/* monitor */}
        <rect x="188" y="110" width="236" height="160" rx="14" fill={C.navy2} stroke={C.light} strokeWidth="5" />
        <path d="M290 270l-10 44h52l-10-44" fill={C.light} />
        <rect x="258" y="312" width="96" height="10" rx="5" fill={C.light} />
        <path d="M306 140l42 14v30c0 28-19 46-42 54-23-8-42-26-42-54v-30z" fill={C.accent} />
        <path d="M288 188l13 13 24-26" stroke="#fff" strokeWidth="6" />
        {/* cctv */}
        <g transform="rotate(-12 430 70)">
          <rect x="372" y="44" width="104" height="44" rx="12" fill={C.pale} />
          <rect x="462" y="50" width="26" height="32" rx="6" fill={C.accent} />
          <circle cx="398" cy="66" r="7" fill={C.navy} />
          <path d="M410 88v26h-30" stroke={C.pale} strokeWidth="7" />
        </g>
        {/* router + wifi */}
        <rect x="300" y="350" width="130" height="44" rx="10" fill={C.light} />
        <g fill={C.navy}>
          <circle cx="324" cy="372" r="4" />
          <circle cx="340" cy="372" r="4" />
          <circle cx="356" cy="372" r="4" />
        </g>
        <path d="M396 350v-26M416 350v-34" stroke={C.light} strokeWidth="6" />
        <g stroke={C.accent} strokeWidth="5">
          <path d="M440 318a40 40 0 0 1 20 34" />
          <path d="M452 296a64 64 0 0 1 32 56" />
        </g>
        <path d="M116 340c0 60 90 90 184 32" stroke={C.accent} strokeWidth="4" strokeDasharray="2 9" />
        <g transform="rotate(12 470 250)">
          <rect x="452" y="200" width="36" height="96" rx="6" stroke={C.orbit} strokeWidth="2" />
          <rect x="460" y="210" width="20" height="20" rx="3" fill={C.light} />
          <rect x="460" y="238" width="20" height="20" rx="3" fill={C.accent} />
          <rect x="460" y="266" width="20" height="20" rx="3" fill={C.pale} />
        </g>
        <path d="M200 60l14 26h-28z" fill={C.accent} />
        <circle cx="40" cy="120" r="12" stroke={C.light} strokeWidth="3" />
      </svg>
    </div>
  );
}

export type ArtVariant = "security" | "hardware" | "network" | "consult" | "contact";

/** Small composition for inner page heroes. */
export function PageArt({ variant = "contact" }: { variant?: ArtVariant }) {
  return (
    <div className="art">
      <svg viewBox="0 0 420 300" {...svgProps}>
        <ellipse cx="210" cy="160" rx="190" ry="110" stroke={C.orbit} strokeWidth="1.4" transform="rotate(-10 210 160)" />
        <circle cx="30" cy="190" r="5" fill="#fff" />
        <circle cx="392" cy="110" r="5" fill="#fff" />
        <circle cx="30" cy="80" r="9" stroke={C.light} strokeWidth="3" />
        {variant === "security" || variant === "contact" ? <Security /> : null}
        {variant === "hardware" ? <Hardware /> : null}
        {variant === "network" ? <Network /> : null}
        {variant === "consult" ? <Consult /> : null}
      </svg>
    </div>
  );
}

function Security() {
  return (
    <>
      <path d="M210 40l70 24v52c0 50-32 80-70 94-38-14-70-44-70-94V64z" fill={C.accent} />
      <path d="M180 124l22 22 40-44" stroke="#fff" strokeWidth="10" />
      <g transform="rotate(-12 330 60)">
        <rect x="290" y="40" width="80" height="34" rx="10" fill={C.pale} />
        <rect x="360" y="45" width="20" height="24" rx="5" fill={C.accent} />
        <circle cx="310" cy="57" r="6" fill={C.navy} />
        <path d="M320 74v22h-24" stroke={C.pale} strokeWidth="6" />
      </g>
      <rect x="40" y="70" width="70" height="90" rx="10" fill={C.light} />
      <circle cx="75" cy="105" r="16" fill={C.navy} />
      <path d="M60 140h30" stroke={C.navy} strokeWidth="5" />
      <rect x="290" y="200" width="66" height="66" rx="12" fill={C.pale} stroke={C.accent} strokeWidth="3" />
      <path d="M323 212s13 13 13 26a13 13 0 0 1-26 0c0-6 4-10 4-10s2 6 6 6c0-9 3-15 3-22z" fill={C.accent} />
    </>
  );
}

function Hardware() {
  return (
    <>
      <rect x="130" y="50" width="180" height="120" rx="12" fill={C.navy2} stroke={C.light} strokeWidth="5" />
      <path d="M150 140l30-30 24 18 36-40 30 26" stroke={C.accent} strokeWidth="6" />
      <path d="M210 170l-8 34h40l-8-34" fill={C.light} />
      <rect x="186" y="202" width="72" height="9" rx="4.5" fill={C.light} />
      <rect x="40" y="150" width="96" height="62" rx="8" fill={C.pale} />
      <rect x="48" y="158" width="80" height="44" rx="4" fill={C.navy} />
      <rect x="26" y="212" width="124" height="10" rx="5" fill={C.light} />
      <rect x="300" y="190" width="86" height="56" rx="10" fill={C.pale} stroke={C.accent} strokeWidth="3" />
      <rect x="316" y="170" width="54" height="26" rx="4" fill={C.light} />
      <rect x="316" y="228" width="54" height="30" rx="4" fill="#fff" />
      <circle cx="368" cy="208" r="4" fill={C.accent} />
    </>
  );
}

function Network() {
  return (
    <>
      <rect x="60" y="60" width="80" height="170" rx="10" fill={C.pale} stroke={C.accent} strokeWidth="3" />
      <g fill={C.navy}>
        <rect x="72" y="76" width="56" height="22" rx="4" />
        <rect x="72" y="108" width="56" height="22" rx="4" />
        <rect x="72" y="140" width="56" height="22" rx="4" />
        <rect x="72" y="172" width="56" height="22" rx="4" />
      </g>
      <g fill={C.accent}>
        <circle cx="118" cy="87" r="3" />
        <circle cx="118" cy="119" r="3" />
        <circle cx="118" cy="151" r="3" />
        <circle cx="118" cy="183" r="3" />
      </g>
      <rect x="220" y="170" width="130" height="44" rx="10" fill={C.light} />
      <g fill={C.navy}>
        <circle cx="244" cy="192" r="4" />
        <circle cx="260" cy="192" r="4" />
        <circle cx="276" cy="192" r="4" />
      </g>
      <path d="M316 170v-26M336 170v-34" stroke={C.light} strokeWidth="6" />
      <g stroke={C.accent} strokeWidth="5">
        <path d="M262 120a50 50 0 0 1 70 0" />
        <path d="M244 96a80 80 0 0 1 106 0" />
        <path d="M228 72a108 108 0 0 1 138 0" />
      </g>
      <path d="M140 200c40 40 60 20 80 0" stroke={C.accent} strokeWidth="4" strokeDasharray="2 9" />
    </>
  );
}

function Consult() {
  return (
    <>
      <rect x="70" y="60" width="170" height="120" rx="14" fill={C.light} />
      <path d="M100 160V130M135 160V100M170 160v-44M205 160V86" stroke={C.navy} strokeWidth="14" />
      <path d="M100 110l35-26 35 14 40-34" stroke={C.accent} strokeWidth="5" />
      <path d="M260 120h100a14 14 0 0 1 14 14v56a14 14 0 0 1-14 14h-60l-30 24v-24h-10a14 14 0 0 1-14-14v-56a14 14 0 0 1 14-14z" fill={C.accent} />
      <path d="M282 152h70M282 174h44" stroke="#fff" strokeWidth="6" />
      <circle cx="120" cy="230" r="22" fill={C.pale} />
      <path d="M90 280c0-20 14-30 30-30s30 10 30 30" fill={C.pale} />
    </>
  );
}
