import { HOW_IT_WORKS } from "./constants";

export default function WorkflowDiagram() {
  const steps = HOW_IT_WORKS.steps;

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Desktop Layout: 2x2 Grid with Arrows */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-16 relative">
        {/* Step 1: Top Left */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-heading-md text-primary">
              {steps[0].stepNumber}
            </span>
          </div>
          <h3 className="text-heading-sm text-neutral-900">
            {steps[0].label}
          </h3>
        </div>

        {/* Step 2: Top Right */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-heading-md text-primary">
              {steps[1].stepNumber}
            </span>
          </div>
          <h3 className="text-heading-sm text-neutral-900">
            {steps[1].label}
          </h3>
        </div>

        {/* Step 4: Bottom Left */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-heading-md text-primary">
              {steps[3].stepNumber}
            </span>
          </div>
          <h3 className="text-heading-sm text-neutral-900">
            {steps[3].label}
          </h3>
        </div>

        {/* Step 3: Bottom Right */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-heading-md text-primary">
              {steps[2].stepNumber}
            </span>
          </div>
          <h3 className="text-heading-sm text-neutral-900">
            {steps[2].label}
          </h3>
        </div>

        {/* Arrows - Desktop */}
        {/* Arrow 1 to 2 (horizontal, top) */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16">
          <div className="h-0.5 bg-neutral-300 relative">
            <div className="absolute -right-1.5 -top-1 w-3 h-3 border-r-2 border-t-2 border-neutral-300 rotate-45" />
          </div>
        </div>

        {/* Arrow 2 to 3 (vertical, right) */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 h-8">
          <div className="w-0.5 bg-neutral-300 h-full relative">
            <div className="absolute -bottom-1.5 -left-1 w-3 h-3 border-l-2 border-b-2 border-neutral-300 rotate-45" />
          </div>
        </div>

        {/* Arrow 3 to 4 (horizontal, bottom) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16">
          <div className="h-0.5 bg-neutral-300 relative">
            <div className="absolute -left-1.5 -top-1 w-3 h-3 border-l-2 border-t-2 border-neutral-300 -rotate-45" />
          </div>
        </div>

        {/* Arrow 4 to 1 (vertical, left) */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 h-8">
          <div className="w-0.5 bg-neutral-300 h-full relative">
            <div className="absolute -top-1.5 -left-1 w-3 h-3 border-l-2 border-t-2 border-neutral-300 rotate-45" />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Vertical Flow with Arrows */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={step.stepNumber}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-heading-md text-primary">
                  {step.stepNumber}
                </span>
              </div>
              <h3 className="text-heading-sm text-neutral-900">
                {step.label}
              </h3>
            </div>

            {/* Arrow pointing down (except for last step which points back to first) */}
            {index < steps.length && (
              <div className="flex justify-center my-6">
                <div className="w-0.5 h-8 bg-neutral-300 relative">
                  <div className="absolute -bottom-1.5 -left-1 w-3 h-3 border-l-2 border-b-2 border-neutral-300 rotate-45" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
