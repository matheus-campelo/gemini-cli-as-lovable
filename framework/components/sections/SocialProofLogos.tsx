import AnimatedSection from "@/components/AnimatedSection";

interface Logo {
  src: string;
  alt: string;
}

interface SocialProofLogosProps {
  title: string;
  logos: Logo[];
}

export default function SocialProofLogos({ title, logos }: SocialProofLogosProps) {
  return (
    <div className="bg-muted/40">
      <div className="container py-12 md:py-16 text-center">
        <h3 className="text-lg font-semibold text-muted-foreground">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}