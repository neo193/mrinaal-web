import type { Txt } from "@/lib/content";

/** Renders a content string. Draft strings get a data-draft marker (see ?drafts). */
export default function T({ v }: { v: Txt }) {
  return typeof v === "string" ? <>{v}</> : <span data-draft="">{v.draft}</span>;
}
