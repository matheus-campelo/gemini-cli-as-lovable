import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection"; // Reutilizando o wrapper

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  // Novo prop para o elemento visual
  visualElement?: React.ReactNode; 
}

export default function HeroSection({ title, description, primaryCta, secondaryCta, visualElement }: HeroProps) {
  return (
    <AnimatedSection>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
        {/* Coluna de Texto */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl py-6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <a href={primaryCta.href}>
              <Button size="lg">{primaryCta.text}</Button>
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button size="lg" variant="outline">{secondaryCta.text}</Button>
              </a>
            )}
          </div>
        </div>
        
        {/* Coluna Visual (Direita) */}
        {visualElement && (
          <div className="flex items-center justify-center">
            {visualElement}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}