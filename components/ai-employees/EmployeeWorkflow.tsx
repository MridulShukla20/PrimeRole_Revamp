import { HOW_IT_WORKS } from "@/components/how-it-works/constants";

export function EmployeeWorkflow() {
  const steps = HOW_IT_WORKS.steps;

  return (
    <div className="bg-neutral-50 rounded-xl p-8 md:p-10">
      {/* Desktop Layout: Horizontal flow */}
      <div className="hidden md:flex md:items-center md:justify-between md:gap-4">
        {steps.map((step, index) => (
          <div key={step.stepNumber} className="flex items-center gap-4">
            {/* Step */}
            <div className="flex flex-col items-center text-center min-w-[120px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-heading-sm text-primary">
                  {step.stepNumber}
                </span>
              </div>
              <p className="text-body-sm text-neutral-700 font-medium">
                {step.label}
              </p>
            </div>

            {/* Arrow (except after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-300"
                >
                  <path
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Layout: Vertical flow */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={step.stepNumber}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-body-md font-semibold text-primary">
                  {step.stepNumber}
                </span>
              </div>
              <div className="pt-2">
                <p className="text-body-md text-neutral-700 font-medium">
                  {step.label}
                </p>
              </div>
            </div>

            {/* Arrow pointing down (except for last step) */}
            {index < steps.length - 1 && (
              <div className="ml-5 mt-3 mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-neutral-300"
                >
                  <path
                    d="M8 2v12m0 0l-4-4m4 4l4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
