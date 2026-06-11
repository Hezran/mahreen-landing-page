import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Code2,
  Users,
  Rocket,
  UserPlus,
  GraduationCap,
  Zap,
  Menu,
  X,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/ui/animated-hero";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahreen Indonesia — Berkarya Untuk Indonesia" },
      {
        name: "description",
        content:
          "Gerakan anak muda Indonesia untuk berdampak nyata melalui kreativitas dan teknologi.",
      },
    ],
  }),
  component: LandingPage,
});

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Kontak", href: "#kontak" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#beranda" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
            M
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Mahreen<span className="text-primary">.id</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <a href="#kontak">Gabung Sekarang</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full">
                <a href="#kontak" onClick={() => setOpen(false)}>
                  Gabung Sekarang
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


const BENEFITS = [
  {
    icon: Code2,
    title: "Belajar Teknologi",
    desc: "Akses kurikulum modern dari coding, AI, hingga design — dibimbing langsung oleh praktisi industri.",
  },
  {
    icon: Users,
    title: "Jaringan Luas",
    desc: "Terhubung dengan komunitas Gen Z & Millennial dari Sabang sampai Merauke yang punya visi sama.",
  },
  {
    icon: Rocket,
    title: "Dampak Nyata",
    desc: "Wujudkan ide jadi karya nyata. Setiap proyek dirancang untuk berkontribusi langsung bagi Indonesia.",
  },
];

function WhyJoin() {
  return (
    <section id="tentang" className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Kenapa Mahreen
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Tempat anak muda tumbuh & berkarya
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: UserPlus,
    title: "Daftar",
    desc: "Isi formulir singkat dan jadi bagian dari komunitas Mahreen Indonesia.",
  },
  {
    icon: GraduationCap,
    title: "Belajar",
    desc: "Ikut workshop, mentorship, dan kelas teknologi yang relevan dengan minatmu.",
  },
  {
    icon: Zap,
    title: "Berkarya",
    desc: "Wujudkan karya nyatamu — dari proyek sosial hingga produk teknologi untuk negeri.",
  },
];

function HowItWorks() {
  return (
    <section id="program" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Perjalananmu
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Tiga langkah untuk mulai berkarya
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background shadow-sm">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                Langkah {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-foreground/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "1.000+", label: "Anggota Aktif" },
  { value: "50+", label: "Proyek Berdampak" },
  { value: "30+", label: "Mentor Praktisi" },
  { value: "20+", label: "Kota di Indonesia" },
];

const TESTIMONIALS = [
  {
    quote:
      "Mahreen kasih aku ruang buat belajar sambil bikin sesuatu yang berarti. Sekarang aku punya circle teman yang sama-sama mau berdampak.",
    name: "Aisyah Putri",
    role: "Mahasiswa, Bandung",
  },
  {
    quote:
      "Dari ikut workshop sampai bikin produk nyata bareng tim — pengalaman di Mahreen ngubah cara aku ngeliat teknologi dan masa depan Indonesia.",
    name: "Reza Mahendra",
    role: "Developer Muda, Surabaya",
  },
];

function SocialProof() {
  return (
    <section className="border-y border-border bg-ink text-ink-foreground py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-4xl font-bold text-accent md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-base leading-relaxed text-ink-foreground/90 md:text-lg">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-ink-foreground/60">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Masukkan email kamu dulu, ya!");
      return;
    }
    toast.success("Terima kasih! Kami akan segera menghubungi kamu.");
    setEmail("");
  };

  return (
    <section id="kontak" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Jangan lewatkan
          <br />
          kesempatan untuk{" "}
          <span className="text-primary">berkarya nyata</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-foreground/70 md:text-lg">
          Daftarkan emailmu sekarang dan jadi bagian dari generasi yang
          membangun Indonesia.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Alamat Email Kamu"
            className="h-12 flex-1 rounded-full border-border bg-background px-5 text-base shadow-sm"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 rounded-full px-7 text-base"
          >
            Mulai Berkarya
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-display font-bold">
            M
          </span>
          <span className="font-display text-sm font-bold">Mahreen Indonesia</span>
        </div>
        <p className="text-center text-xs text-foreground/60">
          © 2026 Mahreen Indonesia. Berkarya Untuk Indonesia.
        </p>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
