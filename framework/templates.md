# Prompt para Geração do Arquivo `templates.md`

**Objetivo:** Gerar um arquivo Markdown chamado `templates.md`. Este arquivo servirá como uma biblioteca de componentes e padrões de código para o "Gemini CLI", otimizando a criação de landing pages de alta qualidade. Os templates devem ser baseados nos padrões de excelência identificados nos repositórios de referência, utilizando a stack (Vite, React, TS, Tailwind, shadcn/ui, Framer Motion).

**Instruções Gerais:**
1.  O arquivo deve ser estruturado em seções claras: "Estrutura e Layout", "Seções de Página (Organismos)", "Componentes Avançados (Moléculas)" e "Hooks e Utilitários".
2.  Para cada template, forneça uma descrição detalhada, a estrutura do código em `React/TSX`, e as props essenciais para sua personalização.
3.  O código deve ser limpo, seguir as melhores práticas de mobile-first, e incluir animações sutis com `framer-motion`.
4.  As props devem ser bem definidas com tipos TypeScript para garantir a segurança e clareza.
5.  Sempre que um componente de `shadcn/ui` for utilizado (ex: `Button`, `Card`), indique-o claramente no código.

---

## ESTRUTURA E LAYOUT

### 1. Template: `Layout Principal (App.tsx)`

* **Descrição:** A estrutura raiz da aplicação. Responsável por prover o layout geral (Header, main, Footer) e encapsular a aplicação com provedores globais, como o `TooltipProvider` da `shadcn/ui`.
* **Estrutura de Código:**
    ```tsx
    import { TooltipProvider } from '@/components/ui/tooltip';
    import Header from '@/components/sections/Header';
    import Footer from '@/components/sections/Footer';
    import HomePage from '@/pages/HomePage'; // Página principal a ser renderizada

    function App() {
      return (
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <HomePage />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      );
    }

    export default App;
    ```

### 2. Template: `Header (Navbar)`

* **Descrição:** Um cabeçalho responsivo e fixo. Contém o logo da empresa, links de navegação para desktop e um menu "hambúrguer" que aciona um `Sheet` (menu lateral) em dispositivos móveis.
* **Props:**
    * `logoSrc: string` - Caminho para a imagem do logo.
    * `navLinks: { href: string; label: string }[]` - Array de objetos para os links de navegação.
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/Header.tsx
    import { Button } from "@/components/ui/button";
    import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
    import { Menu } from "lucide-react";

    interface NavLink {
      href: string;
      label: string;
    }

    interface HeaderProps {
      logoSrc: string;
      navLinks: NavLink[];
    }

    export default function Header({ logoSrc, navLinks }: HeaderProps) {
      return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <img src={logoSrc} alt="Logo" className="h-6 w-auto" />
            </a>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className="text-lg font-medium">
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      );
    }
    ```

---

## SEÇÕES DE PÁGINA (ORGANISMOS)

### 1. Template: `Hero Section`

* **Descrição:** A primeira seção de impacto da página. Deve conter um título forte (H1), um parágrafo de suporte e um botão de CTA principal. Opcionalmente, pode ter um CTA secundário e uma imagem ou vídeo de fundo.
* **Props:**
    * `title: string`
    * `description: string`
    * `primaryCta: { text: string; href: string }`
    * `secondaryCta?: { text: string; href: string }`
    * `backgroundImageUrl?: string`
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/HeroSection.tsx
    import { Button } from "@/components/ui/button";
    import AnimatedSection from "@/components/AnimatedSection";

    interface HeroProps {
      title: string;
      description: string;
      primaryCta: { text: string; href: string };
      secondaryCta?: { text: string; href: string };
    }

    export default function HeroSection({ title, description, primaryCta, secondaryCta }: HeroProps) {
      return (
        <AnimatedSection>
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
        </AnimatedSection>
      );
    }
    ```

### 2. Template: `Features Section`

* **Descrição:** Seção que destaca os principais benefícios ou funcionalidades do produto/serviço. Usa um layout de grid que é responsivo. Cada feature é apresentada em um `Card`.
* **Props:**
    * `title: string`
    * `description: string`
    * `features: { icon: React.ReactNode; title: string; description: string }[]`
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/FeaturesSection.tsx
    import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
    import AnimatedSection from "@/components/AnimatedSection";

    interface Feature {
      icon: React.ReactNode; // Ex: <Shield className="h-8 w-8" />
      title: string;
      description: string;
    }

    interface FeaturesProps {
      title: string;
      description: string;
      features: Feature[];
    }
    
    export default function FeaturesSection({ title, description, features }: FeaturesProps) {
        return (
            <AnimatedSection>
                <div className="container py-12 md:py-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-2">{description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {features.map((feature, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    {feature.icon}
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        );
    }
    ```

### 3. Template: `Testimonials Section`

* **Descrição:** Exibe prova social através de depoimentos de clientes. Utiliza um `Carousel` para navegar entre os depoimentos.
* **Props:**
    * `title: string`
    * `testimonials: { quote: string; name: string; role: string; avatarUrl: string }[]`
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/TestimonialsSection.tsx
    import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
    import { Card, CardContent } from "@/components/ui/card";
    import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
    import AnimatedSection from "@/components/AnimatedSection";

    // ... (interfaces)

    export default function TestimonialsSection({ title, testimonials }: TestimonialsProps) {
        return (
            <AnimatedSection>
                <div className="container py-12 md:py-24">
                    <h2 className="text-3xl font-bold text-center">{title}</h2>
                    <Carousel className="w-full max-w-4xl mx-auto mt-8">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                  <Card className="h-full">
                                    <CardContent className="p-6 flex flex-col justify-between h-full">
                                      <blockquote className="text-muted-foreground">
                                        "{testimonial.quote}"
                                      </blockquote>
                                      <div className="flex items-center gap-4 mt-6">
                                        <Avatar>
                                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <p className="font-semibold">{testimonial.name}</p>
                                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </AnimatedSection>
        );
    }
    ```

### 4. Template: `Footer Section`
* **Descrição:** Um rodapé para a página. Contém o logo, uma breve descrição, links para redes sociais e colunas de links úteis.
* **Props:**
    * `logoSrc: string`
    * `description: string`
    * `socialLinks: { icon: React.ReactNode; href: string }[]`
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/Footer.tsx
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
    ```

### 5. Template: `Call to Action (CTA) Section`
* **Descrição:** Uma seção simples e direta para incentivar o usuário a tomar uma ação final.
* **Props:**
    * `title: string`
    * `description: string`
    * `ctaButton: { text: string; href: string }`
* **Estrutura de Código:**
    ```tsx
    // src/components/sections/CtaSection.tsx
    import { Button } from "@/components/ui/button";
    import AnimatedSection from "@/components/AnimatedSection";

    interface CtaProps {
        title: string;
        description: string;
        ctaButton: { text: string; href: string };
    }

    export default function CtaSection({ title, description, ctaButton }: CtaProps) {
        return (
            <AnimatedSection className="bg-muted/40">
                <div className="container py-12 md:py-24 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg mt-2">
                        {description}
                    </p>
                    <div className="mt-6">
                        <a href={ctaButton.href}>
                            <Button size="lg">{ctaButton.text}</Button>
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        );
    }
    ```

---

## HOOKS E UTILITÁRIOS

### 1. Template: `AnimatedSection Wrapper`

* **Descrição:** Um componente wrapper que utiliza `framer-motion` e o hook `useInView` para aplicar animações de fade-in e slide-up a qualquer seção filho quando ela se torna visível na tela.
* **Estrutura de Código:**
    ```tsx
    // src/components/AnimatedSection.tsx
    import { motion, useInView } from "framer-motion";
    import { useRef } from "react";

    interface Props {
      children: React.ReactNode;
      className?: string;
    }

    export default function AnimatedSection({ children, className }: Props) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true, amount: 0.2 });

      const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

      return (
        <motion.section
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </motion.section>
      );
    }
    ```