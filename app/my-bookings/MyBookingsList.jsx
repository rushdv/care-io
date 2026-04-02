"use client";
import { useAuth } from "@/context/AuthContext";
import { getBookings, cancelBooking } from "@/lib/bookings";
import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const statusConfig = {
  Pending:   { cls: "bg-yellow-50 text-yellow-700 border-yellow-200",   dot: "bg-yellow-400" },
  Confirmed: { cls: "bg-blue-50 text-blue-700 border-blue-200",         dot: "bg-blue-400" },
  Completed: { cls: "bg-green-50 text-green-700 border-green-200",      dot: "bg-green-400" },
  Cancelled: { cls: "bg-red-50 text-red-600 border-red-200",            dot: "bg-red-400" },
};

export default function MyBookingsList() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) setBookings(getBookings(user.uid));
  }, [user]);

  const handleCancel = (id) => {
    cancelBooking(id, user.uid);
    setBookings(getBookings(user.uid));
    toast.success("Booking cancelled");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-1">Dashboard</p>
            <h1 className="text-3xl font-extrabold text-slate-900">My Bookings</h1>
          </div>
          <Link href="/#services"
            className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-md shadow-teal-900/20">
            + New Booking
          </Link>
        </div>

        {/* Stats row */}
        {bookings.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {["Pending", "Confirmed", "Completed", "Cancelled"].map((s) => (
              <div key={s} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-center">
                <p className="text-2xl font-extrabold text-slate-800">{bookings.filter(b => b.status === s).length}</p>
                <p className="text-slate-500 text-xs mt-1">{s}</p>
              </div>
            ))}
          </div>
        )}

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No bookings yet</h3>
            <p className="text-slate-500 text-sm mb-6">Book a care service to get started.</p>
            <Link href="/#services"
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-500 transition">
              Explore Services →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => {
              const sc = statusConfig[b.status] || statusConfig.Pending;
              return (
                <div key={b.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold text-slate-800">{b.serviceName}</h3>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${sc.cls}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`}></span>
                          {b.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-slate-500">
                        <span className="flex items-center gap-2"><span className="text-slate-300">⏱</span> {b.duration}</span>
                        <span className="flex items-center gap-2"><span className="text-slate-300">📍</span> {b.location}</span>
                        <span className="flex items-center gap-2 sm:col-span-2"><span className="text-slate-300">🏠</span> {b.address}</span>
                      </div>
                      <p className="text-teal-600 font-bold text-lg mt-3">৳{b.totalCost.toLocaleString()}</p>
                    </div>

                    <div className="flex sm:flex-col gap-2 shrink-0">
                      <Link href={`/service/${b.serviceId}`}
                        className="text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-100 transition text-center">
                        View Details
                      </Link>
                      {b.status !== "Cancelled" && b.status !== "Completed" && (
                        <button onClick={() => handleCancel(b.id)}
                          className="text-xs font-semibold bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-100 transition">
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
