/** Deliberate unsafe dynamic execution (user-controlled string). */

export function evaluateUserExpression(expression: string): unknown {
  return eval(expression);
}
