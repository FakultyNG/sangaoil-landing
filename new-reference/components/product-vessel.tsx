export function ProductVessel({ grade, size = "standard" }: { grade: "2T" | "4T"; size?: "small" | "standard" | "hero" }) {
  return <div className={`vessel vessel--${grade.toLowerCase()} vessel--${size}`} role="img" aria-label={`Sanga Oil ${grade} container`}><span className="vessel__cap" /><div className="vessel__label"><i>S</i><small>SANGA OIL</small><b>{grade}</b><strong>{grade === "2T" ? "TC-W3" : "FC-W"}</strong><em>{grade === "2T" ? "20W40" : "25W40"}</em></div></div>;
}
