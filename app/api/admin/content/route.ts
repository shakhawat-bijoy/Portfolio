import { NextRequest, NextResponse } from "next/server";
import {
  getPortfolioContent,
  savePortfolioContent,
  PortfolioContent,
} from "@/lib/content";
import { isAdminToken } from "@/lib/auth";

function isAuthorized(request: NextRequest) {
  return isAdminToken(request.cookies.get("portfolio_admin")?.value);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getPortfolioContent());
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const content = (await request.json()) as PortfolioContent;
    if (!content || typeof content !== "object")
      throw new Error("Invalid content payload");
    return NextResponse.json(await savePortfolioContent(content));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to save content";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
