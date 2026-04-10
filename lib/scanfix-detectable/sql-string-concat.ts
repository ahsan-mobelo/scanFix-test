/** Deliberate SQL injection pattern: user input interpolated into query string. */

export function lookupUserByNameUnsafe(userSuppliedName: string): string {
  return `SELECT * FROM users WHERE name = '${userSuppliedName}'`;
}

export function deleteRowsUnsafe(table: string, rawWhere: string): string {
  return `DELETE FROM ${table} WHERE ${rawWhere}`;
}
