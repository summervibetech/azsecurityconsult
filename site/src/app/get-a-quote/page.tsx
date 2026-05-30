"use client";

import { useState } from "react";

const propertyTypes = [
  "Apartment / Multifamily Building",
  "Condominium",
  "Cooperative (Co-op)",
  "Commercial Office Building",
  "Mixed-Use Property",
  "Retail Property",
  "Other",
];

const contactMethods = ["Email", "Phone", "Either"];

const timingOptions = [
  "As soon as possible",
  "Within the next 30 days",
  "Within the next 60–90 days",
  "Planning ahead (90+ days)",
  "Not sure yet",
];

export default function GetAQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    units: "",
    concerns: "",
    contactMethod: "",
    timing: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-slate-50 min-h-screen py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Thank You</h1>
          <p className="text-slate-600 leading-relaxed">
            Your request has been received. A member of our team will contact you shortly to discuss the right assessment approach for your property.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Get a Quote</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Schedule a Security Assessment</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us about your property and your security concerns. A member of our team will contact you to discuss the right assessment approach for your building or facility.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-slate-900 mb-4">What Happens Next</h2>
                <ol className="space-y-4">
                  {[
                    "We review your submission and your property details.",
                    "A member of our team reaches out to schedule an initial consultation.",
                    "We discuss your property, security concerns, and the right scope for your assessment.",
                    "We schedule the onsite site visit at a time that works for you.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">We Assess</h3>
                <ul className="space-y-1.5 text-sm text-slate-500">
                  {[
                    "Residential buildings",
                    "Commercial properties",
                    "Mixed-use properties",
                    "Condominiums and co-ops",
                    "Office buildings",
                    "Multifamily communities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Building or company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main Street, City, State"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Property Type</label>
                    <select
                      name="propertyType"
                      value={form.propertyType}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a type</option>
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Number of Units / Approximate Size
                    </label>
                    <input
                      type="text"
                      name="units"
                      value={form.units}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g. 80 units, 5 floors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Security Concerns</label>
                  <textarea
                    name="concerns"
                    value={form.concerns}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe any known security issues, recent incidents, or areas of concern."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Contact Method</label>
                    <select
                      name="contactMethod"
                      value={form.contactMethod}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a method</option>
                      {contactMethods.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Desired Assessment Timing</label>
                    <select
                      name="timing"
                      value={form.timing}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select timing</option>
                      {timingOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
                  >
                    Submit Property for Review
                  </button>
                  <p className="text-xs text-slate-400 mt-3 text-center">
                    Your information will be used only to contact you about your assessment request.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
