import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Onsite Threat Assessment",
    desc: "A detailed walkthrough of your property to identify physical and operational security vulnerabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Access-Control Review",
    desc: "Evaluation of doors, intercoms, visitor access, vendor access, delivery handling, and resident flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: "Security Technology Recommendations",
    desc: "Practical recommendations for cameras, intercoms, access control, smart locks, and remote security operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    title: "Digital Solution Consultation",
    desc: "Modern, professional websites and digital strategy consulting to strengthen your business's online presence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "We discuss your property, current security concerns, existing systems, and operational goals." },
  { num: "02", title: "Onsite Site Visit", desc: "A security specialist walks the property, reviewing entrances, access points, procedures, and technology." },
  { num: "03", title: "Risk Identification", desc: "We identify vulnerabilities in physical access, visitor management, vendor procedures, and daily operations." },
  { num: "04", title: "Action Plan Review", desc: "We review the report with your team and help determine practical next steps." },
];

const audiences = [
  "Property managers",
  "Condo and co-op boards",
  "Apartment building owners",
  "Commercial building operators",
  "Real estate asset managers",
  "Developers preparing for occupancy",
];

const reviewAreas = [
  "Entry points and perimeter access",
  "Lobby and front-desk procedures",
  "Visitor, vendor, and delivery access",
  "CCTV and camera coverage",
  "Door hardware and access control",
  "Package rooms and mailrooms",
  "Lighting and visibility",
  "Elevators, stairwells, and restricted areas",
  "Staff procedures and emergency response",
];

const assessmentIncludes = [
  "Onsite property walkthrough",
  "Security and access-control observations",
  "Identification of vulnerabilities",
  "Practical recommendations",
  "Follow-up review of next steps",
];

export default function Home() {
  return (
    <>
      {/* Hero — fills remaining viewport height below the sticky bars */}
      <section className="relative bg-slate-900 text-white overflow-hidden h-[calc(100vh-100px)] flex items-center">
        {/* City background image */}
        <div className="hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80"
            alt="New York City skyline"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative w-full px-4 sm:px-8 lg:px-16 py-6 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-4xl mx-auto">
              Professional Threat Assessments for Safer Buildings
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              Identify security risks, access-control gaps, and operational vulnerabilities before they become incidents. Our onsite assessments help property owners, managers, and boards understand where their building is exposed and what to do next.
            </p>
        </div>
      </section>

      {/* Problem section */}
      <section className="relative overflow-hidden py-24">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow label */}
          <span className="inline-block text-navy-900 text-xs font-bold uppercase tracking-widest mb-4" style={{color: '#0a1f44'}}>
            The Risk Is Real
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4" style={{color: '#0a1f44'}}>
            Security Gaps Are Often Hidden
          </h2>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-8" style={{color: '#0a1f44'}}>
            in Plain Sight
          </h2>

          {/* Accent divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-blue-700" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="h-px w-16 bg-blue-700" />
          </div>

          <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto">
            Most properties do not discover their security weaknesses until after an incident occurs. Unsecured side doors, inconsistent vendor access, poor camera placement, weak package room procedures, blind spots, lighting issues, and outdated access policies can all create unnecessary risk. A professional threat assessment helps identify these issues before they become costly problems.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A structured, professional review of your property's security posture with actionable results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-blue-700 font-semibold hover:text-blue-800 text-sm">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* What we review */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">What We Review</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our specialists conduct a comprehensive walkthrough covering every area that contributes to your property's overall security posture.
              </p>
              <Link
                href="/get-a-quote"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded inline-block transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reviewAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How the Assessment Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A clear, structured process from first conversation to final report.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center bg-slate-50 border border-slate-200 rounded-2xl px-6 py-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-5 shrink-0 ring-4 ring-blue-100">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="text-blue-700 font-semibold hover:text-blue-800 text-sm">
              Learn more about the process →
            </Link>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who We Help</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We serve property owners, managers, boards, and commercial operators across residential and commercial real estate.
              </p>
              <ul className="space-y-3">
                {audiences.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/who-we-help" className="text-blue-700 font-semibold hover:text-blue-800 text-sm">
                  See all audiences we serve →
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                alt="Apartment building"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ready to Understand Your Property&apos;s Security Risks?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Schedule an onsite threat assessment and receive a clear, practical plan for improving your property's security.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-a-quote"
              className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-slate-50 text-blue-700 font-semibold px-8 py-3 rounded transition-colors border border-blue-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
