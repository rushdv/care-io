"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export default function RegisterPage() {
  const { register, user } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ nid: "", name: "", email: "", contact: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (user) { router.push("/"); return null; }

  const validate = () => {
    const e = {};
    if (!form.nid) e.nid = "NID is required";
    if (!form.name) e.name = "Name is required";
    if (!form.contact) e.contact = "Contact is required";
    if (!passwordRegex.test(form.password)) e.password = "Min 6 chars, 1 uppercase & 1 lowercase required";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await register({ name: form.name, email: form.email, password: form.password });
      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ name, label, placeholder, type = "text" }) => (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); setErrors({ ...errors, [name]: "" }); }}
        className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
          errors[name] ? "border-red-300 bg-red-50" : "border-slate-200"
        }`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>⚠</span>{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-teal-500 to-teal-400"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
                <span className="font-bold text-xl text-slate-800">Care<span className="text-teal-500">.xyz</span></span>
              </Link>
              <h1 className="text-2xl font-extrabold text-slate-900">Create your account</h1>
              <p className="text-slate-500 text-sm mt-1">Join thousands of families on Care.xyz</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Field name="nid" label="NID Number" placeholder="National ID number" />
              <Field name="name" label="Full Name" placeholder="Your full name" />
              <Field name="email" label="Email Address" placeholder="you@example.com" type="email" />
              <Field name="contact" label="Contact Number" placeholder="+880 1XXX-XXXXXX" type="tel" />
              <Field name="password" label="Password" placeholder="Min 6 chars, uppercase & lowercase" type="password" />
              <Field name="confirm" label="Confirm Password" placeholder="Re-enter your password" type="password" />

              <button type="submit" disabled={loading}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition shadow-md shadow-teal-900/20 disabled:opacity-60 mt-2">
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 font-semibold hover:text-teal-500 transition">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
