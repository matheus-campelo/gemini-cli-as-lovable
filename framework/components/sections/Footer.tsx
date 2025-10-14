import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ReactNode; // Ex: <Github className="h-5 w-5" />
  href: string;
}

interface FooterProps {
    logoSrc: string;
    description: string;
    socialLinks: SocialLink[];
}

export default function Footer({ logoSrc, description, socialLinks }: FooterProps) {
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logoSrc} alt="Logo" className="h-6 w-auto mb-2" />
          <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">{link.icon}</Button>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t">
          <p className="container py-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Seu Nome/Empresa. Todos os direitos reservados.
          </p>
      </div>
    </footer>
  );
}