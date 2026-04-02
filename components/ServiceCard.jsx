import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <span className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-teal-500/90 px-2.5 py-1 rounded-full">
          ৳{service.charge} / {service.unit}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
        <Link
          href={`/service/${service.id}`}
          className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-teal-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
        >
          View Details <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}
