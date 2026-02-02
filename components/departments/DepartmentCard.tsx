"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Department } from "./constants";
import { cardHoverVariants } from "@/components/motion/animations";

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-neutral-200"
      initial="rest"
      whileHover="hover"
      variants={cardHoverVariants}
    >
      {/* Department Name */}
      <h3 className="text-heading-lg text-neutral-900 mb-3">
        {department.name}
      </h3>

      {/* One-line Outcome */}
      <p className="text-body-lg text-neutral-700 mb-6">
        {department.outcome}
      </p>

      {/* Concrete Outcomes */}
      <ul className="space-y-3 mb-8">
        {department.concreteOutcomes.map((outcome, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-body-md text-neutral-600"
          >
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {/* AI Employees */}
      <div className="mb-6">
        <h4 className="text-label-md text-neutral-500 uppercase tracking-wide mb-3">
          AI Employees
        </h4>
        <ul className="space-y-2">
          {department.aiEmployees.map((employee, index) => (
            <li key={index} className="text-body-md text-neutral-700">
              <Link
                href="#"
                className="hover:text-primary transition-colors font-medium"
              >
                {employee.name}
              </Link>
              <span className="text-neutral-400"> — </span>
              <span>{employee.role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="#"
        className="inline-flex items-center text-body-md font-medium text-primary hover:text-primary-600 transition-colors"
      >
        {department.ctaText}
        <svg
          className="ml-1.5 w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
