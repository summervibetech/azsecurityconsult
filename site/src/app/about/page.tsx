import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AZ Security Consulting Security Assessment",
  description: "Learn about our threat assessment service and our connection to AZ Security Consulting's building security expertise.",
};

const trustPoints = [
  {
    title: "Built on Operational Experience",
    desc: "Our assessment service draws on years of hands-on experience in building security operations — remote doorman services, access control, CCTV integration, and real-time operator oversight.",
  },
  {
    title: "Residential and Commercial Expertise",
    desc: "We have direct experience serving cooperatives, condominiums, apartment buildings, private residences, and commercial-style properties across a wide range of property types and sizes.",
  },
  {
    title: "Practical, Not Fear-Based",
    desc: "Our approach focuses on identifying real vulnerabilities and providing recommendations that property owners and managers can realistically act on — not alarmist findings designed to maximize fear.",
  },
  {
    title: "Property-Specific Recommendations",
    desc: "We do not deliver generic checklists. Every assessment is tailored to the specific property, its operations, its tenant or resident profile, and its existing security setup.",
  },
  {
    title: "Prevention-Focused",
    desc: "We focus on what can be done before an incident occurs. Our goal is to give property decision-makers the information they need to reduce risk proactively.",
  },
  {
    title: "Connected to Ongoing Support",
    desc: "For properties that need more than a one-time assessment, our connection to AZ Security Consulting provides access to remote doorman services, CCTV monitoring, access control, and ongoing operator support.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">About</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Professional Security Assessment Backed by Real Building Experience
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our threat assessment service was created to help property owners, managers, boards, and operators better understand their real-world security risks.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
                alt="City buildings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <blockquote className="text-white text-base font-semibold leading-snug max-w-xs">
                  "Every property deserves a clear, honest picture of its real security risks."
                </blockquote>
              </div>
            </div>
            {/* Text side */}
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 block">Our Mission</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built to Help Properties Stay Safe</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  Our threat assessment service was created to help property owners, managers, boards, and operators better understand their real-world security risks. Backed by the operational experience of AZ Security Consulting, we bring a practical perspective to building security, access control, visitor management, and property operations.
                </p>
                <p>
                  AZ Security Consulting has built its reputation around remote doorman services, access control, CCTV integration, resident support, vendor access, delivery coordination, and real-time operator oversight. This assessment service extends that experience into onsite evaluations and actionable recommendations.
                </p>
                <p>
                  We believe every property owner deserves findings presented in plain language, prioritized by severity, and paired with recommendations they can actually implement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="order-2 lg:order-1">
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 block">Our Approach</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Property-First. Practical. Clear.</h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Property-First Mindset",
                    desc: "Before any site visit, we learn about your specific building, tenant profile, existing systems, and known concerns.",
                  },
                  {
                    num: "02",
                    title: "Thorough Onsite Walkthrough",
                    desc: "The walkthrough is comprehensive and structured — covering every access point, procedure, and technology gap.",
                  },
                  {
                    num: "03",
                    title: "Helping You Build Safer Solutions",
                    desc: "We work alongside property decision-makers to identify improvements that are realistic, prioritized, and tailored to your building's specific needs.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 items-start">
                    <span className="text-3xl font-black text-blue-100 leading-none shrink-0 select-none">{item.num}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 shadow-lg order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&q=80"
                alt="Modern building exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-base font-semibold leading-snug max-w-xs">
                  Practical guidance that helps properties become safer places to live and work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AZ Security Consulting connection */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Backed by AZ Security Consulting</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              AZ Security Consulting has long served residential and commercial properties with remote doorman, access control, video intercom, CCTV, visitor verification, delivery coordination, and real-time operator support. Our assessment service brings that practical building-security knowledge onsite to help you identify vulnerabilities and prioritize improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Work With Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              What sets our assessment service apart from generic security audits.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
