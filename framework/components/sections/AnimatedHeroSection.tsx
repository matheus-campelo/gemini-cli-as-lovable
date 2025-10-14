import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CtaButton {
  text: string;
  href: string;
  icon: React.ReactNode;
}

interface AnimatedHeroProps {
  announcementCta?: CtaButton;
  titlePrefix: string;
  animatedWords: string[];
  description: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}

export default function AnimatedHeroSection({
  announcementCta,
  titlePrefix,
  animatedWords,
  description,
  primaryCta,
  secondaryCta,
}: AnimatedHeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [wordIndex, animatedWords]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 py-20 text-center lg:py-40">
        {announcementCta && (
          <div>
            <a href={announcementCta.href}>
              <Button variant="secondary" size="sm" className="gap-2">
                {announcementCta.text} {announcementCta.icon}
              </Button>
            </a>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-regular tracking-tighter md:text-7xl max-w-2xl">
            {titlePrefix}{" "}
            <span className="relative inline-flex overflow-hidden">
              {animatedWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 font-semibold"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    wordIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: "-100%" }
                  }
                  transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
               <span className="font-semibold invisible">{animatedWords[0]}</span> {/* Hidden element for layout spacing */}
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <a href={secondaryCta.href}>
              <Button size="lg" className="gap-2" variant="outline">
              {secondaryCta.text} {secondaryCta.icon}
              </Button>
          </a>
          <a href={primaryCta.href}>
              <Button size="lg" className="gap-2">
              {primaryCta.text} {primaryCta.icon}
              </Button>
          </a>
        </div>
      </div>
    </div>
  );
}