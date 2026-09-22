import { NextResponse } from "next/server";
import { ALL_MODELS } from "@/lib/models";

export async function GET() {
  return NextResponse.json({
    object: "list",
    data: ALL_MODELS.map((m) => ({ id: m.id, provider: m.provider, name: m.label })),
  });
}
