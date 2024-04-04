import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import StyledComponentsRegistry from 'ravenna/app/lib/registry'
import NavBar from "ravenna/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Ravenna Strings Orchestras",
    description: "Ravenna Strings is a community orchestra based in Seattle. Our musicians perform classical and contemporary music quarterly.",
    keywords: "Ravenna Strings Orchestra, Ravenna Strings, Seattle, Orchestra, Classical Music, Contemporary Music, Community Orchestra",
    robots: "noindex, nofollow",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} h-screen`}>
        <StyledComponentsRegistry>
            <NavBar/>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
