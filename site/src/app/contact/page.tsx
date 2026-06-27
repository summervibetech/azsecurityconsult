"use client";

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
        <div className="pb-5 text-sm text-slate-600 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Reach us directly by email, phone, or visit our main site.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</p>
              </div>
              <a href="mailto:az.securityconsult@gmail.com" className="text-sm font-medium text-blue-700 hover:text-blue-800 whitespace-nowrap">
                az.securityconsult@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone</p>
              </div>
              <a href="tel:6464229626" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                (646) 422-9626
              </a>
            </div>

            {/* Digital consulting */}
            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Digital Consultation</p>
              </div>
              <a href="https://www.summervibe.tech" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-700 hover:text-blue-800">
                www.summervibe.tech
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mb-8">Answers to common questions about our assessment process, deliverables, and service.</p>
          <div className="bg-white rounded-xl border border-slate-100 px-6 divide-y divide-slate-100">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
