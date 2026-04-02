import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
              <span className="text-white font-bold text-xl">Care<span className="text-teal-400">.xyz</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Reliable and trusted care services for children, elderly, and family members. Making caregiving easy, secure, and accessible.
            </p>
            <div className="flex gap-3 mt-6">
              {["FB", "TW", "IG"].map((s) => (
                <div key={s} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal-500 flex items-center justify-center text-xs font-bold cursor-pointer transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Baby Care", href: "/service/baby-care" },
                { label: "Elderly Care", href: "/service/elderly-care" },
                { label: "Sick People Care", href: "/service/sick-care" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 hover:text-teal-400 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-teal-400">✉</span> support@care.xyz
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">☎</span> +880 1700-000000
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">📍</span> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Care.xyz. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
