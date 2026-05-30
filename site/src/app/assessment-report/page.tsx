import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment Report | AZ Security Consulting Security Assessment",
  description: "After your onsite assessment, you receive a written security findings report with risk ratings, vulnerabilities, and a prioritized action plan.",
};

const reportSections = [
  "Property overview",
  "Assessment scope",
  "Key vulnerabilities identified",
  "Risk ratings for each finding",
  "Access-control observations",
  "Visitor and vendor procedure observations",
  "Camera and visibility observations",
  "Physical security concerns",
  "Operational security concerns",
  "Recommended short-term fixes",
  "Recommended long-term improvements",
  "Optional technology recommendations",
  "Optional implementation roadmap",
];

const riskLevels = [
  {
    label: "High Priority",
    color: "bg-red-50 border-red-200 text-red-800",
    dot: "bg-red-500",
    desc: "Issues that present immediate risk and may require prompt attention. These findings are addressed first in the report and are flagged for immediate discussion.",
  },
  {
    label: "Medium Priority",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
    desc: "Issues that should be addressed in the near term. They represent real vulnerabilities that can be corrected through procedural changes or planned upgrades.",
  },
  {
    label: "Low Priority",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    dot: "bg-emerald-500",
    desc: "Improvements that can strengthen the overall security posture but are not urgent. These are often included in long-term planning recommendations.",
  },
];

export default function AssessmentReportPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Deliverable</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">A Clear, Practical Security Report You Can Act On</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              After the site visit, you receive a written report designed for decision-makers. It avoids unnecessary jargon and focuses on practical findings, risk priorities, and recommended next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Report overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What the Report Covers</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The written findings report is structured to give property owners, managers, and board members a complete picture of their security posture — from specific vulnerabilities to practical, prioritized recommendations they can begin acting on immediately.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every report is property-specific. The findings reflect the actual conditions observed during the site visit, not a generic checklist.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Report Contents</h3>
              <ul className="space-y-2.5">
                {reportSections.map((section, i) => (
                  <li key={section} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold text-xs shrink-0 mt-0.5 w-5 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk levels */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Risk Priority Ratings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Each finding in the report is assigned a priority rating so your team knows exactly what to address first.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {riskLevels.map((level) => (
              <div key={level.label} className={`rounded-xl p-6 border ${level.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 rounded-full ${level.dot}`} />
                  <span className="font-bold text-sm">{level.label}</span>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample report preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Expect</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Written for decision-makers",
                  desc: "The report is formatted for property managers, owners, and board members — not technical specialists. Findings are explained in plain language with clear context.",
                },
                {
                  title: "Property-specific findings",
                  desc: "Every observation is based on what our specialist observed at your property. This is not a generic checklist. It reflects real conditions, real gaps, and real recommendations.",
                },
                {
                  title: "Prioritized action plan",
                  desc: "Each finding is rated High, Medium, or Low priority so you always know where to focus first. Short-term fixes are separated from long-term improvements.",
                },
                {
                  title: "Technology recommendations",
                  desc: "Where relevant, the report includes specific technology recommendations — such as camera placement, access-control upgrades, or remote monitoring — to address identified vulnerabilities.",
                },
                {
                  title: "Optional implementation roadmap",
                  desc: "For clients who want a structured plan, we can include a phased implementation roadmap that helps you sequence improvements over time and manage costs.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Receive Your Assessment Report?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Schedule your onsite assessment and receive a written report with clear findings, risk priorities, and practical recommendations.
          </p>
          <Link
            href="/get-a-quote"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded hover:bg-blue-50 transition-colors inline-block"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
