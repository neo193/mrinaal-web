import type { IconName } from "@/lib/content";

const PATHS: Record<IconName, string> = {
  monitor: "M5 4h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM8 20h8M12 16v4",
  laptop: "M6.5 5h11A1.5 1.5 0 0119 6.5V15H5V6.5A1.5 1.5 0 016.5 5zM2 19h20",
  printer: "M7 9V3h10v6M6 9h12a2 2 0 012 2v6H4v-6a2 2 0 012-2zM7 14h10v7H7z",
  storage: "M4.5 4h15A1.5 1.5 0 0121 5.5v3A1.5 1.5 0 0119.5 10h-15A1.5 1.5 0 013 8.5v-3A1.5 1.5 0 014.5 4zM4.5 14h15a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18.5v-3A1.5 1.5 0 014.5 14zM7 7h.01M7 17h.01",
  board: "M4.5 4h15A1.5 1.5 0 0121 5.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 14.5v-9A1.5 1.5 0 014.5 4zM8 20l2-4M16 20l-2-4M7 10l3-2 3 3 4-3",
  network: "M12 3a2 2 0 110 4 2 2 0 010-4zM5 17a2 2 0 110 4 2 2 0 010-4zM19 17a2 2 0 110 4 2 2 0 010-4zM12 7v5M12 12l-6 5M12 12l6 5",
  cable: "M4 8h6a3 3 0 013 3v2a3 3 0 003 3h4M2 8h2M20 16h2",
  raceway: "M4 9h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1zM7 9v6M12 9v6M17 9v6",
  fiber: "M3 17c6 0 6-10 12-10h6M3 12c5 0 7-5 12-5",
  wifi: "M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19h.01",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  camera: "M4 7h10a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM16 11l6-3v8l-6-3",
  door: "M7.5 3h9A1.5 1.5 0 0118 4.5v15a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 19.5v-15A1.5 1.5 0 017.5 3zM15 12h.01",
  fingerprint: "M6 11a6 6 0 0112 0v2M9 21c0-3 0-6 3-6s3 3 3 6M12 11v4M4 15c0 2 .5 4 1.5 6M20 15c0 2-.5 4-1.5 6",
  alarm: "M6 18V11a6 6 0 0112 0v7l2 2H4zM10 22a2 2 0 004 0",
  fire: "M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  strategy: "M4 20V10M10 20V4M16 20v-8M22 20H2",
  guide: "M12 4a4 4 0 110 8 4 4 0 010-8zM4 21c0-4 4-6 8-6s8 2 8 6",
  support: "M4 13v-1a8 8 0 0116 0v1M3.5 13h1A1.5 1.5 0 016 14.5v3A1.5 1.5 0 014.5 19h-1A1.5 1.5 0 012 17.5v-3A1.5 1.5 0 013.5 13zM19.5 13h1a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5z",
  mail: "M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zM3 7l9 6 9-6",
  pin: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 7.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z",
  check: "M5 12l5 5 9-10",
};

export default function Icon({ name, size = 26 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="ic"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
