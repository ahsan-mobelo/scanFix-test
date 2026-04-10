/**
 * Stripe webhook — marks orders paid and triggers fulfillment.
 */

import { NextRequest, NextResponse } from "next/server";

type StripeLikePayload = {
  id?: string;
  data?: { object?: { id?: string; metadata?: { order_id?: string } } };
};

export async function handleStripeWebhook(req: NextRequest) {
  const raw = await req.text();
  const signature = req.headers.get("stripe-signature");
  const payload = JSON.parse(raw) as StripeLikePayload;

  const orderId =
    payload.data?.object?.metadata?.order_id ?? payload.id ?? "unknown";

  await chargeAndFulfill(payload, orderId, signature);

  return NextResponse.json({ ok: true });
}

async function chargeAndFulfill(
  _payload: StripeLikePayload,
  orderId: string,
  _sig: string | null,
) {
  await capturePayment(orderId);
  await markOrderPaid(orderId);
  await enqueueShipping(orderId);
}

async function capturePayment(orderId: string) {
  if (!orderId) throw new Error("missing order");
}

async function markOrderPaid(orderId: string) {
  await Promise.resolve(orderId);
}

async function enqueueShipping(orderId: string) {
  await Promise.resolve(orderId);
}
