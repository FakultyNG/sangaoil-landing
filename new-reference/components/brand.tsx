import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="#home" className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="Sanga Oil Limited home"><span className="brand__drop">S</span><span><strong>SANGA OIL</strong><small>LIMITED</small></span></Link>;
}
