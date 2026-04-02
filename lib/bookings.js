const KEY = "care_bookings";

export const getBookings = (uid) => {
  if (typeof window === "undefined") return [];
  const all = JSON.parse(localStorage.getItem(KEY) || "[]");
  return all.filter((b) => b.uid === uid);
};

export const saveBooking = (booking) => {
  const all = JSON.parse(localStorage.getItem(KEY) || "[]");
  all.push(booking);
  localStorage.setItem(KEY, JSON.stringify(all));
};

export const cancelBooking = (id, uid) => {
  const all = JSON.parse(localStorage.getItem(KEY) || "[]");
  const updated = all.map((b) =>
    b.id === id && b.uid === uid ? { ...b, status: "Cancelled" } : b
  );
  localStorage.setItem(KEY, JSON.stringify(updated));
};
