import Link from "next/link";
import {
  ArrowDownRight, ArrowRight, BadgeCheck, ChevronRight,
  Fuel, Mail, MapPin, Menu, Phone, ShieldCheck, Thermometer, Waves,
} from "lucide-react";

const promises = [
  [ShieldCheck, "Corrosion protection", "Premium formulations protect outboards in saltwater and tropical humidity."],
  [Fuel, "Marine focused", "Built specifically for commercial fishermen, transport boats and support vessels."],
  [Thermometer, "Heat stability", "Reliable lubrication in harsh African marine conditions."],
  [BadgeCheck, "Mechanic backed", "Dealer incentives and mechanic partnerships keep service teams supplied."],
] as const;

const products = [
  { grade: "2T", formula: "TC-W3 target", use: "Two-stroke outboards", api: "Standard tier", equivalence: "Pro and Elite available", copy: "Sanga Marine 2T is developed for fishermen, boat owners and mechanics who need dependable smoke-controlled protection." },
  { grade: "4T", formula: "25W-40", use: "Four-stroke marine engines", api: "Standard tier", equivalence: "Pro and Elite available", copy: "Sanga Marine 4T 25W-40 supports hard-working outboards and transport vessels operating in heat, humidity and saltwater." },
  { grade: "GO", formula: "Gear Oil", use: "Lower units and gearcases", api: "Pro tier", equivalence: "Dealer supply", copy: "Marine Gear Oil helps protect drivetrains under heavy load, frequent starts and demanding coastal routes." },
  { grade: "MG", formula: "Marine Grease", use: "Fittings and moving parts", api: "Elite tier", equivalence: "Workshop supply", copy: "Marine Grease provides water-resistant protection for service points exposed to spray, washdown and corrosion." },
] as const;

const marketSegments = [
  "Commercial fishermen",
  "Boat owners",
  "Marine mechanics",
  "Outboard dealers",
  "Government marine agencies",
  "Oil & gas support boats",
  "Water transport operators",
] as const;

const roadmap = [
  ["Year 1", "OEM imports from China"],
  ["Year 2", "Nationwide marine distribution"],
  ["Year 3", "Nigerian packaging and blending"],
  ["Years 4-5", "West African expansion"],
] as const;

const boatChoices = [
  { title: "Fishing Boat", image: "/fishing-boat-1.jpeg" },
  { title: "Fishing Boat", image: "/fishing-boat-2.jpeg" },
  { title: "Commercial Boat", image: "/commercial-boat.jfif" },
] as const;

function Monogram() { return <span className="monogram" aria-hidden="true">S</span>; }

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link className={`wordmark ${inverse ? "wordmark-inverse" : ""}`} href="/" aria-label="Sanga Oil home"><img src="/sanga-logo.png" alt="Sanga Oil" /></Link>;
}

function ProductVessel({ grade, hero = false }: { grade: "2T" | "4T"; hero?: boolean }) {
  return <div className={`vessel vessel-${grade.toLowerCase()} ${hero ? "vessel-hero" : ""}`} aria-label={`Sanga Oil ${grade} oil container`}>
    <i className="vessel-cap" /><div className="vessel-label"><Monogram /><span>SANGA OIL</span><strong>{grade}</strong><b>{grade === "2T" ? "TC-W3" : "FC-W"}</b><small>{grade === "2T" ? "20W40" : "25W40"}</small></div>
  </div>;
}

function ProductBadge({ grade }: { grade: "2T" | "4T" | "GO" | "MG" }) {
  const src = grade === "2T" || grade === "GO" ? "/sanga-product-black.png" : "/sanga-product-blue.png";
  return <div className={`product-image-pack product-image-${grade.toLowerCase()}`} aria-label={`Sanga Oil ${grade} product pack`}>
    <img src={src} alt="" />
  </div>;
}

function SangaDrum({ className = "" }: { className?: string }) {
  return <div className={`sanga-drum ${className}`} aria-label="Sanga Oils drum">
    <img src="/sanga-drum.png" alt="" />
  </div>;
}

export default function LandingPage() {
  return <main id="main-content" className="deepwater">
    <header className="dw-header">
      <Brand />
      <nav className="dw-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About us</a><a href="#products">Products</a><a href="#why-us">Why Sanga Oil</a></nav>
      <a className="dw-contact-button" href="#contact">Get in touch <ArrowRight /></a><a className="dw-menu" href="#products" aria-label="Explore products"><Menu /></a>
    </header>

    <section className="dw-hero" id="home">
      <div className="hero-grid" /><div className="hero-current current-one" /><div className="hero-current current-two" />
      <div className="dw-hero-copy"><p className="kicker"><Waves /> Built for African marine conditions</p><h1>Sanga Oils.<br /><i>Improving</i> and preserving engine life.</h1><p className="hero-intro">Sanga Oil is focused on premium marine outboard engine lubricants for West Africa, beginning with Nigeria&apos;s fishing and marine transport sectors.</p><div className="hero-actions"><a href="#products">Explore products <ArrowDownRight /></a><a href="#contact">Talk to us <ChevronRight /></a></div></div>
      <div className="hero-vessels" aria-hidden="true"><div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" /><SangaDrum className="hero-drum" /></div>
      <p className="scroll-cue">SCROLL TO EXPLORE <span /></p>
    </section>

    <section id="why-us" className="dw-proof"><div className="proof-heading"><p className="kicker">Built for the water</p><h2>A marine-only lubricant brand.</h2></div><div className="proof-list">{promises.map(([Icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="boat-choice"><div className="boat-choice-heading"><p className="kicker">The Boats engine choice</p><h2>The Boats<br /><i>engine choice.</i></h2></div><div className="boat-choice-grid">{boatChoices.map((boat, index) => <article key={`${boat.title}-${index}`} className="boat-card"><div className="boat-frame"><img src={boat.image} alt={boat.title} /></div><h3>{boat.title}</h3></article>)}</div></section>

    <section id="products" className="dw-products"><div className="section-heading"><p className="kicker">Product portfolio</p><h2>Four marine products.<br /><i>Three launch tiers.</i></h2><p>Launch Standard, Pro and Elite tiers, then build distribution through marine mechanics, fishing cooperatives and outboard dealers.</p></div><div className="product-cards">{products.map((item, index) => <article className={`dw-product-card card-${item.grade.toLowerCase()}`} key={item.grade}><div className="card-number">0{index + 1}</div><ProductBadge grade={item.grade} /><div className="product-copy"><span>{item.use}</span><h3>{item.grade} <small>({item.formula})</small></h3><p className="api">{item.api} <b>•</b> {item.equivalence}</p><p>{item.copy}</p><a href="#contact">Enquire about {item.grade} <ArrowRight /></a></div></article>)}</div></section>

    <section className="dw-sizes"><div><p className="kicker">Available pack sizes</p><h2>Made to move<br />with <i>your work.</i></h2></div><div className="size-list"><article><span>01</span><b>4L</b><p>Perfect for small engines and personal use.</p></article><article><span>02</span><b>25L</b><p>Ideal for regular use and marine operators.</p></article><article><span>03</span><b>208L</b><p>Economic choice for commercial and industrial use.</p></article></div><div className="size-objects" aria-hidden="true"><SangaDrum className="size-drum" /></div></section>

    <section id="about" className="dw-strategy"><div className="strategy-copy"><p className="kicker">Vision &amp; mission</p><h2>Africa&apos;s trusted marine lubricant brand.</h2><p>Our mission is to provide reliable marine lubricants that protect engines in harsh tropical and saltwater environments.</p><div className="target-market">{marketSegments.map((segment) => <span key={segment}>{segment}</span>)}</div></div><div className="roadmap-panel"><p className="kicker">Five-year roadmap</p>{roadmap.map(([year, copy]) => <article key={year}><b>{year}</b><span>{copy}</span></article>)}</div></section>

    <section className="dw-territory"><div className="territory-copy"><p className="kicker">Expansion plan</p><h2>Nigeria first.<br /><i>West Africa next.</i></h2><p>Begin with OEM manufacturing in China, then establish Nigerian blending and packaging as volume grows across the region.</p><a href="#contact">Build distribution with us <ArrowRight /></a></div><div className="territory-map" aria-hidden="true"><img className="nigeria-map-image" src="/nigeria-map.png" alt="" /></div></section>

    <section id="contact" className="dw-contact"><div><p className="kicker">Head office · Nigeria</p><h2>Let&apos;s keep your<br /><i>journey moving.</i></h2><p>Get in touch for product information, supply details, or a quote.</p></div><div className="contact-details"><a href="mailto:Support@sangaoils.com"><Mail /><span><small>Email us</small>Support@sangaoils.com</span><ArrowRight /></a><p><MapPin /><span><small>Visit us</small>2 Life Avenue, Eliozu, Port Harcourt, Rivers State</span></p><p><Phone /><span><small>Enquiries</small>Send us a message through our contact form</span></p></div><form action="https://formsubmit.co/sangaoilhq@gmail.com" method="POST"><input suppressHydrationWarning type="hidden" name="_subject" value="New SANGA OIL landing page enquiry" /><input suppressHydrationWarning type="hidden" name="_captcha" value="false" /><label>Name<input suppressHydrationWarning name="name" required /></label><label>Email<input suppressHydrationWarning type="email" name="email" required /></label><label>Message<textarea suppressHydrationWarning name="message" rows={3} required /></label><button type="submit">Send enquiry <ArrowRight /></button></form></section>

    <footer className="dw-footer"><Brand inverse /><div><a href="#home">Home</a><a href="#about">About Us</a><a href="#products">Products</a><a href="#why-us">Why Sanga Oil</a></div><p>© {new Date().getFullYear()} Sanga Oil Limited.<br />Quality Oil. Trusted Performance.</p></footer>
  </main>;
}
