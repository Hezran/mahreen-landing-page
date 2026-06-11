import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  motion,
  useInView,
  animate as motionAnimate,
} from "framer-motion";
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
  Star,
  Sun,
  Moon,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ChevronLeft,
  ChevronRight,
  Palette,
  Cpu,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Hero } from "@/components/ui/animated-hero";
import useEmblaCarousel from "embla-carousel-react";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/hooks/use-scroll-animation";

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

// --- Dark Mode Hook ---
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("mahreen-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mahreen-theme", dark ? "dark" : "light");
  }, [dark]);

  return { dark, toggle: () => setDark((v) => !v) };
}

// --- Count Up Component ---
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = motionAnimate(0, target, {
      duration: 2,
      ease: [0.25, 0.4, 0.25, 1],
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isInView ? displayed.toLocaleString("id-ID") : "0"}
      {suffix}
    </span>
  );
}

// --- Navbar ---
const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Kontak", href: "#kontak" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

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

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-secondary"
          >
            {dark ? (
              <Sun className="h-4 w-4 text-accent" />
            ) : (
              <Moon className="h-4 w-4 text-foreground/60" />
            )}
          </button>
          <Button asChild className="rounded-full">
            <a href="#kontak">Gabung Sekarang</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-md"
          >
            {dark ? (
              <Sun className="h-5 w-5 text-accent" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/60" />
            )}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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

// --- WhyJoin ---
const BENEFITS = [
  {
    icon: Code2,
    title: "Belajar Teknologi",
    desc: "Akses kurikulum modern dari coding, AI, hingga design — dibimbing langsung oleh praktisi industri.",
    number: "01",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Users,
    title: "Jaringan Luas",
    desc: "Terhubung dengan komunitas Gen Z & Millennial dari Sabang sampai Merauke yang punya visi sama.",
    number: "02",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    icon: Rocket,
    title: "Dampak Nyata",
    desc: "Wujudkan ide jadi karya nyata. Setiap proyek dirancang untuk berkontribusi langsung bagi Indonesia.",
    number: "03",
    gradient: "from-primary/10 to-accent/30",
  },
];

function WhyJoin() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="tentang" className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={staggerItem} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Kenapa Mahreen
          </motion.p>
          <motion.h2 variants={staggerItem} className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Tempat anak muda tumbuh & berkarya
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {BENEFITS.map(({ icon: Icon, title, desc, number, gradient }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
                },
              }}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient accent strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className="flex items-start justify-between mb-5">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors">
                  {number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- HowItWorks ---
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="cara-kerja" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={staggerItem} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Perjalananmu
          </motion.p>
          <motion.h2 variants={staggerItem} className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Tiga langkah untuk mulai berkarya
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25, delayChildren: 0.3 },
            },
          }}
          className="relative mt-16 grid gap-10 md:grid-cols-3"
        >
          {/* Animated connecting line */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } },
            }}
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block origin-left"
          />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
                },
              }}
              className="relative text-center"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- SocialProof ---
const STATS = [
  { value: 1000, suffix: "+", label: "Anggota Aktif" },
  { value: 50, suffix: "+", label: "Proyek Berdampak" },
  { value: 30, suffix: "+", label: "Mentor Praktisi" },
  { value: 20, suffix: "+", label: "Kota di Indonesia" },
];

const TESTIMONIALS = [
  {
    quote:
      "Mahreen kasih aku ruang buat belajar sambil bikin sesuatu yang berarti. Sekarang aku punya circle teman yang sama-sama mau berdampak.",
    name: "Aisyah Putri",
    role: "Mahasiswa, Bandung",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Dari ikut workshop sampai bikin produk nyata bareng tim — pengalaman di Mahreen ngubah cara aku ngeliat teknologi dan masa depan Indonesia.",
    name: "Reza Mahendra",
    role: "Developer Muda, Surabaya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Mentorship di Mahreen bukan cuma teori. Aku langsung praktek bikin aplikasi yang bisa dipake warga di kampungku. Luar biasa!",
    name: "Dinda Ayu",
    role: "UI Designer, Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Networking di Mahreen itu beda. Aku ketemu co-founder startup aku di sini. Sekarang kita udah launch produk pertama kita.",
    name: "Fajar Nugroho",
    role: "Founder Startup, Jakarta",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Program bootcamp-nya intensive banget tapi worth it. Dalam 3 bulan, aku bisa bikin portfolio yang dilirik recruiter top tech company.",
    name: "Sari Wulandari",
    role: "Software Engineer, Malang",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5,
  },
];

function SocialProof() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="border-y border-border bg-ink text-ink-foreground py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Stats with count-up */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-center sm:text-left"
            >
              <div className="font-display text-4xl font-bold text-accent md:text-5xl">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-ink-foreground/70">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="mt-16 relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-ink-foreground">
              Apa kata mereka
            </h3>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-ink-foreground/70 transition-colors hover:bg-white/10 hover:text-ink-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-ink-foreground/70 transition-colors hover:bg-white/10 hover:text-ink-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_48%] rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  {/* Star rating */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-ink-foreground/90 md:text-lg">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-ink-foreground/60">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA ---
function CTA() {
  const [email, setEmail] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        {/* Dot grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <motion.h2
          variants={staggerItem}
          className="font-display text-4xl font-bold leading-tight md:text-6xl"
        >
          Jangan lewatkan
          <br />
          kesempatan untuk{" "}
          <span className="text-primary">berkarya nyata</span>
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-xl text-base text-foreground/70 md:text-lg"
        >
          Daftarkan emailmu sekarang dan jadi bagian dari generasi yang
          membangun Indonesia.
        </motion.p>

        <motion.form
          variants={staggerItem}
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
        </motion.form>
      </motion.div>
    </section>
  );
}

// --- Footer ---
const FOOTER_NAV = [
  {
    title: "Navigasi",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Tentang", href: "#tentang" },
      { label: "Program", href: "#program" },
      { label: "Kontak", href: "#kontak" },
    ],
  },
  {
    title: "Program",
    links: [
      { label: "Workshop", href: "#program" },
      { label: "Mentorship", href: "#program" },
      { label: "Proyek Sosial", href: "#program" },
      { label: "Bootcamp", href: "#program" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
                M
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Mahreen<span className="text-primary">.id</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/60 max-w-xs">
              Gerakan anak muda Indonesia untuk berdampak nyata melalui kreativitas dan teknologi. Bergabung, belajar, dan berkarya untuk negeri.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground/50 transition-all hover:border-primary/40 hover:text-primary hover:shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-foreground/50">
            © 2026 Mahreen Indonesia. Berkarya Untuk Indonesia.
          </p>
          <p className="text-xs text-foreground/40">
            Mahreen Internship
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- Our Programs ---
const PROGRAMS = [
  {
    icon: Code2,
    title: "Workshop Coding",
    desc: "Belajar coding dari dasar hingga mahir. Workshop intensif dengan praktisi industri yang langsung praktik membangun proyek nyata.",
    duration: "2-4 Minggu",
    schedule: "Setiap Sabtu",
    highlights: [
      "Web Development (React, Next.js)",
      "Mobile Development (React Native)",
      "Backend & Database",
      "Sertifikat resmi",
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Palette,
    title: "Mentorship Design",
    desc: "Program mentorship 1-on-1 dengan desainer profesional. Dari UI/UX hingga brand design, tingkatkan skill visual kamu.",
    duration: "6 Minggu",
    schedule: "Fleksibel",
    highlights: [
      "UI/UX Design fundamentals",
      "Figma & design tools",
      "Portfolio review",
      "Feedback langsung dari mentor",
    ],
    gradient: "from-pink-500/20 to-orange-500/20",
    iconBg: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    icon: Cpu,
    title: "Bootcamp AI",
    desc: "Pelajari AI dan Machine Learning dari teori sampai implementasi. Cocok untuk kamu yang ingin mendalami teknologi masa depan.",
    duration: "8 Minggu",
    schedule: "Senin & Rabu",
    highlights: [
      "Python & data science",
      "Machine Learning basics",
      "Proyek AI nyata",
      "Akses ke GPU cloud gratis",
    ],
    gradient: "from-green-500/20 to-teal-500/20",
    iconBg: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Users,
    title: "Proyek Sosial",
    desc: "Bergabung dalam tim untuk membangun solusi teknologi bagi masyarakat. Dari aplikasi pendidikan hingga platform kesehatan.",
    duration: "3 Bulan",
    schedule: "Ongoing",
    highlights: [
      "Tim lintas disiplin",
      "Mentoring dari praktisi",
      "Dampak sosial nyata",
      "Portofolio profesional",
    ],
    gradient: "from-amber-500/20 to-red-500/20",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

function OurPrograms() {
  const programsRef = useRef<HTMLDivElement>(null);
  const programsInView = useInView(programsRef, { once: true, amount: 0.1 });

  return (
    <section id="program" className="py-24 bg-secondary/20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={programsRef}
          initial="hidden"
          animate={programsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <motion.p variants={staggerItem} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Program Kami
          </motion.p>
          <motion.h2 variants={staggerItem} className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Pilih jalur karya yang tepat untukmu
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={programsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="mx-auto max-w-7xl space-y-8"
        >
        {PROGRAMS.map(({ icon: Icon, title, desc, duration, schedule, highlights, gradient, iconBg }, i) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
              },
            }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:border-primary/30"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`inline-grid h-14 w-14 place-items-center rounded-2xl ${iconBg} shrink-0`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60">
                          <Clock className="h-3.5 w-3.5" />
                          {duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60">
                          <Calendar className="h-3.5 w-3.5" />
                          {schedule}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70 md:text-base">
                    {desc}
                  </p>
                </div>

                {/* Right — highlights */}
                <div className="md:w-72 shrink-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                    Yang akan kamu dapat
                  </p>
                  <ul className="space-y-2">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="mt-5 rounded-full" variant={i === 0 ? "default" : "outline"}>
                    <a href="#kontak">
                      Daftar <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}

// --- Landing Page ---
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <OurPrograms />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
