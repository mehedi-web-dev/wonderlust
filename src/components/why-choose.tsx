import { Headset, Map, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer services to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-brand-soft py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-4xl md:text-5xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 md:p-7">
              <feature.icon aria-hidden className="size-8 text-brand" />
              <h3 className="mt-6 font-heading text-2xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
