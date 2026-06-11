import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Heart,
  Eye,
  Target,
  Lightbulb,
  Users,
  Globe,
  ArrowLeft,
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
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    desc: "Kami mendorong pemikiran kreatif dan solusi inovatif untuk tantangan nyata yang dihadapi masyarakat.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    desc: "Bersama lebih kuat. Kami percaya kolaborasi lintas disiplin menghasilkan dampak yang lebih besar.",
  },
  {
    icon: Globe,
    title: "Inklusivitas",
    desc: "Terbuka untuk semua anak muda Indonesia tanpa memandang latar belakang, jurusan, atau pengalaman.",
  },
];

const TEAM = [
  {
    name: "Ahmad Rizky",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    name: "Siti Nurhaliza",
    role: "Head of Programs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    name: "Budi Santoso",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Maya Putri",
    role: "Head of Community",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p variants={staggerItem} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Tentang Kami
          </motion.p>
          <motion.h1 variants={staggerItem} className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">
            Membangun masa depan Indonesia bersama
          </motion.h1>
          <motion.p variants={staggerItem} className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 md:text-lg leading-relaxed">
            Mahreen Indonesia adalah gerakan anak muda yang percaya bahwa teknologi dan kreativitas dapat menjadi kekuatan untuk membangun Indonesia yang lebih baik. Didirikan pada tahun 2024, kami telah menghubungkan ribuan anak muda dari seluruh penjuru nusantara.
          </motion.p>
        </motion.div>
      </section>

      {/* Visi & Misi */}
      <section className="border-t border-border bg-secondary/40 py-24">
        <motion.div
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div variants={staggerItem} className="rounded-2xl border border-border bg-card p-10">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">Visi</h2>
              <p className="text-base leading-relaxed text-foreground/70">
                Menjadi ekosistem terdepan bagi anak muda Indonesia yang ingin berkarya, berinovasi, dan berdampak nyata bagi bangsa melalui teknologi dan kreativitas.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-2xl border border-border bg-card p-10">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">Misi</h2>
              <ul className="space-y-3 text-base leading-relaxed text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">01.</span>
                  Menyediakan program edukasi teknologi yang aksesibel dan relevan.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">02.</span>
                  Membangun komunitas yang inklusif dan suportif.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">03.</span>
                  Mendorong terciptanya proyek berdampak sosial.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">04.</span>
                  Menghubungkan anak muda dengan mentor dan industri.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-24">
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <motion.div variants={staggerItem} className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nilai Kami</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Prinsip yang kami pegang
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-secondary/40 py-24">
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-6"
        >
          <motion.div variants={staggerItem} className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Tim Kami</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Orang-orang di balik Mahreen
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
                  loading="lazy"
                />
                <h3 className="font-display text-base font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-foreground/60">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Siap bergabung?
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Jadilah bagian dari generasi yang membangun Indonesia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
              <Link to="/">Gabung Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
