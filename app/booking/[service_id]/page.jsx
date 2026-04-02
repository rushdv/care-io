import BookingForm from "./BookingForm";
import PrivateRoute from "@/components/PrivateRoute";
import { getServiceById } from "@/lib/services";
import { notFound } from "next/navigation";

export const metadata = { title: "Book Service – Care.xyz" };

export default function BookingPage({ params }) {
  const service = getServiceById(params.service_id);
  if (!service) notFound();

  return (
    <PrivateRoute>
      <BookingForm service={service} />
    </PrivateRoute>
  );
}
