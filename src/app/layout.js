import "./globals.css";
import "../jasperseoCSS/index.css";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import "@/css/satoshi.css";

export const metadata = {
  title: "Jasper SEO",
  description:
    "Introducing JasperSEO’s revolutionary Content Editor – your all-in-one solution for seamless content creation! Say goodbye to hours spent searching the internet for Keywords on Expensive tools and fretting over your content’s quality. With our powerful tool by your side, you’ll become a content wizard in no time.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className="home page-template page-template-elementor_canvas page page-id-747 wp-custom-logo wp-embed-responsive elementor-default elementor-template-canvas elementor-kit-57 elementor-page elementor-page-747 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit"
          data-elementor-device-mode="desktop"
          suppressHydrationWarning={true}
        >
          <NextTopLoader showSpinner={false} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
