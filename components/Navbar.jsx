"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    setOpen(false);
    toast.success("Logged out successfully");
  };

  const navLink = (href, label) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`text-sm font-medium transition-colors hover:text-teal-300 ${
        pathname === href ? "text-yellow-300" : "text-white/90"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
            <span className="text-white font-bold text-xl tracking-tight">
              Care<span className="text-teal-400">.xyz</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLink("/", "Home")}
            {navLink("/service/baby-care", "Services")}
            {user && navLink("/my-bookings", "My Bookings")}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <Link href="/login"
                  className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition">
                  Login
                </Link>
                <Link href="/register"
                  className="text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg transition shadow-md shadow-teal-900/30">
                  Get Started
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                  <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
                    {(user.displayName || user.email || "U")[0].toUpperCase()}
                  </div>
                  <span className="text-white/80 text-sm max-w-[120px] truncate">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button onClick={handleLogout}
                  className="text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-lg transition">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"></div>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-white/10 px-4 py-4 space-y-1">
          {[
            { href: "/", label: "Home" },
            { href: "/service/baby-care", label: "Services" },
            ...(user ? [{ href: "/my-bookings", label: "My Bookings" }] : []),
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition">
              {label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 mt-2">
            {!user ? (
              <div className="flex gap-2">
                <Link href="/login" onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm font-medium text-white/80 border border-white/20 py-2 rounded-lg hover:bg-white/10 transition">
                  Login
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}
                  className="flex-1 text-center text-sm font-semibold bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-400 transition">
                  Register
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-white/50 text-xs px-3">{user.email}</p>
                <button onClick={handleLogout}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
