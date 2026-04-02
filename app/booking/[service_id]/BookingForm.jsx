"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { saveBooking } from "@/lib/bookings";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"];

const inputCls = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition bg-white";

export default function BookingForm({ service }) {
  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ duration: 1, unit: "hour", division: "", district: "", city: "", area: "", address: "" });
  const totalCost = form.duration * service.charge;
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.division || !form.district || !form.city || !form.address) {
      toast.error("Please fill all required location fields");
      return;
    }
    saveBooking({
      id: Date.now().toString(),
      uid: user.uid,
      serviceId: service.id,
      serviceName: service.title,
      duration: `${form.duration} ${form.unit}(s)`,
      location: `${form.area ? form.area + ", " : ""}${form.city}, ${form.district}, ${form.division}`,
      address: form.address,
      totalCost,
      status: "Pending",
      createdAt: new Date().toISOString(),
    });
    toast.success("Booking confirmed!");
    router.push("/my-bookings");
  };

  const Step = ({ num, title }) => (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{num}</div>
      <h2 className="font-semibold text-slate-800">{title}</h2>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-1">Booking</p>
          <h1 className="text-3xl font-extrabold text-slate-900">{service.title}</h1>
          <p className="text-slate-500 mt-1">Complete the form below to confirm your booking.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Duration */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <Step num="1" title="Select Duration" />
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Amount</label>
                <input type="number" name="duration" min="1" value={form.duration} onChange={set}
                  className={inputCls} />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Unit</label>
                <select name="unit" value={form.unit} onChange={set} className={inputCls}>
                  <option value="hour">Hour(s)</option>
                  <option value="day">Day(s)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <Step num="2" title="Select Location" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Division *</label>
                <select name="division" value={form.division} onChange={set} required className={inputCls}>
                  <option value="">Select Division</option>
                  {divisions.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">District *</label>
                <input name="district" placeholder="e.g. Gazipur" value={form.district} onChange={set} required className={inputCls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">City *</label>
                <input name="city" placeholder="e.g. Tongi" value={form.city} onChange={set} required className={inputCls} />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Area (optional)</label>
                <input name="area" placeholder="e.g. Mirpur" value={form.area} onChange={set} className={inputCls} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wide">Full Address *</label>
              <textarea name="address" placeholder="House no, road, block..." value={form.address} onChange={set} required rows={2} className={inputCls} />
            </div>
          </div>

          {/* Cost summary */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <Step num="3" title="Cost Summary" />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-slate-400 text-sm">{form.duration} {form.unit}(s) × ৳{service.charge.toLocaleString()}</p>
                <p className="text-4xl font-extrabold text-teal-400 mt-1">৳{totalCost.toLocaleString()}</p>
              </div>
              <span className="bg-teal-500/20 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-500/30">
                Status: Pending
              </span>
            </div>
          </div>

          <button type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-teal-900/20 text-base">
            Confirm Booking →
          </button>
        </form>
      </div>
    </div>
  );
}
