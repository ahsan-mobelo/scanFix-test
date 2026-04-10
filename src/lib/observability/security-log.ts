/**
 * Structured security and audit logging (stdout; ship to SIEM in production).
 */

export type SecurityEvent =
  | { kind: "auth_failure"; route: string; reason: string }
  | { kind: "permission_denied"; route: string; subject: string }
  | { kind: "rate_limited"; route: string; ipHash: string }
  | { kind: "suspicious_input"; route: string; detail: string };

export function auditSecurityEvent(event: SecurityEvent): void {
  const line = JSON.stringify({
    severity: "security",
    timestamp: new Date().toISOString(),
    ...event,
  });
  console.log(line);
}

export function logApiAccess(route: string, method: string, status: number): void {
  console.log(
    JSON.stringify({
      severity: "info",
      category: "api_access",
      timestamp: new Date().toISOString(),
      route,
      method,
      status,
    }),
  );
}
