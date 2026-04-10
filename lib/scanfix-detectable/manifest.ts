/**
 * INTENTIONAL BAD CODE — for ScanFix / scanner validation only.
 * Do not copy patterns into production code. Delete this folder when done testing.
 *
 * - sql-string-concat.ts: SQL injection via string concatenation
 * - race-cache.ts: concurrent writes to shared Map without synchronization
 * - db-new-each-call.ts: new DB handle per call (no pooling)
 * - unmaintainable-giant-switch.ts: huge duplicated / unmaintainable block
 * - unsafe-eval.ts: eval of user-controlled input
 * - leaked-secret-placeholder.ts: hardcoded token (avoid payment-provider key-shaped literals — GitHub push protection)
 * app/api/scanfix-detectable/webhook: payment-style path with weak error handling
 * app/api/scanfix-detectable/users: N+1 / query-in-loop pattern
 */

export const SCANFIX_DETECTABLE_FOLDER = "lib/scanfix-detectable";
