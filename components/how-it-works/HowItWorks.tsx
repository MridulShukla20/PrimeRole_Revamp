import { HOW_IT_WORKS } from "./constants";
import WorkflowDiagram from "./WorkflowDiagram";
import { FadeInSection } from "@/components/motion/FadeInSection";

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-heading-xl lg:text-display-sm text-neutral-900 mb-4">
              {HOW_IT_WORKS.heading}
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              {HOW_IT_WORKS.description}
            </p>
          </div>

          {/* Workflow Diagram */}
          <WorkflowDiagram />
        </FadeInSection>
      </div>
    </section>
  );
}
