"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function BookButton({ serviceId }) {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(user ? `/booking/${serviceId}` : "/login")}
      className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3.5 rounded-xl transition shadow-md shadow-teal-900/20 text-sm"
    >
      Book This Service →
    </button>
  );
}
