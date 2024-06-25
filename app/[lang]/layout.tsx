import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
// Default font
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

// Default metadata
export const metadata: Metadata = {
  title: "CV Daniel Jerusalmy",
  description: "A simple curriculum vitae webapp using NextJS w/ ShadcnUI",
};

// Root layout accepting language
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lang={params.lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
