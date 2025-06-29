import { Order } from "../types/order";

// Each order includes a unique id, its current status, and the date time of the order
export const orders: Order[] = [
  { id: "12345", status: "Delivered", date: "2025-06-10T10:30:00" },
  { id: "67890", status: "Processing", date: "2025-06-14T14:45:00" },
  { id: "11223", status: "Cancelled", date: "2025-06-15T18:20:00" },
];