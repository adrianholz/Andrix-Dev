import "./globals.css";
import { poppins, chakraPetch, vudotronic, sourceCode } from "./fonts";
import Transition from "../components/ui/Transition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${chakraPetch.variable} ${sourceCode.variable} ${vudotronic.variable}`}
    >
      <body>
        <Transition />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
