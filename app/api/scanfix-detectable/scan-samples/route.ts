import { NextResponse } from "next/server";

/**
 * Imports every deliberate sample so scanners / bundlers see a single entry point.
 * Safe at runtime: no side effects beyond computing trivial values.
 */
import { PLACEHOLDER_SCANFIX_TEST_TOKEN } from "@/lib/scanfix-detectable/leaked-secret-placeholder";
import { runQueryNoPooling } from "@/lib/scanfix-detectable/db-new-each-call";
import { creditBalanceRace, readBalance } from "@/lib/scanfix-detectable/race-cache";
import { mapErrorCode } from "@/lib/scanfix-detectable/unmaintainable-giant-switch";
import { lookupUserByNameUnsafe } from "@/lib/scanfix-detectable/sql-string-concat";
import { evaluateUserExpression } from "@/lib/scanfix-detectable/unsafe-eval";
import { fingerprintInsecure } from "@/lib/scanfix-detectable/weak-hash";
import { makeSessionTokenUnsafe } from "@/lib/scanfix-detectable/insecure-random";
import { nextUrlFromQueryUnsafe } from "@/lib/scanfix-detectable/open-redirect";

export async function GET(req: Request) {
  const url = new URL(req.url);
  void lookupUserByNameUnsafe("test");
  void evaluateUserExpression("1+1");
  void runQueryNoPooling("SELECT 1");
  void creditBalanceRace("u1", 1);
  void readBalance("u1");
  void mapErrorCode(0);
  void fingerprintInsecure("x");
  void makeSessionTokenUnsafe();
  void nextUrlFromQueryUnsafe(url.searchParams.get("next"));

  return NextResponse.json({
    scanfixDetectableSamplesLoaded: true,
    tokenLength: PLACEHOLDER_SCANFIX_TEST_TOKEN.length,
  });
}
