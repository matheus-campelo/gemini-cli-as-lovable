import { Button } from "@/components/ui/button";

interface CtaProps {
    title: string;
    description: string;
    ctaButton: { text: string; href: string };
}

export default function CtaSection({ title, description, ctaButton }: CtaProps) {
    return (
        <div className="bg-muted/40">
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
        </div>
    );
}