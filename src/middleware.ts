import { auth } from "@/auth";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { locales, routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const publicRoutes = [
  "/",
  "/about",

  // translated routes
  "/acerca",
];

const authRoutes = ["/login", "/iniciar-sesion"];

const testPathnameRegex = (pages: string[], pathName: string): boolean => {
  // Replace dynamic routes with regex
  const pathsWithParams = pages.map((p) => p.replace(/\[.*?\]/g, "[^/]+"));

  return RegExp(
    `^(/(${locales.join("|")}))?(${pathsWithParams.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i",
  ).test(pathName);
};

const authMiddleware = auth((req) => {
  const isAuthPage = testPathnameRegex(authRoutes, req.nextUrl.pathname);
  const isLogged = !!req.auth;

  // Redirect to login page if not authenticated
  if (!isLogged && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to home page if authenticated and trying to access auth pages
  if (isLogged && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return intlMiddleware(req);
});

const middleware = (req: NextRequest) => {
  const isPublicPage = testPathnameRegex(publicRoutes, req.nextUrl.pathname);
  const isAuthPage = testPathnameRegex(authRoutes, req.nextUrl.pathname);

  if (isAuthPage) {
    return (authMiddleware as any)(req);
  }

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
};

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

export default middleware;
