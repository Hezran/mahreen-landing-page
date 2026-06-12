import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Eye,
  Target,
  Lightbulb,
  Users,
  Globe,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  staggerItem,
} from "@/hooks/use-scroll-animation";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Mahreen Indonesia" },
      {
        name: "description",
        content:
          "Kenali lebih dekat Mahreen Indonesia — gerakan anak muda untuk berdampak nyata melalui kreativitas dan teknologi.",
      },
    ],
  }),
  component: TentangPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Ketulusan",
    desc: "Setiap karya dibuat dengan niat tulus untuk membantu sesama dan membangun Indonesia yang lebih baik.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 to-transparent",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    desc: "Kami mendorong pemikiran kreatif dan solusi inovatif untuk tantangan nyata di masyarakat.",
    className: "md:col-span-1 md:row-span-1",
    iconBg: "bg-accent/20 text-accent",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    desc: "Bersama lebih kuat. Kami percaya kolaborasi lintas disiplin menghasilkan dampak yang lebih besar.",
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-t from-card to-background border-primary/20",
    iconBg: "bg-blue-500/20 text-blue-500",
  },
  {
    icon: Globe,
    title: "Inklusivitas",
    desc: "Terbuka untuk semua anak muda Indonesia tanpa memandang latar belakang.",
    className: "md:col-span-1 md:row-span-1",
    iconBg: "bg-purple-500/20 text-purple-500",
  },
];

const TEAM = [
  {
    name: "Ahmad Rizky",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Siti Nurhaliza",
    role: "Head of Programs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "Budi Santoso",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Maya Putri",
    role: "Head of Community",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];

function TentangPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  const visionRef = useRef<HTMLDivElement>(null);
  const visionInView = useInView(visionRef, { once: true, amount: 0.2 });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <Link to="/" className="group flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div variants={staggerItem} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Tentang Kami</span>
          </motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            Membangun masa depan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Indonesia bersama</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Mahreen Indonesia adalah gerakan anak muda yang percaya bahwa teknologi dan kreativitas dapat menjadi kekuatan untuk membangun Indonesia yang lebih baik. Didirikan pada tahun 2024, kami telah menghubungkan ribuan talenta dari seluruh penjuru nusantara.
          </motion.p>
        </motion.div>
      </section>

      {/* Visi & Misi */}
      <section className="relative py-24 border-y border-border/50 bg-secondary/20">
        <motion.div
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Visi Card */}
            <motion.div variants={staggerItem} className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-10 lg:p-12 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="font-display text-4xl font-bold mb-6">Visi Kami</h2>
                <p className="text-lg leading-relaxed text-foreground/70">
                  Menjadi ekosistem terdepan bagi anak muda Indonesia yang ingin berkarya, berinovasi, dan berdampak nyata bagi bangsa melalui teknologi dan kreativitas.
                </p>
              </div>
            </motion.div>

            {/* Misi Cards */}
            <motion.div variants={staggerItem} className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-display text-3xl font-bold">Misi Utama</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Menyediakan program edukasi teknologi yang aksesibel dan relevan.",
                  "Membangun komunitas yang inklusif dan suportif.",
                  "Mendorong terciptanya proyek berdampak sosial.",
                  "Menghubungkan anak muda dengan mentor dan industri."
                ].map((misi, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/50 p-6 transition-colors hover:bg-card">
                    <span className="font-display text-2xl font-bold text-primary/40">0{idx + 1}</span>
                    <p className="text-sm leading-relaxed text-foreground/80 mt-1">{misi}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values (Bento Grid) */}
      <section className="py-24 md:py-32">
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <motion.div variants={staggerItem} className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl font-bold md:text-5xl mb-4">
              Prinsip yang kami pegang
            </h2>
            <p className="text-lg text-foreground/60">
              Nilai-nilai inti yang menggerakkan setiap langkah dan keputusan kami dalam membangun ekosistem Mahreen Indonesia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[200px]">
            {VALUES.map(({ icon: Icon, title, desc, className, iconBg }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col justify-between ${className}`}
              >
                <div className={`mb-6 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/70 max-w-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="border-t border-border/50 bg-secondary/10 py-24 md:py-32">
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <motion.div variants={staggerItem} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold md:text-5xl mb-4">
              Orang-orang di balik layar
            </h2>
            <p className="text-lg text-foreground/60">
              Misi besar membutuhkan tim yang solid. Inilah mereka yang berdedikasi membangun Mahreen setiap harinya.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold md:text-6xl mb-6">
            Siap untuk mulai <span className="text-primary">berdampak?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Jangan tunggu nanti. Bergabunglah sekarang dengan ribuan anak muda lainnya dan ciptakan karya pertamamu bersama Mahreen Indonesia.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
            <Link to="/">
              Gabung Komunitas Kami <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
