import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { Sparkles, ArrowRight, X, Menu, Code2, Users, Rocket, UserPlus, GraduationCap, Zap, Quote } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toaster as Toaster$1, toast } from "sonner";
import { motion } from "framer-motion";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Berkarya", "Berinovasi", "Berkolaborasi", "Berdampak", "Bergerak"],
    []
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => n === titles.length - 1 ? 0 : n + 1);
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "beranda",
      className: "relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
            "Gerakan Anak Muda Indonesia"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex w-full justify-center overflow-hidden pb-3 text-center md:pb-5", children: [
              " ",
              titles.map((title, index) => /* @__PURE__ */ jsx(
                motion.span,
                {
                  className: "absolute font-display font-bold text-primary",
                  initial: { opacity: 0, y: "-100" },
                  transition: { type: "spring", stiffness: 50 },
                  animate: titleNumber === index ? { y: 0, opacity: 1 } : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0
                  },
                  children: title
                },
                index
              ))
            ] }),
            /* @__PURE__ */ jsx("span", { className: "block", children: "Untuk Indonesia" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-2xl text-base text-foreground/70 md:text-lg", children: "Bergabunglah bersama ribuan anak muda Indonesia yang berdampak nyata melalui kreativitas dan teknologi. Saatnya kamu yang menentukan masa depan negeri." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "rounded-full h-12 px-7 text-base", children: /* @__PURE__ */ jsxs("a", { href: "#kontak", children: [
              "Mulai Berkarya ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                variant: "outline",
                className: "rounded-full h-12 px-7 text-base",
                children: /* @__PURE__ */ jsx("a", { href: "#program", children: "Lihat Program" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const NAV_LINKS = [{
  label: "Beranda",
  href: "#beranda"
}, {
  label: "Tentang",
  href: "#tentang"
}, {
  label: "Program",
  href: "#program"
}, {
  label: "Kontak",
  href: "#kontak"
}];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-lg" : "bg-transparent"}`, children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "#beranda", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold", children: "M" }),
        /* @__PURE__ */ jsxs("span", { className: "font-display text-lg font-bold tracking-tight", children: [
          "Mahreen",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: ".id" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-8 md:flex", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "text-sm font-medium text-foreground/70 transition-colors hover:text-primary", children: l.label }) }, l.href)) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#kontak", children: "Gabung Sekarang" }) }) }),
      /* @__PURE__ */ jsx("button", { "aria-label": "Toggle menu", onClick: () => setOpen((v) => !v), className: "grid h-10 w-10 place-items-center rounded-md md:hidden", children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border bg-background md:hidden", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1 px-6 py-4", children: [
      NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary", children: l.label }) }, l.href)),
      /* @__PURE__ */ jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#kontak", onClick: () => setOpen(false), children: "Gabung Sekarang" }) }) })
    ] }) })
  ] });
}
const BENEFITS = [{
  icon: Code2,
  title: "Belajar Teknologi",
  desc: "Akses kurikulum modern dari coding, AI, hingga design — dibimbing langsung oleh praktisi industri."
}, {
  icon: Users,
  title: "Jaringan Luas",
  desc: "Terhubung dengan komunitas Gen Z & Millennial dari Sabang sampai Merauke yang punya visi sama."
}, {
  icon: Rocket,
  title: "Dampak Nyata",
  desc: "Wujudkan ide jadi karya nyata. Setiap proyek dirancang untuk berkontribusi langsung bagi Indonesia."
}];
function WhyJoin() {
  return /* @__PURE__ */ jsx("section", { id: "tentang", className: "border-t border-border bg-secondary/40 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Kenapa Mahreen" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Tempat anak muda tumbuh & berkarya" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: BENEFITS.map(({
      icon: Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-foreground/70", children: desc })
    ] }, title)) })
  ] }) });
}
const STEPS = [{
  icon: UserPlus,
  title: "Daftar",
  desc: "Isi formulir singkat dan jadi bagian dari komunitas Mahreen Indonesia."
}, {
  icon: GraduationCap,
  title: "Belajar",
  desc: "Ikut workshop, mentorship, dan kelas teknologi yang relevan dengan minatmu."
}, {
  icon: Zap,
  title: "Berkarya",
  desc: "Wujudkan karya nyatamu — dari proyek sosial hingga produk teknologi untuk negeri."
}];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "program", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary", children: "Perjalananmu" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Tiga langkah untuk mulai berkarya" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-16 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" }),
      STEPS.map(({
        icon: Icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background shadow-sm", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary", children: [
          "Langkah ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl font-bold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-xs text-sm leading-relaxed text-foreground/70", children: desc })
      ] }, title))
    ] })
  ] }) });
}
const STATS = [{
  value: "1.000+",
  label: "Anggota Aktif"
}, {
  value: "50+",
  label: "Proyek Berdampak"
}, {
  value: "30+",
  label: "Mentor Praktisi"
}, {
  value: "20+",
  label: "Kota di Indonesia"
}];
const TESTIMONIALS = [{
  quote: "Mahreen kasih aku ruang buat belajar sambil bikin sesuatu yang berarti. Sekarang aku punya circle teman yang sama-sama mau berdampak.",
  name: "Aisyah Putri",
  role: "Mahasiswa, Bandung"
}, {
  quote: "Dari ikut workshop sampai bikin produk nyata bareng tim — pengalaman di Mahreen ngubah cara aku ngeliat teknologi dan masa depan Indonesia.",
  name: "Reza Mahendra",
  role: "Developer Muda, Surabaya"
}];
function SocialProof() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-ink text-ink-foreground py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-4xl font-bold text-accent md:text-5xl", children: s.value }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-ink-foreground/70", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur", children: [
      /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-accent" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-base leading-relaxed text-ink-foreground/90 md:text-lg", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground", children: t.name.charAt(0) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-ink-foreground/60", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
function CTA() {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Masukkan email kamu dulu, ya!");
      return;
    }
    toast.success("Terima kasih! Kami akan segera menghubungi kamu.");
    setEmail("");
  };
  return /* @__PURE__ */ jsxs("section", { id: "kontak", className: "relative overflow-hidden py-24 md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl font-bold leading-tight md:text-6xl", children: [
        "Jangan lewatkan",
        /* @__PURE__ */ jsx("br", {}),
        "kesempatan untuk",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "berkarya nyata" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-foreground/70 md:text-lg", children: "Daftarkan emailmu sekarang dan jadi bagian dari generasi yang membangun Indonesia." }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Input, { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Alamat Email Kamu", className: "h-12 flex-1 rounded-full border-border bg-background px-5 text-base shadow-sm" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "h-12 rounded-full px-7 text-base", children: "Mulai Berkarya" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-display font-bold", children: "M" }),
      /* @__PURE__ */ jsx("span", { className: "font-display text-sm font-bold", children: "Mahreen Indonesia" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-foreground/60", children: "© 2026 Mahreen Indonesia. Berkarya Untuk Indonesia." })
  ] }) });
}
function LandingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(WhyJoin, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(SocialProof, {}),
      /* @__PURE__ */ jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
export {
  LandingPage as component
};
