export type Order = {
  id: string;
  status: "Delivered" | "Processing" | "Cancelled";
  date: string;
};