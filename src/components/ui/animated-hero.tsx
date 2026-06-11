import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const BENTO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    alt: "Tim berkolaborasi",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    alt: "Workshop coding",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    alt: "Presentasi proyek",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
    alt: "Diskusi kelompok",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80",
    alt: "Brainstorming",
    className: "col-span-1 row-span-1",
  },
];

const PARTNERS = [
  "Universitas Indonesia",
  "ITB",
  "UGM",
  "ITS",
  "Telkom University",
  "Binus",
];

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Berkarya", "Berinovasi", "Berkolaborasi", "Berdampak", "Bergerak"],
    [],
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  const bentoRef = useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* background flourishes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <motion.div
        ref={heroRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Gerakan Anak Muda Indonesia
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="relative flex w-full justify-center overflow-hidden pb-3 text-center md:pb-5">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-display font-bold text-primary"
                initial={{ opacity: 0, y: "-100" }}
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

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

      {/* Bento Grid */}
      <motion.div
        ref={bentoRef}
        initial="hidden"
        animate={bentoInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        className="mx-auto mt-16 max-w-5xl px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[140px] md:auto-rows-[160px]">
          {BENTO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
                },
              }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trusted By */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={bentoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mt-14 max-w-4xl px-6"
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
