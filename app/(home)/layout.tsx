import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  Iosevka_Charon,
  Iosevka_Charon_Mono,
  Jaro
} from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

const iosevkaCharon = Iosevka_Charon({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-iosevka",
});

const jaro = Jaro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jaro",
});

const iosevkaCharonMono = Iosevka_Charon_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-iosevka-mono",
});

export const metadata: Metadata = {
  title: "Shantha Kumar | Full-Stack AI Developer",
  description:
    "Portfolio of Shantha Kumar — Full-Stack Developer and AI Integrator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${ibmPlexSans.variable}
        ${iosevkaCharon.variable}
        ${iosevkaCharonMono.variable}
        ${jaro.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}