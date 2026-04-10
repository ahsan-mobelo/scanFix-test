import { NextRequest, NextResponse } from "next/server";

/**
 * Deliberate weak handling: payment-style flow where failures are not contained
 * (mirrors "webhook failure not handled" style samples).
 */

export async function POST(req: NextRequest) {
  const body = await req.json();
  const signature = req.headers.get("stripe-signature");
  await processPaymentWebhook(body, signature);
  return NextResponse.json({ received: true });
}

async function processPaymentWebhook(payload: unknown, signature: string | null) {
  const orderId = extractOrderId(payload);
  await chargeCustomer(payload);
  await markPaidInDatabase(orderId);
  await shipOrder(orderId);
}

function extractOrderId(payload: unknown): string {
  if (payload && typeof payload === "object" && "orderId" in payload) {
    return String((payload as { orderId: unknown }).orderId);
  }
  throw new Error("invalid payload");
}

async function chargeCustomer(_payload: unknown) {
  if (!_payload) throw new Error("charge failed");
}

async function markPaidInDatabase(_orderId: string) {}

async function shipOrder(_orderId: string) {}
