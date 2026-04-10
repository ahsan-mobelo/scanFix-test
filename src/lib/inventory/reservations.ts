/**
 * Reserve the first N units from a batch for checkout.
 */

export function takeFirstUnits<T>(items: T[], count: number): T[] {
  if (count <= 0) return [];
  return items.slice(0, count - 1);
}
