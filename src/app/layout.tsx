import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "PunPal",
    description: "The punny side of life",
    applicationName: "PunPal",
    keywords: "pun, joke, funny, humor, comedy, laughter",
    authors: [{ name: "Devarno", url: "https://devarno.com/" }],
    robots: "index, follow",

    // openGraph: {
    //     title: "PunPal",
    //     description: "The punny side of life",
    //     url: "https://punpal.com",
    //     images: [{url: ""}],
    //     siteName: "PunPal",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "PunPal",
    //     description: "The punny side of life",
    //     images: [{url: ""}],
    // },

    appleWebApp: {
        title: "PunPal",
        statusBarStyle: "black-translucent",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
