/**
 * Deliberate weak hashing: MD5 used as if it were a secure digest (scanner bait).
 */
import { createHash } from "node:crypto";

export function fingerprintInsecure(input: string): string {
  return createHash("md5").update(input).digest("hex");
}
