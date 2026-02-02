interface EmployeeReportCardProps {
  metrics: string[];
}

export function EmployeeReportCard({ metrics }: EmployeeReportCardProps) {
  return (
    <div className="bg-neutral-50 rounded-xl p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-100"
          >
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-body-md text-neutral-700">{metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
