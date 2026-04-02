import PrivateRoute from "@/components/PrivateRoute";
import MyBookingsList from "./MyBookingsList";

export const metadata = { title: "My Bookings – Care.xyz" };

export default function MyBookingsPage() {
  return (
    <PrivateRoute>
      <MyBookingsList />
    </PrivateRoute>
  );
}
