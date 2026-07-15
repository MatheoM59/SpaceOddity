import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const proxy = (request: NextRequest) => {
  const token = request.cookies.get("session")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token && pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/home/:path*"],
};
