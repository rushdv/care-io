import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import Banner from "@/components/Banner";
import Link from "next/link";

export const metadata = {
  title: "Care.xyz – Trusted Baby & Elderly Care Services",
  description: "Find trusted baby, elderly, and sick care services near you.",
};

const testimonials = [
  { name: "Rina Begum", role: "Mother of 2", text: "Care.xyz helped me find a wonderful caretaker for my mother. The booking process was seamless and the caregiver was exceptional.", avatar: "R", rating: 5 },
  { name: "Karim Hossain", role: "Working Parent", text: "Booking was super easy and the babysitter was amazing with my kids. I felt completely at ease leaving them in her care.", avatar: "K", rating: 5 },
  { name: "Sadia Islam", role: "Daughter", text: "Professional, reliable, and affordable. The elderly care service gave my father the dignity and attention he deserves.", avatar: "S", rating: 5 },
];

const stats = [
  { label: "Happy Families", value: "2,500+", icon: "👨‍👩‍👧" },
  { label: "Verified Caretakers", value: "500+", icon: "✅" },
  { label: "Cities Covered", value: "64", icon: "📍" },
  { label: "Bookings Completed", value: "10,000+", icon: "📋" },
];

const whyUs = [
  { icon: "🛡️", title: "Verified Caregivers", desc: "All caregivers go through background checks and skill verification." },
  { icon: "⚡", title: "Instant Booking", desc: "Book a caregiver in minutes with our streamlined booking system." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. Know exactly what you pay before confirming." },
  { icon: "🕐", title: "24/7 Support", desc: "Our support team is always available to help you anytime." },
];

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <Banner />

      {/* Why Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Care you can count on</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group">
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Our Care Services</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Professional caregiving for every need — from newborns to seniors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-4xl font-extrabold text-teal-400 mb-1">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Making caregiving easy, secure & accessible
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Care.xyz is a trusted platform connecting families with professional caregivers across Bangladesh.
              Whether you need a babysitter, elderly companion, or a home nurse — we make it simple to find, book, and manage care.
            </p>
            <ul className="space-y-3 mb-8">
              {["Certified and background-verified caregivers", "Flexible booking by hours or days", "Real-time booking status tracking", "Secure and transparent payments"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/register"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md shadow-teal-900/20">
              Get Started Free →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { bg: "bg-teal-50", icon: "👶", label: "Baby Care", sub: "Newborn to 12 years" },
              { bg: "bg-blue-50", icon: "👴", label: "Elderly Care", sub: "Senior support" },
              { bg: "bg-emerald-50", icon: "🏥", label: "Sick Care", sub: "Home recovery" },
              { bg: "bg-yellow-50", icon: "⭐", label: "Top Rated", sub: "4.9/5 average" },
            ].map((c) => (
              <div key={c.label} className={`${c.bg} rounded-2xl p-6 text-center`}>
                <div className="text-4xl mb-2">{c.icon}</div>
                <p className="font-bold text-slate-800 text-sm">{c.label}</p>
                <p className="text-slate-500 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">What families say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to find the perfect caregiver?</h2>
          <p className="text-teal-100 mb-8 text-lg">Join thousands of families who trust Care.xyz for their caregiving needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register"
              className="bg-white text-teal-700 font-bold px-8 py-3.5 rounded-xl hover:bg-teal-50 transition shadow-lg">
              Create Free Account
            </Link>
            <Link href="/#services"
              className="border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
