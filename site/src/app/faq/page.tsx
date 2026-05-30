"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What is a threat assessment?",
    a: "A threat assessment is a structured review of a property's physical security, access points, procedures, technology, and operating risks. The goal is to identify vulnerabilities and recommend practical improvements before an incident occurs.",
  },
  {
    q: "Do you provide onsite visits?",
    a: "Yes. The core service includes an onsite visit to walk the property, review access points, observe procedures, and identify areas of concern. Remote or desk-based reviews are not a substitute for an onsite walkthrough.",
  },
  {
    q: "What types of properties do you assess?",
    a: "We assess residential buildings, commercial properties, mixed-use buildings, apartment communities, condominiums, co-ops, office buildings, and other facilities. We work with both small properties and large multi-building portfolios.",
  },
  {
    q: "Can you recommend security technology?",
    a: "Yes. Recommendations may include access control upgrades, camera placement improvements, intercom systems, smart locks, lighting, remote monitoring, and other security-related improvements. We focus on practical recommendations relevant to your property.",
  },
  {
    q: "Is this only for AZ Security Consulting customers?",
    a: "No. The service can support both existing AZ Security Consulting clients and new clients who want a professional security assessment. You do not need to be a current AZ Security Consulting customer to schedule an assessment.",
  },
  {
    q: "Can this help us decide whether we need AZ Security Consulting?",
    a: "Yes. The assessment can identify whether remote doorman, access control, visitor verification, delivery coordination, or monitoring services would strengthen your property's security operations. The follow-up consultation can also address how AZ Security Consulting might fit your needs.",
  },
  {
    q: "How long does an assessment take?",
    a: "Timing depends on the size and complexity of the property. A small property may require a shorter walkthrough, while larger or multi-building properties may require a more detailed review. We will discuss expected timing during the initial consultation.",
  },
  {
    q: "How soon will we receive the report after the site visit?",
    a: "We will provide a timeline for report delivery during the initial consultation. Delivery timing depends on the scope of the assessment and the property size.",
  },
  {
    q: "Do you assess properties outside of New York?",
    a: "Please contact us to discuss your property's location and we will confirm whether we can serve your area or discuss options.",
  },
  {
    q: "What happens after we receive the report?",
    a: "We schedule a follow-up consultation to review the findings with your team, answer questions, and help determine next steps. This may include procedural changes, technology upgrades, AZ Security Consulting integration, or additional security services.",
  },
  {
    q: "Are your assessment recommendations guaranteed?",
    a: "Our recommendations are advisory. The assessment reflects the observations of our specialist during the site visit and is intended to support informed decision-making. Implementation of recommendations and subsequent security outcomes are the responsibility of the property owner or manager.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="font-semibold text-slate-900 text-sm leading-relaxed group-hover:text-blue-700 transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm text-slate-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">FAQs</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Answers to common questions about our assessment process, deliverables, and service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-100">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Still Have Questions?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Contact us to discuss your property's specific needs and we will answer any additional questions you have.
          </p>
          <Link
            href="/contact"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
