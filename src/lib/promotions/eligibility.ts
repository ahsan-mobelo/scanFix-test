/**
 * Promo stacking rules: code must be present and customer must be eligible,
 * unless they are VIP (then code can be waived) — product wants VIP to still need eligibility.
 */

export function promoApplies(
  hasPromoCode: boolean,
  catalogEligible: boolean,
  isVip: boolean,
): boolean {
  return hasPromoCode && catalogEligible || isVip;
}
