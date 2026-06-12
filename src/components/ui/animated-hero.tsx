import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Lightbulb,
  Users,
  Globe,
  MapPin,
  Rocket,
  Code2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const PARTNERS = [
  "Universitas Indonesia",
  "ITB",
  "UGM",
  "ITS",
  "Telkom University",
  "Binus",
];

const PROFILE_STATS = [
  { value: "1,000+", label: "Anggota Aktif", icon: Users },
  { value: "50+", label: "Proyek Berdampak", icon: Rocket },
  { value: "30+", label: "Mentor Praktisi", icon: GraduationCap },
  { value: "20+", label: "Kota di Indonesia", icon: MapPin },
];

const PROFILE_VALUES = [
  { icon: Heart, label: "Ketulusan", color: "from-rose-500 to-pink-600" },
  { icon: Lightbulb, label: "Inovasi", color: "from-amber-500 to-orange-600" },
  { icon: Users, label: "Kolaborasi", color: "from-blue-500 to-indigo-600" },
  { icon: Globe, label: "Inklusivitas", color: "from-emerald-500 to-teal-600" },
];



const PROFILE_PROGRAMS = [
  { icon: Code2, label: "Workshop Coding" },
  { icon: Lightbulb, label: "Mentorship Design" },
  { icon: GraduationCap, label: "Bootcamp AI" },
  { icon: Rocket, label: "Proyek Sosial" },
];

/* ---- Mahreen Profile Dashboard (inside the scroll card) ---- */
function MahreenProfileDashboard() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-4 md:p-8 overflow-hidden relative">
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      {/* ===== Top Header ===== */}
      <div className="relative flex items-center justify-between mb-5 md:mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-primary to-red-700 flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shadow-primary/30">
            M
          </div>
          <div>
            <h2 className="font-bold text-base md:text-lg tracking-tight">
              Mahreen<span className="text-primary">.id</span>
            </h2>
            <p className="text-[10px] md:text-xs text-white/50">Berkarya Untuk Indonesia</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] md:text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active Community
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-white/10 text-white/60 px-2.5 py-1 rounded-full">
            Est. 2024
          </span>
        </div>
      </div>

      {/* ===== Stats Row ===== */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 mb-5 md:mb-6">
        {PROFILE_STATS.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl bg-white/5 border border-white/10 p-2.5 md:p-4 text-center backdrop-blur-sm hover:bg-white/8 transition-colors"
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary mx-auto mb-1.5" />
            <div className="text-sm md:text-xl font-bold tracking-tight">{value}</div>
            <div className="text-[8px] md:text-[10px] text-white/40 font-medium mt-0.5 leading-tight">{label}</div>
          </div>
        ))}
      </div>

      {/* ===== Main Content Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        {/* Visi Card - Left */}
        <div className="md:col-span-7 rounded-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/10 p-4 md:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="h-6 w-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary">Visi Kami</span>
          </div>
          <p className="text-xs md:text-sm leading-relaxed text-white/70">
            Menjadi ekosistem terdepan bagi anak muda Indonesia yang ingin berkarya, berinovasi, dan berdampak nyata bagi bangsa melalui <span className="text-white font-medium">teknologi dan kreativitas</span>.
          </p>

          {/* Core Values Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {PROFILE_VALUES.map(({ icon: Icon, label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-medium bg-white/8 text-white/70 px-2 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className={`h-3.5 w-3.5 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
                  <Icon className="h-2 w-2 text-white" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Programs Card - Right */}
        <div className="md:col-span-5 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 p-4 md:p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <Code2 className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-primary">Program</span>
          </div>
          <div className="space-y-2">
            {PROFILE_PROGRAMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/8 px-3 py-2 hover:bg-white/8 transition-colors">
                <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="text-[10px] md:text-xs font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Berkarya", "Berinovasi", "Berkolaborasi", "Berdampak", "Bergerak"],
    [],
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  const partnersRef = useRef<HTMLDivElement>(null);
  const partnersInView = useInView(partnersRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden"
    >
      {/* background flourishes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <ContainerScroll
        titleComponent={
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Gerakan Anak Muda Indonesia
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl text-foreground">
              <span className="relative flex w-full justify-center overflow-hidden pb-3 text-center md:pb-5">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-display font-bold text-primary"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block">Untuk Indonesia</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl text-base text-foreground/70 md:text-lg">
              Jangan hanya menjadi penonton perubahan. Mari ambil bagian dan bergerak bersama komunitas anak muda di Mahreen Indonesia. Saatnya manfaatkan keahlian digital dan kreativitasmu untuk membangun ekosistem teknologi yang solutif bagi bangsa.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-5 mb-12 md:mb-16 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
                <a href="#kontak">
                  Mulai Berkarya <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 text-base"
              >
                <a href="#program">Lihat Program</a>
              </Button>
            </motion.div>
          </motion.div>
        }
      >
        <MahreenProfileDashboard />
      </ContainerScroll>

      {/* Trusted By */}
      <motion.div
        ref={partnersRef}
        initial={{ opacity: 0, y: 20 }}
        animate={partnersInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto max-w-4xl px-6 pb-16"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Dipercaya oleh mahasiswa dari
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-foreground/40 transition-colors hover:text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export { Hero };
