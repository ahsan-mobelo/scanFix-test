import { NextResponse } from "next/server";
import { listUsersEnriched } from "@/src/api/users";

export async function GET() {
  const rows = await listUsersEnriched();
  return NextResponse.json({ count: rows.length });
}
