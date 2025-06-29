import { formatDateTime, getStatusStyle } from "../utils/formatOrderItem";

describe("formatDateTime", () => {
  test("formats a valid ISO string correctly", () => {
    const isoString = "2024-06-25T15:30:00.000Z";
    const result = formatDateTime(isoString);

    // Assuming timezone is UTC for consistency
    expect(result).toBe("2024-06-25 15:30");
  });

  test("pads single-digit hours and minutes with leading zeros", () => {
    const isoString = "2024-06-25T07:05:00.000Z";
    const result = formatDateTime(isoString);
    expect(result).toBe("2024-06-25 07:05");
  });

  test("handles midnight correctly (00:00)", () => {
    const isoString = "2024-06-25T00:00:00.000Z";
    const result = formatDateTime(isoString);
    expect(result).toBe("2024-06-25 00:00");
  });
});

describe("getStatusStyle", () => {
  test('returns green for "Delivered"', () => {
    const result = getStatusStyle("Delivered");
    expect(result).toEqual({ color: "green" });
  });

  test('returns orange for "Processing"', () => {
    const result = getStatusStyle("Processing");
    expect(result).toEqual({ color: "orange" });
  });

  test('returns red for "Cancelled"', () => {
    const result = getStatusStyle("Cancelled");
    expect(result).toEqual({ color: "red" });
  });

  test("returns black for unknown status", () => {
    // @ts-expect-error testing invalid status fallback
    const result = getStatusStyle("UnknownStatus");
    expect(result).toEqual({ color: "black" });
  });
});
