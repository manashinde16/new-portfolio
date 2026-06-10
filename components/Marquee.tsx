import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]; // doubled for a seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
