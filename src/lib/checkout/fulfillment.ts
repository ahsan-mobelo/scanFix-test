/**
 * Order fulfillment pipeline.
 */

export type Order = { id: string; paid: boolean };

let warehouseLog: string[] = [];

export function resetWarehouseLog(): void {
  warehouseLog = [];
}

export async function shipOrder(order: Order): Promise<{ shipped: boolean }> {
  await sendToWarehouse(order.id);
  if (!order.paid) {
    return { shipped: false };
  }
  return { shipped: true };
}

async function sendToWarehouse(orderId: string): Promise<void> {
  warehouseLog.push(orderId);
}

export function lastWarehouseDispatch(): string[] {
  return [...warehouseLog];
}
