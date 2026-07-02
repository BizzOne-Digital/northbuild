"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons/Icons";
import { SITE } from "@/lib/data";

const FEATURES = [
  {
    title: "Quality Materials",
    desc: "Built to handle Canadian weather.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6V12C3 16.5 7 20.7 12 22C17 20.7 21 16.5 21 12V6L12 2Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Expert Installation",
    desc: "Installed right the first time.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    desc: "Fast, professional support you can count on.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F26522" strokeWidth="2" />
        <path d="M9 12L11 14L15 10" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Southwestern Ontario",
    desc: "Local roots. Community focused.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 9 6 6 6C6 6 9 8 8 11C8 11 5 10 4 12C4 12 7 12 8 14C8 14 6 15 7 17C7 17 10 15 12 16V22M12 2C12 2 15 6 18 6C18 6 15 8 16 11C16 11 19 10 20 12C20 12 17 12 16 14C16 14 18 15 17 17C17 17 14 15 12 16" stroke="#F26522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const SOLUTIONS = [
  {
    title: "Residential",
    subtitle: "Garage Doors",
    href: "/residential",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80",
    btnLabel: "Explore Residential",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    subtitle: "Doors & Dock Equipment",
    href: "/commercial",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80",
    btnLabel: "Explore Commercial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M2 9H22M2 15H22M8 3V21M16 3V21" stroke="#F26522" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Agricultural",
    subtitle: "Doors & Equipment",
    href: "/agricultural",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80",
    btnLabel: "Explore Agricultural",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="17" r="3" stroke="#F26522" strokeWidth="2" />
        <circle cx="17" cy="18" r="2" stroke="#F26522" strokeWidth="2" />
        <path d="M10 17H15M15 18V13L12 9H7V14" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11H19L21 14" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Service & Repairs",
    subtitle: "Fast · Reliable · Professional",
    href: "/services",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    btnLabel: "View Services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1628297167427-597e677e4a41?q=80", label: "Full View Aluminum" },
  { img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80", label: "Carriage House" },
  { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80", label: "Commercial Roll-up" },
  { img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80", label: "Agricultural Steel" },
];

const BRANDS = ["Upwardor", "Richards-Wilcox", "Garaga", "LiftMaster", "Manaras Opera"];

const ADVANTAGES = [
  "Quality materials & expert craftsmanship",
  "Local service you can rely on",
  "Solutions for every application",
  "Built strong. Built local. Built to last.",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/hero.png"
          alt="Northbuilt Garage Door"
          fill
          style={{ objectFit: "cover", objectPosition: "center right" }}
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.97) 0%, rgba(8,8,8,.88) 45%, rgba(8,8,8,.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "6rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem" }}>
            Southwestern Ontario&apos;s Trusted Installer
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 9vw, 6.5rem)", color: "#FFFFFF", lineHeight: 0.98, letterSpacing: "0.02em", marginBottom: "1.5rem", maxWidth: "640px" }}>
            BUILT STRONG.<br />BUILT LOCAL.<br /><span style={{ color: "#F26522" }}>BUILT TO LAST.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "420px", marginBottom: "2.25rem" }}>
            Premium residential, commercial, and agricultural doors and dock equipment. Proudly serving Southwestern Ontario.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Request a Free Quote <ArrowRightIcon size={16} color="#fff" />
            </Link>
            <Link href="/residential" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} style={{ padding: "2rem 1.5rem", borderRight: i < 3 ? "1px solid #1A1A1A" : "none", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ flexShrink: 0, marginTop: "2px" }}>{f.icon}</div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  {f.title}
                </div>
                <div style={{ color: "#7C7C7C", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              Solutions Built for Every Need
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: "6px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} unoptimized />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.7) 100%)" }} />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "rgba(8,8,8,0.85)", border: "1px solid #2C2C2C", borderRadius: "4px", padding: "0.4rem" }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.6rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>{s.title}</h3>
                  <p style={{ color: "#7C7C7C", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>{s.subtitle}</p>
                  <Link href={s.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "#F26522", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {s.btnLabel} <ArrowRightIcon size={13} color="#F26522" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK GALLERY ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              Our Work. <span style={{ color: "#F26522" }}>Your Peace of Mind.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
            {GALLERY.map((item, i) => (
              <div
                key={i}
                style={{ position: "relative", height: "230px", borderRadius: "4px", overflow: "hidden", border: "1px solid #2C2C2C", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "scale(1.01)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }} unoptimized />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 55%, rgba(8,8,8,0.85) 100%)" }} />
                <span style={{ position: "absolute", bottom: "0.75rem", left: "0.85rem", color: "#D7D7D7", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-secondary">
              View More Gallery <ArrowRightIcon size={14} color="#fff" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NORTHBUILT ADVANTAGE ── */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "1.5rem", lineHeight: 1.05 }}>
              The Northbuilt <span style={{ color: "#F26522" }}>Advantage</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
              {ADVANTAGES.map((a) => (
                <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <CheckCircleIcon size={20} color="#F26522" />
                  <span style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "0.92rem" }}>{a}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-secondary">
              About Northbuilt <ArrowRightIcon size={14} color="#fff" />
            </Link>
          </div>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/logo.png"
              alt="NorthBuilt Door & Dock"
              style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ backgroundColor: "#0D0D0D", padding: "2.5rem 1.5rem", borderTop: "1px solid #1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#505050", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
            We Work with Top Quality Brands
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3.5rem", flexWrap: "wrap" }}>
            {BRANDS.map((brand) => (
              <span
                key={brand}
                style={{ color: "#3A3A3A", fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "0.88rem", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s", cursor: "default" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7D7D7")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3A3A3A")}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABar />
    </>
  );
}