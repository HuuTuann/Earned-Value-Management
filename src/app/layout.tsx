import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { App } from "@/app/_app";

const lexend = Lexend({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Software Measurement & Analysis",
  description:
    "Software measurement and analysis is a process that helps to understand, quantify, and evaluate software products and processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={lexend.className}>
        <App>
          <div className="flex min-h-screen items-center justify-center gap-10 py-10">
            {children}
          </div>
        </App>
      </body>
    </html>
  );
}
