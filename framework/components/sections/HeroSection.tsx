import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export default function HeroSection({ title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <div className="container px-4 md:px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl py-4">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <a href={primaryCta.href}><Button>{primaryCta.text}</Button></a>
        {secondaryCta && <a href={secondaryCta.href}><Button variant="outline">{secondaryCta.text}</Button></a>}
      </div>
    </div>
  );
}