import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

// ✅ ADD ARABIC FONTS
import { Amiri, Noto_Naskh_Arabic } from "next/font/google";
import { Providers } from "./providers";

const arabicAmiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-amiri",
});

const arabicNoto = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-noto",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo1.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }, // ✅ match your theme
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          // ✅ UPDATED BASE STYLE (Quran UI)
          "min-h-screen bg-bgMain text-textPrimary antialiased",

          // fonts
          fontSans.variable,
          arabicAmiri.variable,
          arabicNoto.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            {/* Main Content */}
            <main className="flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
