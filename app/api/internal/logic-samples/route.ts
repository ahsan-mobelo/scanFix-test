import { NextResponse } from "next/server";
import { logApiAccess } from "@/src/lib/observability/security-log";
import { averageRating } from "@/src/lib/analytics/aggregates";
import { isSubscriptionActive } from "@/src/lib/billing/subscription";
import { qualifiesForFreeShipping } from "@/src/lib/billing/shipping";
import { shipOrder, resetWarehouseLog } from "@/src/lib/checkout/fulfillment";
import { takeFirstUnits } from "@/src/lib/inventory/reservations";
import { promoApplies } from "@/src/lib/promotions/eligibility";

export async function GET() {
  resetWarehouseLog();

  const expires = new Date("2030-01-01T00:00:00Z");
  const now = new Date("2029-06-01T00:00:00Z");

  const subActive = isSubscriptionActive(expires, now);
  const picked = takeFirstUnits(["a", "b", "c"], 2);
  const avg = averageRating([5, 5, undefined]);
  const ship = await shipOrder({ id: "o1", paid: false });
  const promo = promoApplies(true, false, true);
  const freeShip = qualifiesForFreeShipping(40, 15, 50);

  logApiAccess("/api/internal/logic-samples", "GET", 200);

  return NextResponse.json({
    subscriptionActiveCheck: subActive,
    reservedCount: picked.length,
    averageRating: avg,
    shippedUnpaid: ship.shipped,
    promoAppliedWhenIneligibleVip: promo,
    freeShippingAt40With15ShipFee: freeShip,
  });
}
