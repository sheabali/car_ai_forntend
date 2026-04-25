import { decodeJwt } from "jose";
import { NextRequest, NextResponse } from "next/server";

interface IUser {
  id: string;
  email: string;
  role: string;
}

const roleBasedRoutes: Record<string, string[]> = {
  "/admin/dashboard": ["admin"],
  "/user/dashboard": ["user", "admin"],
};

const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("token")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const { pathname } = request.nextUrl;

  // 1. No tokens at all — redirect to login if on a protected route
  // if (!accessToken && !refreshToken) {
  //   if (authRoutes.includes(pathname)) {
  //     return NextResponse.next(); // allow auth pages
  //   }
  //   return NextResponse.redirect(
  //     new URL(`/login?redirect=${pathname}`, request.url),
  //   );
  // }

  let user: IUser | null = null;

  // 2. Try to decode access token
  if (accessToken) {
    try {
      user = decodeJwt(accessToken) as IUser;
    } catch {
      // Access token invalid — if no refresh token, force login
      if (!refreshToken) {
        return NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url),
        );
      }
      // If refresh token exists, let your API route handle the refresh
      // and redirect back. You could also call your refresh endpoint here.
    }
  }

  // 3. Authenticated users should not access auth routes
  if (user && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 4. Role-based access control
  // if (user && roleBasedRoutes[pathname]) {
  //   const allowedRoles = roleBasedRoutes[pathname];
  //   if (!allowedRoles.includes(user.role)) {
  //     return NextResponse.redirect(new URL("/unauthorized", request.url));
  //   }
  // }

  // 5. All checks passed — continue to the requested route
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/admin/:path*",
    "/user/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
};
