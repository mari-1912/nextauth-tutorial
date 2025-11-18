import authConfig from  "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, PublicRoutes } from '@/routes'

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl} = req;
    const isLoggedIn = !!req.auth
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = PublicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  /*
    OTRO EJEMPLO DE USO DEL MIDDLEWARE PUEDE SER PARA LLEVAR DIRECTAMENTE AL LOGIN SI NO ESTÁS AUTENTICADO
      if (!req.cookies.get("token") && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  */
 if (isApiAuthRoute) {
    return null
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }

})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}