import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Help | AZ Security Consulting Security Assessment",
  description: "We serve residential buildings, commercial properties, property management companies, boards, and existing AZ Security Consulting clients seeking professional threat assessments.",
};

const audiences = [
  {
    title: "Residential Buildings",
    desc: "For apartment buildings, condominiums, co-ops, and multifamily properties that need stronger access control, visitor management, delivery handling, and resident safety procedures.",
    details: [
      "High-rise and mid-rise apartment buildings",
      "Luxury and market-rate condominiums",
      "Cooperative (co-op) properties",
      "Multifamily rental communities",
      "Buildings preparing for CCTV or access-control upgrades",
      "Properties with recent security incidents or concerns",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Commercial Properties",
    desc: "For office buildings, mixed-use properties, retail locations, and commercial facilities that need to identify vulnerabilities in access points, tenant flow, deliveries, and after-hours security.",
    details: [
      "Office buildings and professional suites",
      "Mixed-use residential and commercial properties",
      "Retail and ground-floor commercial spaces",
      "Medical and professional office facilities",
      "Properties with multiple tenant access needs",
      "Buildings with high pedestrian or visitor traffic",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Property Management Companies",
    desc: "For management companies that oversee multiple buildings and need a repeatable, professional way to evaluate risk across a portfolio and standardize security procedures.",
    details: [
      "Companies managing multiple residential buildings",
      "Portfolio managers seeking consistent risk standards",
      "Teams onboarding new properties",
      "Managers preparing for board presentations",
      "Companies evaluating security technology investments",
      "Management firms seeking vendor-neutral assessments",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Boards and Building Owners",
    desc: "For boards and owners who need an independent review before approving security upgrades, operational changes, or capital investments. A professional assessment provides an objective baseline.",
    details: [
      "Condo and co-op boards reviewing security budgets",
      "Building owners evaluating technology investments",
      "Boards responding to resident security concerns",
      "Owners preparing a property for sale or occupancy",
      "Developers assessing security infrastructure needs",
      "Owners seeking independent third-party evaluations",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Existing AZ Security Consulting Clients",
    desc: "For current AZ Security Consulting clients who want a deeper onsite review to improve building procedures, identify blind spots, and optimize their existing security setup.",
    details: [
      "Properties already using AZ Security Consulting remote doorman",
      "Buildings with existing CCTV and access-control setups",
      "Clients seeking to improve operational procedures",
      "Properties adding amenities or undergoing renovation",
      "Buildings expanding or changing their tenant mix",
      "Clients seeking a formal security audit and documentation",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhoWeHelpPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Clients</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Who We Help</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We work with property owners, managers, boards, and operators across the full range of residential and commercial real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Audience sections */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {audiences.map((audience, i) => (
              <div
                key={audience.title}
                className={`grid lg:grid-cols-2 gap-10 items-start py-10 ${i < audiences.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                      {audience.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{audience.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{audience.desc}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">This includes</h3>
                  <ul className="space-y-2">
                    {audience.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tell Us About Your Property</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            A member of our team will reach out to discuss the right assessment approach for your building or facility.
          </p>
          <Link
            href="/get-a-quote"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition-colors inline-block"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
