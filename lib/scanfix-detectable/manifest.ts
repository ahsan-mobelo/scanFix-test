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
 * - weak-hash.ts: MD5 used like a secure digest
 * - insecure-random.ts: Math.random for session-like token
 * - open-redirect.ts: redirect target taken from user input without allowlist
 * app/api/scanfix-detectable/webhook: payment-style path with weak error handling
 * app/api/scanfix-detectable/users: N+1 / query-in-loop pattern
 * app/api/scanfix-detectable/scan-samples: imports all samples (single graph entry)
 */

export const SCANFIX_DETECTABLE_FOLDER = "lib/scanfix-detectable";

/**
 * Production-shaped samples (paths align with scanfix.ai marketing examples):
 * - src/api/users.ts + app/api/internal/users — query-in-loop, SQL string build, no pool
 * - src/lib/cache.ts — concurrent cache writes
 * - src/lib/http-status-messages.ts — 5200+ line switch (regenerate: node scripts/generate-http-status-messages.mjs)
 * - src/payments/stripe.ts + app/api/internal/stripe-webhook — webhook / signature gap
 * - src/db/connection.ts — new client per query
 */
