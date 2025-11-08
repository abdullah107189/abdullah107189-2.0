import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Abdullah",
  description: "Md. abdullah all shamem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={quicksand.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter
              id="glass-distortion"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.006 0.006"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="104"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            <filter id="button_filter" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.01"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="100"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
