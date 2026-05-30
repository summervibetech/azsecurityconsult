import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | AZ Security Consulting Security Assessment",
  description: "Learn about our five-step threat assessment process — from initial consultation to final report and action plan review.",
};

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    detail: "We begin with a conversation about your property — its size, layout, current security setup, known incidents or concerns, and your operational goals. This helps us understand the scope of the assessment and prepare our specialists for the site visit.",
    highlights: [
      "Discussion of property type and layout",
      "Review of current security systems",
      "Identification of known concerns",
      "Assessment scope definition",
      "Scheduling coordination",
    ],
  },
  {
    num: "02",
    title: "Onsite Site Visit",
    detail: "A security specialist visits the property and conducts a thorough walkthrough. We move through the building methodically, observing entry points, access procedures, camera coverage, physical hardware, staff behavior, and operational practices.",
    highlights: [
      "Full property walkthrough",
      "Entrance and perimeter review",
      "Lobby and front-desk observation",
      "Camera placement and coverage check",
      "Door hardware and lock evaluation",
      "Package room and elevator review",
    ],
  },
  {
    num: "03",
    title: "Risk Identification",
    detail: "After the site visit, we analyze our observations and identify vulnerabilities across the full range of physical, operational, and technological factors. Each issue is evaluated for severity and practical impact.",
    highlights: [
      "Physical access vulnerabilities",
      "Visitor and vendor procedure gaps",
      "Camera blind spots and coverage issues",
      "Access-control weaknesses",
      "Lighting and visibility concerns",
      "Staffing and procedural gaps",
    ],
  },
  {
    num: "04",
    title: "Action Plan Review",
    detail: "We schedule a follow-up meeting to walk through the report with your team. This allows you to ask questions, clarify priorities, and determine the right next steps — whether that involves procedural changes, technology upgrades, or AZ Security Consulting integration.",
    highlights: [
      "Full report walkthrough with your team",
      "Priority discussion and clarification",
      "Implementation guidance",
      "Technology upgrade discussion",
      "AZ Security Consulting integration review",
      "Ongoing support options",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Process</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A clear, five-step process designed to make your assessment straightforward and your results actionable.
            </p>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-slate-200 z-0" />
                )}
                <div className="relative z-10 flex gap-8 pb-12">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-2 flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{step.detail}</p>
                    <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What this covers</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Have Questions About the Process?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            We've answered the most common questions about our assessments, timeline, report format, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/faq" className="text-blue-700 font-semibold border border-blue-200 px-6 py-3 rounded hover:bg-blue-50 transition-colors">
              Read the FAQs
            </Link>
            <Link href="/get-a-quote" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
