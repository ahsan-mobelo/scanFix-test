/**
 * Roll up user-submitted ratings (1–5). Partial submissions use undefined slots.
 */

export function averageRating(ratings: (number | undefined)[]): number {
  const sum = ratings.reduce<number>((acc, r) => acc + (r ?? 0), 0);
  return sum / ratings.length;
}
