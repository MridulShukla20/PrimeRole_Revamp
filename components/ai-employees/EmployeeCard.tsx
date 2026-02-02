"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AIEmployeeData } from "@/data/aiEmployees";
import { cardHoverVariants } from "@/components/motion/animations";

interface EmployeeCardProps {
  employee: AIEmployeeData;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Link href={`/ai-employees/${employee.id}`} className="block">
      <motion.div
        className="bg-white border border-neutral-200 rounded-xl p-6"
        initial="rest"
        whileHover="hover"
        variants={cardHoverVariants}
      >
        <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold leading-normal text-neutral-900">
          {employee.name}
        </h3>
        <p className="text-sm leading-normal text-neutral-500">
          {employee.role}
        </p>
        <div className="mt-1">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
            {employee.department}
          </span>
        </div>
        </div>
      </motion.div>
    </Link>
  );
}
