import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Assessment Services | AZ Security Consulting",
  description: "Onsite threat assessments, security operations reviews, and technology evaluations for residential and commercial properties.",
};

const services = [
  {
    id: "onsite-threat-assessment",
    title: "Onsite Threat Assessment",
    desc: "A professional security specialist visits the property and evaluates visible threats, vulnerabilities, and procedural weaknesses. This assessment is designed for property managers, owners, boards, and operators who want a clear understanding of current risks.",
    areas: [
      "Main entrances",
      "Secondary entrances",
      "Side doors and service doors",
      "Lobby and concierge areas",
      "Loading docks",
      "Parking areas",
      "Package rooms",
      "Mailrooms",
      "Elevators",
      "Stairwells",
      "Roof access",
      "Mechanical rooms",
      "Amenity areas",
      "Perimeter and exterior access points",
    ],
  },
  {
    id: "security-operations-review",
    title: "Security Operations Review",
    desc: "This review focuses on how people move through the property and how security procedures are actually followed. Understanding day-to-day operational practices is essential to identifying real-world risk.",
    areas: [
      "Visitor access procedures",
      "Vendor access management",
      "Contractor access controls",
      "Delivery handling",
      "Resident and tenant lockouts",
      "Staff procedures and training gaps",
      "Incident response procedures",
      "Key, fob, and credential management",
      "After-hours access controls",
      "Tailgating and piggybacking risks",
    ],
  },
  {
    id: "technology-access-control-review",
    title: "Technology & Access-Control Review",
    desc: "This review identifies whether current technology supports the property's security needs and where upgrades, integrations, or improvements could meaningfully strengthen the building's overall security posture.",
    areas: [
      "Intercoms and video systems",
      "CCTV camera coverage and placement",
      "Access-control systems",
      "Door strikes and magnetic locks",
      "Smart locks",
      "Key fob systems",
      "Elevator access controls",
      "Package room technology",
      "Remote monitoring opportunities",
      "Integration with AZ Security Consulting services",
    ],
  },
  {
    id: "follow-up-consultation",
    title: "Follow-Up Consultation",
    desc: "A follow-up meeting allows the client to review the findings, ask questions, and determine the right next steps. Our team can help prioritize actions and identify whether AZ Security Consulting services could address specific vulnerabilities.",
    areas: [
      "Full report walkthrough with your team",
      "Prioritization of recommended actions",
      "Discussion of budget and timeline considerations",
      "Technology upgrade guidance",
      "AZ Security Consulting integration discussion",
      "Ongoing security support options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Security Assessment Services
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A structured set of professional services designed to help property owners, managers, and boards understand and address their real-world security risks.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-700 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-blue-800"
                  >
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className={`bg-slate-50 rounded-xl p-6 border border-slate-100 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="font-semibold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                    Areas Covered
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.areas.map((area) => (
                      <li key={area} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {area}
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get a Clear Picture of Your Property's Security Risks</h2>
          <p className="text-slate-600 mb-8 whitespace-nowrap">
            Contact us to discuss the right assessment approach for your building or facility.
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
