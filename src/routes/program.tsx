import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Users,
  Cpu,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  staggerItem,
} from "@/hooks/use-scroll-animation";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program — Mahreen Indonesia" },
      {
        name: "description",
        content:
          "Jelajahi program-program Mahreen Indonesia: workshop, mentorship, bootcamp, dan proyek sosial.",
      },
    ],
  }),
  component: ProgramPage,
});

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

function ProgramPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  const programsRef = useRef<HTMLDivElement>(null);
  const programsInView = useInView(programsRef, { once: true, amount: 0.1 });

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
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p variants={staggerItem} className="text-sm font-semibold uppercase tracking-widest text-primary">
            Program Kami
          </motion.p>
          <motion.h1 variants={staggerItem} className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">
            Belajar, berkembang, <span className="text-primary">berdampak</span>
          </motion.h1>
          <motion.p variants={staggerItem} className="mx-auto mt-6 max-w-2xl text-base text-foreground/70 md:text-lg leading-relaxed">
            Pilih program yang sesuai dengan minat dan tujuanmu. Setiap program dirancang untuk memberikan skill nyata dan pengalaman berharga.
          </motion.p>
        </motion.div>
      </section>

      {/* Programs */}
      <section className="pb-24">
        <motion.div
          ref={programsRef}
          initial="hidden"
          animate={programsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="mx-auto max-w-7xl px-6 space-y-8"
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
                      <a href="/#kontak">
                        Daftar <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-ink text-ink-foreground py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Belum yakin?
          </h2>
          <p className="mt-4 text-base text-ink-foreground/70">
            Hubungi kami untuk konsultasi gratis tentang program mana yang paling cocok untukmu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
              <a href="/#kontak">Hubungi Kami</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-base border-white/20 text-ink-foreground hover:bg-white/10">
              <Link to="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
