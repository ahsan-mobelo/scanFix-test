/** Deliberate missing pool: construct a new client-like object on every call. */

type FakeClient = { query: (sql: string) => Promise<unknown[]> };

function createNewConnection(): FakeClient {
  return {
    query: async (sql: string) => {
      return [{ sql }];
    },
  };
}

export async function runQueryNoPooling(sql: string): Promise<unknown[]> {
  const client = createNewConnection();
  return client.query(sql);
}
