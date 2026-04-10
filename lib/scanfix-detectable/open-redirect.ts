/**
 * Deliberate open redirect: return user-controlled target without allowlist.
 */

export function nextUrlFromQueryUnsafe(next: string | null): string {
  if (!next || next.length === 0) return "/";
  return next;
}
