import { NextResponse } from "next/server";

/**
 * Deliberate N+1 / query-in-loop: one query per id instead of batching.
 */

const fakeDb = {
  async allUserIds(): Promise<string[]> {
    return ["1", "2", "3", "4", "5"];
  },
  async userById(id: string): Promise<{ id: string; email: string }> {
    return { id, email: `user-${id}@example.com` };
  },
};

export async function GET() {
  const ids = await fakeDb.allUserIds();
  const users: { id: string; email: string }[] = [];
  for (const id of ids) {
    const u = await fakeDb.userById(id);
    users.push(u);
  }
  return NextResponse.json(users);
}
