/**
 * Subscription access — used by API routes and middleware.
 */

export function isSubscriptionActive(expiresAt: Date, now: Date): boolean {
  return now.getTime() > expiresAt.getTime();
}
