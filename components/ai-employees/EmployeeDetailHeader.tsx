import Link from "next/link";
import { AIEmployeeData } from "@/data/aiEmployees";

interface EmployeeDetailHeaderProps {
  employee: AIEmployeeData;
}

export function EmployeeDetailHeader({ employee }: EmployeeDetailHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          {/* AI Avatar Placeholder */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 border-4 border-white shadow-medium flex items-center justify-center mb-6">
            <span className="text-4xl md:text-5xl font-bold text-primary">
              {employee.name.charAt(0)}
            </span>
          </div>

          {/* Department Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm bg-primary/10 text-primary">
              {employee.department}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-display-sm md:text-display-md text-neutral-900 mb-3">
            {employee.name}
          </h1>

          {/* Role */}
          <p className="text-heading-md md:text-heading-lg text-neutral-600 mb-8">
            {employee.role}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link
              href="/signup"
              className="px-6 py-3 bg-primary text-white rounded-lg text-label-lg hover:bg-primary-600 transition-colors shadow-soft"
            >
              Hire {employee.name}
            </Link>
            <Link
              href="/book-demo"
              className="px-6 py-3 border border-neutral-200 text-neutral-700 rounded-lg text-label-lg hover:bg-neutral-50 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
