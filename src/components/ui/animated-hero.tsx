import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Berkarya", "Berinovasi", "Berkolaborasi", "Berdampak", "Bergerak"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* background flourishes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Gerakan Anak Muda Indonesia
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
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
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-foreground/70 md:text-lg">
          Bergabunglah bersama ribuan anak muda Indonesia yang berdampak nyata
          melalui kreativitas dan teknologi. Saatnya kamu yang menentukan masa
          depan negeri.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
        </div>
      </div>
    </section>
  );
}

export { Hero };
