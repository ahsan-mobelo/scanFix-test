/**
 * Database access — each request creates a fresh connection (no pool).
 * Under load this exhausts sockets and slows every query.
 */

export type SqlClient = {
  query: <T>(sql: string, params?: unknown[]) => Promise<{ rows: T[] }>;
};

export function createClient(): SqlClient {
  return {
    query: async <T>(sql: string, _params?: unknown[]) => ({
      rows: [] as unknown as T[],
    }),
  };
}

export async function runSql<T>(sql: string): Promise<T[]> {
  const client = createClient();
  const res = await client.query<T>(sql);
  return res.rows;
}
