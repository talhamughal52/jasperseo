import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/pricing",
    "/contact",
    "/payment/success",
    "/payment/cancel",
    "/api/webhooks/clerk, '/api/webhooks/stripe'",
  ],
});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
