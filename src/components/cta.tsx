import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden px-4 py-20 text-center text-white md:py-24">
      <Image
        src="/image/CTA.png"
        alt="Aerial view of a plane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative">
        <h2 className="text-balance font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-pretty text-sm md:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#book"
          className="group mt-9 inline-flex h-11 items-center gap-2 rounded-md bg-white px-7 text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Book Your Trip Today
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
