import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const searchFields = [
  { label: "Location", placeholder: "Address, City Or Zip", className: "md:basis-[22%]" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days", className: "md:basis-[18%]" },
  { label: "Budget", placeholder: "$0-$3000", className: "md:basis-[21%]" },
  { label: "People", placeholder: "5-10", className: "md:basis-[21%]" },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[520px] flex-1 flex-col sm:min-h-[600px]">
      <Image
        src="/image/Banner.png"
        alt="Coastal bay with turquoise water and hillside village"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-16 text-center text-white sm:py-20">
        <h1 className="max-w-3xl text-balance font-heading text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed md:text-base">
          Explore breathtaking destinations and create unforgettable memories with our curated
          travel experiences.
        </p>
        <div className="mt-9 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/#destinations"
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded bg-brand px-6 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-brand/85 sm:w-auto"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/#destinations"
            className="inline-flex h-10 w-full items-center justify-center rounded bg-white/35 px-6 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-[2px] transition-colors hover:bg-white/50 sm:w-auto"
          >
            View Destination
          </Link>
        </div>
      </div>
      <form className="relative flex flex-col divide-y divide-border bg-white/90 md:flex-row md:divide-x">
        {searchFields.map((field) => (
          <div key={field.label} className={`px-4 py-2.5 sm:px-5 md:flex-none ${field.className}`}>
            <label className="block text-sm font-semibold text-foreground">{field.label}</label>
            <input
              placeholder={field.placeholder}
              className="mt-0.5 block w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-brand px-10 py-3 text-base font-semibold text-white transition-colors hover:bg-brand/85 md:self-stretch"
        >
          Search
        </button>
      </form>
    </section>
  );
}
