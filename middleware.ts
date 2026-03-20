import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const password = process.env.PREVIEW_PASSWORD;

  // Si pas de mot de passe configuré, aucune protection
  if (!password) return NextResponse.next();

  const basicAuth = request.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const decoded = atob(authValue);
    const pwd = decoded.slice(decoded.indexOf(":") + 1);

    if (pwd === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Accès protégé — contactez votre prestataire.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Aperçu client"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
