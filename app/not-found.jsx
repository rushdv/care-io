import Link from "next/link";

export const metadata = { title: "404 – Page Not Found | Care.xyz" };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 max-w-md w-full">
        <div className="text-7xl font-extrabold text-slate-100 mb-2">404</div>
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Page not found</h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md shadow-teal-900/20">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
