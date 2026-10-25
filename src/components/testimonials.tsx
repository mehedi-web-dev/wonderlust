"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    photo: "/image/person1.png",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    photo: "/image/person2.png",
  },
  {
    quote:
      "The Amalfi Coast Tour Was Flawless. Our Local Guide Made History Come Alive And Every Stop Felt Personal And Authentic. Worth Every Penny!",
    name: "Emma Davis",
    location: "London, UK",
    photo: "/image/person1.png",
  },
  {
    quote:
      "Our Maldives Honeymoon Was A Dream. Private Transfers And Overwater Bungalows Were Handled Perfectly. We Cannot Wait To Book Again!",
    name: "James Miller",
    location: "Toronto, Canada",
    photo: "/image/person2.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="items-stretch"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <CarouselPrevious
                size="icon"
                className="static size-10 border-border text-muted-foreground hover:text-foreground md:size-11"
              />
              <CarouselNext
                size="icon"
                className="static size-10 border-border text-muted-foreground hover:text-foreground md:size-11"
              />
            </div>
          </div>
          <CarouselContent className="mt-12 pb-1">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <figure className="flex h-full border border-border bg-white">
                  <blockquote className="flex flex-1 flex-col justify-between p-5 md:p-6">
                    <p className="text-[15px] leading-snug font-medium">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <figcaption className="mt-6 flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-0.5 block h-0.5 w-4 bg-brand"
                      />
                      <span>
                        <span className="block text-sm text-brand">
                          {testimonial.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {testimonial.location}
                        </span>
                      </span>
                    </figcaption>
                  </blockquote>
                  <Image
                    src={testimonial.photo}
                    alt={`Portrait of ${testimonial.name}`}
                    width={218}
                    height={264}
                    className="h-auto w-[38%] shrink-0 self-stretch object-cover"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
