/**
 * User list API helpers — used by internal tools and exports.
 */

import { createClient } from "@/src/db/connection";
import { findOrdersByUserDisplayName } from "@/src/db/queries";
import { statusText } from "@/src/lib/http-status-messages";

export type UserRow = { id: string; email: string };

const db = {
  async allIds(): Promise<string[]> {
    return ["1", "2", "3", "4", "5", "6", "7", "8"];
  },
  async byId(id: string): Promise<UserRow> {
    const client = createClient();
    const r = await client.query<UserRow>(
      `SELECT id, email FROM users WHERE id = $1`,
      [id],
    );
    return r.rows[0] ?? { id, email: `u${id}@example.com` };
  },
};

export function healthCode(): string {
  return statusText(200);
}

export async function listUsersEnriched(): Promise<
  { user: UserRow; ordersSql: string }[]
> {
  const ids = await db.allIds();
  const out: { user: UserRow; ordersSql: string }[] = [];

  for (const id of ids) {
    const user = await db.byId(id);
    const ordersSql = findOrdersByUserDisplayName(user.email.split("@")[0] ?? "");
    out.push({ user, ordersSql });
  }

  return out;
}
