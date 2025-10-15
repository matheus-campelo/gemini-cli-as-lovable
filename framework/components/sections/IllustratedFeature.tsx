import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface IllustratedFeature {
  graphic: React.ReactNode; // Pode ser um SVG ou <img />
  title: string;
  description: string;
}

interface IllustratedFeaturesProps {
  features: IllustratedFeature[];
}

// Este componente pode ser usado para seções de "Como Funciona" ou "Nossos Valores"
export default function IllustratedFeatures({ features }: IllustratedFeaturesProps) {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-6 h-40 w-40 flex items-center justify-center">
              {feature.graphic}
            </div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}