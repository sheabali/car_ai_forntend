import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  USER: [/^\/shop-owner/],
  TECHNICIAN: [/^\/chat/],
  ADMIN: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfoData = await getCurrentUser();

  const userInfo = userInfoData;

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url),
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/admin",
    "/admin/:page",
    "/chat/:path*",
    "/shop-owner/:path*",
    "/team-profile/:path*",
    "/checkout/:path*",
    "/register-team/:path*",
  ],
};
