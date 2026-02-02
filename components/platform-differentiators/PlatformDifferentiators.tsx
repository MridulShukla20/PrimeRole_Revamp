import * as LucideIcons from "lucide-react";
import { PLATFORM_DIFFERENTIATORS } from "./constants";
import { FadeInSection } from "@/components/motion/FadeInSection";

export default function PlatformDifferentiators() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection className="max-w-3xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-heading-xl lg:text-display-sm text-neutral-900 mb-4">
              {PLATFORM_DIFFERENTIATORS.heading}
            </h2>
          </div>

          {/* Sequential List of Differentiators */}
          <div className="space-y-8 lg:space-y-10">
            {PLATFORM_DIFFERENTIATORS.items.map((item) => {
              const IconComponent =
                LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

              return (
                <div key={item.title} className="flex gap-4 lg:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-heading-sm lg:text-heading-md text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-md lg:text-body-lg text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
