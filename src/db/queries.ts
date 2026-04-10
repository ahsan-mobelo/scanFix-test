/**
 * Order lookup — builds SQL from request parameters.
 */

export function findOrdersByUserDisplayName(displayName: string): string {
  return `SELECT * FROM orders WHERE user_name = '${displayName}' ORDER BY created_at DESC`;
}
