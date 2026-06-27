import Link from "next/link";

function BrandIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2L36 8V22C36 31.5 29 39 20 42C11 39 4 31.5 4 22V8L20 2Z" fill="#1D4ED8" />
      <path d="M20 5.5L33.5 11V22C33.5 30 27.5 37 20 39.5C12.5 37 6.5 30 6.5 22V11L20 5.5Z" fill="#2563EB" />
      <path d="M15 21V18.5a5 5 0 0110 0V21" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <rect x="13.5" y="21" width="13" height="10" rx="2" fill="white" />
      <circle cx="20" cy="25.5" r="2" fill="#1D4ED8" />
      <rect x="19.2" y="25.5" width="1.6" height="2.8" rx="0.8" fill="#1D4ED8" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BrandIcon size={32} />
              <span className="text-white font-bold text-sm whitespace-nowrap">
                AZ Security <span className="text-blue-400">Consulting</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional onsite threat assessments for residential, commercial, and mixed-use properties in Arizona, New York, and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/who-we-help" className="hover:text-white transition-colors">Who We Help</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:az.securityconsult@gmail.com" className="hover:text-white transition-colors break-all">
                  az.securityconsult@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:6464229626" className="hover:text-white transition-colors">
                  (646) 422-9626
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Ready to assess your property's security risks?
            </p>
            <Link
              href="/get-a-quote"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AZ Security Consulting LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
