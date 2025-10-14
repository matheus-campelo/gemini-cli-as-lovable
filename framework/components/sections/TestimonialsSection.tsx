import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ title, testimonials }: TestimonialsProps) {
    return (
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
    );
}