import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  description: string;
  features: Feature[];
}

// Variantes para a animação do container (escalonamento dos filhos)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Atraso entre cada card
    },
  },
};

// Variantes para a animação de cada card
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function FeaturesSection({ title, description, features }: FeaturesProps) {
  return (
    // O AnimatedSection já existente pode ser usado aqui para o trigger de visualização
    <div className="container py-12 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-2">{description}</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Anima quando entra na viewport
        viewport={{ once: true, amount: 0.2 }} // Configuração do trigger
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }} // Efeito "magnético" e de elevação
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full">
              <CardHeader>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}