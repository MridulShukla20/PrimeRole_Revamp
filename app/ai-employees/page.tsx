import {
  AI_EMPLOYEES,
  getAllDepartments,
  getEmployeesByDepartment,
  Department,
} from "@/data/aiEmployees";
import { EmployeeCard } from "@/components/ai-employees/EmployeeCard";

export default function AIEmployeesPage() {
  const departments = getAllDepartments();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-16 md:py-24">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral-900 mb-4">
            AI Employee Roster
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 max-w-2xl">
            Meet the AI employees who work alongside your team. Each is
            designed to handle specific tasks in their department.
          </p>
        </div>

        {/* Department Sections */}
        <div className="space-y-16">
          {departments.map((department) => {
            const employees = getEmployeesByDepartment(department);

            return (
              <section key={department}>
                {/* Department Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold leading-snug tracking-tight text-neutral-900">
                    {department}
                  </h2>
                  <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
                </div>

                {/* Employee Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {employees.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
