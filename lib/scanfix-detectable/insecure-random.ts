/**
 * Deliberate insecure randomness: Math.random for an ID that looks security-adjacent.
 */

export function makeSessionTokenUnsafe(): string {
  return `sess_${Math.random().toString(36).slice(2)}`;
}
