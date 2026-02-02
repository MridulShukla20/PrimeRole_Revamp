import { WHY_PRIMEROLE } from "./constants";
import { FadeInSection } from "@/components/motion/FadeInSection";

export default function WhyPrimeRole() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection className="max-w-3xl mx-auto text-center">
          {/* Lead Statement */}
          <h2 className="text-heading-xl lg:text-display-sm text-neutral-900 mb-8 lg:mb-12">
            {WHY_PRIMEROLE.leadStatement}
          </h2>

          {/* Supporting Points */}
          <ul className="space-y-4 text-left">
            {WHY_PRIMEROLE.supportingPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-body-lg text-neutral-600"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
