import { DEPARTMENTS } from "./constants";
import DepartmentCard from "./DepartmentCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

export default function Departments() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DEPARTMENTS.map((department) => (
            <DepartmentCard key={department.name} department={department} />
          ))}
        </FadeInSection>
      </div>
    </section>
  );
}
