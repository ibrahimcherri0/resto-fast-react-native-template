import { Order } from "../types/order";

/**
 * Formats an ISO datetime string into a more readable format: "YYYY-MM-DD HH:mm"
 * @param isoString - The ISO datetime string to format
 * @returns A formatted date string in "YYYY-MM-DD HH:mm" format
 */
export const formatDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  // Extract date part as "YYYY-MM-DD"
  const day = date.toISOString().split("T")[0];
  // Extract hours and pad with leading zero if needed
  const hours = date.getUTCHours().toString().padStart(2, "0");
  // Extract minutes and pad with leading zero if needed
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  // Return combined formatted string
  return `${day} ${hours}:${minutes}`;
};

/**
 * Returns a style object with color based on the order status
 * @param status - The status of the order (Delivered, Processing, Cancelled)
 * @returns An object with the `color` property set accordingly
 */
export const getStatusStyle = (status: Order["status"]) => {
  switch (status) {
    case "Delivered":
      return { color: "green" }; // Green for delivered orders
    case "Processing":
      return { color: "orange" }; // Orange for orders in process
    case "Cancelled":
      return { color: "red" }; // Red for cancelled orders
    default:
      return { color: "black" }; // Default black for unknown statuses
  }
};
