import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    );
}