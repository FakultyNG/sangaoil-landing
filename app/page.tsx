import Link from "next/link";
import {
  ArrowDownRight, ArrowRight, BadgeCheck, ChevronRight,
  Fuel, Mail, MapPin, Menu, Phone, ShieldCheck, Thermometer, Waves,
} from "lucide-react";

const promises = [
  [ShieldCheck, "Reliable protection", "Excellent wear protection and engine cleanliness."],
  [Fuel, "High performance", "Consistent power and efficiency in all operating conditions."],
  [Thermometer, "Temperature stability", "Performs in high temperatures and harsh marine environments."],
  [BadgeCheck, "Quality assured", "Meets industry standards for marine engines."],
] as const;

const products = [
  { grade: "2T", formula: "TC-W3", use: "For smaller engines", api: "API SL", equivalence: "Equivalent to 20W40", copy: "High quality oil designed for outboard motors and smaller marine engines." },
  { grade: "4T", formula: "FC-W", use: "For bigger engines", api: "API SM", equivalence: "Equivalent to 25W40", copy: "Premium 4-stroke oil for powerful outboard and inboard marine engines." },
] as const;

function Monogram() { return <span className="monogram" aria-hidden="true">S</span>; }

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link className={`wordmark ${inverse ? "wordmark-inverse" : ""}`} href="/" aria-label="Sanga Oil Limited home"><Monogram /><span><b>SANGA OIL</b><small>LIMITED</small></span></Link>;
}

function ProductVessel({ grade, hero = false }: { grade: "2T" | "4T"; hero?: boolean }) {
  return <div className={`vessel vessel-${grade.toLowerCase()} ${hero ? "vessel-hero" : ""}`} aria-label={`Sanga Oil ${grade} oil container`}>
    <i className="vessel-cap" /><div className="vessel-label"><Monogram /><span>SANGA OIL</span><strong>{grade}</strong><b>{grade === "2T" ? "TC-W3" : "FC-W"}</b><small>{grade === "2T" ? "20W40" : "25W40"}</small></div>
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
      <div className="dw-hero-copy"><p className="kicker"><Waves /> Marine engine oil</p><h1>Powering performance.<br /><i>Protecting</i> your journey.</h1><p className="hero-intro">Sanga Oil Limited produces high quality Outboard marine &amp; vessel engine oils built for reliability, protection and maximum performance.</p><div className="hero-actions"><a href="#products">Explore products <ArrowDownRight /></a><a href="#contact">Talk to us <ChevronRight /></a></div></div>
      <div className="hero-vessels" aria-hidden="true"><div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" /><div className="hero-drum"><Monogram /><span>SANGA<br />OIL</span><small>OUTBOARD MARINE<br />VESSEL ENGINE OIL</small></div><ProductVessel grade="2T" hero /><ProductVessel grade="4T" hero /></div>
      <p className="scroll-cue">SCROLL TO EXPLORE <span /></p>
    </section>

    <section id="why-us" className="dw-proof"><div className="proof-heading"><p className="kicker">Built for the water</p><h2>Trusted on every journey.</h2></div><div className="proof-list">{promises.map(([Icon, title, copy], index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section id="products" className="dw-products"><div className="section-heading"><p className="kicker">Our products</p><h2>Two formulations.<br /><i>Maximum protection.</i></h2><p>Purpose-built marine lubrication for the engines that keep your operation moving.</p></div><div className="product-cards">{products.map((item, index) => <article className={`dw-product-card card-${item.grade.toLowerCase()}`} key={item.grade}><div className="card-number">0{index + 1}</div><ProductVessel grade={item.grade} /><div className="product-copy"><span>{item.use}</span><h3>{item.grade} <small>({item.formula})</small></h3><p className="api">{item.api} <b>•</b> {item.equivalence}</p><p>{item.copy}</p><a href="#contact">Enquire about {item.grade} <ArrowRight /></a></div></article>)}</div></section>

    <section className="dw-sizes"><div><p className="kicker">Available pack sizes</p><h2>Made to move<br />with <i>your work.</i></h2></div><div className="size-list"><article><span>01</span><b>4L</b><p>Perfect for small engines and personal use.</p></article><article><span>02</span><b>25L</b><p>Ideal for regular use and marine operators.</p></article><article><span>03</span><b>208L</b><p>Economic choice for commercial and industrial use.</p></article></div><div className="size-objects" aria-hidden="true"><ProductVessel grade="2T" /><div className="size-drum" /></div></section>

    <section id="about" className="dw-territory"><div className="territory-copy"><p className="kicker">Proudly serving</p><h2>Nigeria &amp;<br /><i>Cameroon</i></h2><p>Sanga Oil Limited is committed to powering marine operations across Nigeria and Cameroon with quality you can rely on.</p><a href="#contact">Find your local contact <ArrowRight /></a></div><div className="territory-map" aria-hidden="true"><div className="map-land" /><MapPin /><span>NIGERIA</span><span>CAMEROON</span></div></section>

    <section id="contact" className="dw-contact"><div><p className="kicker">Head office · Nigeria</p><h2>Let&apos;s keep your<br /><i>journey moving.</i></h2><p>Get in touch for product information, supply details, or a quote.</p></div><div className="contact-details"><a href="mailto:Support@sangaoils.com"><Mail /><span><small>Email us</small>Support@sangaoils.com</span><ArrowRight /></a><p><MapPin /><span><small>Visit us</small>2 Life Avenue, Eliozu, Port Harcourt, Rivers State</span></p><p><Phone /><span><small>Enquiries</small>Send us a message through our contact form</span></p></div><form action="https://formsubmit.co/sangaoilhq@gmail.com" method="POST"><input type="hidden" name="_subject" value="New SANGA OIL landing page enquiry" /><input type="hidden" name="_captcha" value="false" /><label>Name<input name="name" required /></label><label>Email<input type="email" name="email" required /></label><label>Message<textarea name="message" rows={3} required /></label><button type="submit">Send enquiry <ArrowRight /></button></form></section>

    <footer className="dw-footer"><Brand inverse /><div><a href="#home">Home</a><a href="#about">About Us</a><a href="#products">Products</a><a href="#why-us">Why Sanga Oil</a></div><p>© {new Date().getFullYear()} Sanga Oil Limited.<br />Quality Oil. Trusted Performance.</p></footer>
  </main>;
}
