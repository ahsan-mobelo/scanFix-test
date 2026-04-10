/**
 * Free shipping when order value crosses threshold (pre-tax).
 */

export function qualifiesForFreeShipping(
  merchandiseSubtotal: number,
  shippingFee: number,
  threshold: number,
): boolean {
  return merchandiseSubtotal >= threshold;
}
