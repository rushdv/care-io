import { services, getServiceById } from "@/lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BookButton from "./BookButton";

export async function generateMetadata({ params }) {
  const service = getServiceById(params.service_id);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} – Care.xyz`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ service_id: s.id }));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceById(params.service_id);
  if (!service) notFound();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-3 transition">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{service.title}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              ৳{service.charge} / {service.unit}
            </span>
            <span className="text-white/70 text-sm">⭐ 4.9 (120+ reviews)</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-4">About this service</h2>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-5">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-teal-50 rounded-xl px-4 py-3">
                    <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    <span className="text-slate-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-24">
              <p className="text-slate-500 text-sm mb-1">Starting from</p>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">৳{service.charge}</p>
              <p className="text-slate-400 text-sm mb-6">per {service.unit}</p>

              <div className="space-y-3 mb-6 text-sm">
                {["Certified & verified caregiver", "Flexible scheduling", "Free cancellation", "24/7 support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-600">
                    <span className="text-teal-500 text-xs">✓</span> {item}
                  </div>
                ))}
              </div>

              <BookButton serviceId={service.id} />

              <p className="text-center text-slate-400 text-xs mt-4">No payment required to book</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
