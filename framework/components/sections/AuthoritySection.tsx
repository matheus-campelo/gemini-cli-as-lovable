interface Badge {
  src: string;
  alt: string;
  href: string;
}

interface AuthoritySectionProps {
  title: string;
  badges: Badge[];
}

export default function AuthoritySection({ title, badges }: AuthoritySectionProps) {
  return (
    <div className="bg-muted/40">
      <div className="container py-12 md:py-16 text-center">
        <h3 className="text-lg font-semibold text-muted-foreground">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
          {badges.map((badge, index) => (
            <a key={index} href={badge.href} target="_blank" rel="noreferrer">
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}