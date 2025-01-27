// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(ar|en)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  // Use the routing configuration
  ...routing,
  
  // Always default to English for unsupported locales
  localePrefix: 'always',
  defaultLocale: 'en'
});

export const config = {
  // Match all paths except internal Next.js paths and static files
  matcher: ["/((?!_next|.*\\..*).*)"]
};