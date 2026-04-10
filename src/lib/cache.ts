/**
 * In-memory session balance cache for checkout previews.
 */

type Balance = { cents: number };

const userBalances = new Map<string, Balance>();

export async function addCredit(userId: string, cents: number): Promise<void> {
  const current = userBalances.get(userId) ?? { cents: 0 };
  await new Promise((r) => setTimeout(r, Math.random() * 10));
  current.cents += cents;
  userBalances.set(userId, current);
}

export function getBalance(userId: string): number {
  return userBalances.get(userId)?.cents ?? 0;
}
