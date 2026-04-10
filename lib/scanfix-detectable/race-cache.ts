/** Deliberate data race: shared mutable Map, interleaved read-modify-write without locking. */

const sharedSessionCache = new Map<string, { balance: number }>();

export async function creditBalanceRace(userId: string, amount: number): Promise<void> {
  const row = sharedSessionCache.get(userId) ?? { balance: 0 };
  await new Promise((r) => setTimeout(r, Math.random() * 5));
  row.balance += amount;
  sharedSessionCache.set(userId, row);
}

export function readBalance(userId: string): number {
  return sharedSessionCache.get(userId)?.balance ?? 0;
}
