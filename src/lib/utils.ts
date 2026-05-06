export function cn(...inputs: unknown[]): string {
  return inputs
    .flatMap((input) => {
      if (!input) {
        return [];
      }

      if (typeof input === "string" || typeof input === "number") {
        return [String(input)];
      }

      if (Array.isArray(input)) {
        return [cn(...input)];
      }

      if (typeof input === "object") {
        return Object.entries(input as Record<string, unknown>)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return [];
    })
    .filter(Boolean)
    .join(" ");
}
