import { notFound } from "next/navigation";
import { getEmployeeById } from "@/data/aiEmployees";
import { EmployeeDetailHeader } from "@/components/ai-employees/EmployeeDetailHeader";
import { EmployeeWorkflow } from "@/components/ai-employees/EmployeeWorkflow";
import { EmployeeReportCard } from "@/components/ai-employees/EmployeeReportCard";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: {
    id: string;
  };
}

export default function AIEmployeeDetailPage({ params }: PageProps) {
  const employee = getEmployeeById(params.id);

  if (!employee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Visual-first with avatar, name, role, CTA */}
      <EmployeeDetailHeader employee={employee} />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20 space-y-16">
        {/* Section 2: What this AI employee does */}
        <FadeInSection>
          <section>
            <h2 className="text-heading-lg text-neutral-900 mb-4">
              What {employee.name} does
            </h2>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              {employee.whatTheyDo}
            </p>
          </section>
        </FadeInSection>

        {/* Section 3: Where it fits */}
        <FadeInSection>
          <section>
            <h2 className="text-heading-lg text-neutral-900 mb-4">
              Where {employee.name} fits
            </h2>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              {employee.whereItFits}
            </p>
          </section>
        </FadeInSection>

        {/* Section 4: Typical responsibilities */}
        <FadeInSection>
          <section>
            <h2 className="text-heading-lg text-neutral-900 mb-6">
              Typical responsibilities
            </h2>
            <ul className="space-y-3">
              {employee.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-body-md text-neutral-700"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        {/* Section 5: How it works (4-step loop) */}
        <FadeInSection>
          <section>
            <h2 className="text-heading-lg text-neutral-900 mb-4">
              How {employee.name} works
            </h2>
            <p className="text-body-md text-neutral-600 mb-8">
              {employee.name} follows the same collaborative loop as all PrimeRole
              AI employees. You stay in control.
            </p>
            <EmployeeWorkflow />
          </section>
        </FadeInSection>

        {/* Section 6: Report card (metrics) */}
        <FadeInSection>
          <section>
            <h2 className="text-heading-lg text-neutral-900 mb-4">
              Report card
            </h2>
            <p className="text-body-md text-neutral-600 mb-8">
              {employee.name} tracks these metrics to show impact and help you
              measure results.
            </p>
            <EmployeeReportCard metrics={employee.reportCardMetrics} />
          </section>
        </FadeInSection>

        {/* Section 7: Reinforced CTA */}
        <FadeInSection>
          <section className="pt-8 pb-4">
            <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-heading-lg text-neutral-900 mb-3">
                Ready to hire {employee.name}?
              </h2>
              <p className="text-body-md text-neutral-600 mb-6 max-w-xl mx-auto">
                {employee.name} is available now. Start for free and add them to
                your team in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button href="/signup" variant="primary" className="px-6 py-3 text-label-lg">
                  Start for free
                </Button>
                <Button href="/book-demo" variant="text" className="px-6 py-3 text-label-lg">
                  Book a demo
                </Button>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
}
