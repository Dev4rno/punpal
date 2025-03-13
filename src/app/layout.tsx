import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
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
// Core metadata configuration
const APP_NAME = "PunPal";
const APP_DEFAULT_TITLE = "PunPal - Live Joke Battles & Leaderboards";
const APP_TITLE_TEMPLATE = "%s - PunPal";
const APP_DESCRIPTION =
    "Vote on the best jokes, compete in live joke battles, and climb the leaderboard. The ultimate joke-rating showdown, powered by the internet’s best (and worst) comedians.";

// Asset paths
const ASSETS = {
    logo: "/assets/punpal-logo.png",
    favicon: "/favicon.ico",
    // svg: "/assets/punpal-logo.svg",
    banner: "/assets/og-image.png",
};

// Set the base URL for metadata generation
const metadataBaseURL =
    process.env.NODE_ENV === "production" ? new URL("https://punpal.net") : new URL("http://localhost:3000");

// Keywords for SEO
const KEYWORDS = [
    "jokes",
    "funny jokes",
    "joke battles",
    "pun battles",
    "live joke leaderboard",
    "joke competition",
    "best jokes",
    "worst jokes",
    "comedy voting",
    "humor leaderboard",
    "joke contest",
    "meme jokes",
    "dad jokes",
    "pun showdown",
    "stand-up comedy",
    "funny content",
    "crowdsourced comedy",
];

export const metadata: Metadata = {
    metadataBase: metadataBaseURL,

    // Basic metadata
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    keywords: KEYWORDS,

    // Application information
    applicationName: APP_NAME,
    generator: "Next.js",

    // Open Graph (for social media platforms)
    openGraph: {
        title: APP_DEFAULT_TITLE,
        description: APP_DESCRIPTION,
        url: metadataBaseURL.toString(),
        type: "website",
        images: [
            {
                url: new URL(ASSETS.banner, metadataBaseURL).toString(),
                width: 1200,
                height: 630,
                alt: "PunPal - Live Joke Battles & Leaderboards",
            },
        ],
    },

    // Twitter Card metadata
    twitter: {
        card: "summary_large_image",
        title: APP_DEFAULT_TITLE,
        description: APP_DESCRIPTION,
        images: [new URL(ASSETS.banner, metadataBaseURL).toString()],
        creator: "@punpal_net",
        site: "@punpal_net",
    },

    // Web app & Favicon icons
    icons: {
        icon: [
            { rel: "icon", url: new URL("/favicon.ico", metadataBaseURL).toString(), sizes: "any" }, // Favicon
            {
                rel: "apple-touch-icon",
                url: new URL("/assets/punpal-logo.png", metadataBaseURL).toString(),
                sizes: "266x292",
            }, // Mobile icon
        ],
    },

    // Robots and verification
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Additional metadata
    category: "Entertainment",
    classification: "Comedy & Humor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <PlausibleProvider domain="punpal.net">{children}</PlausibleProvider>
            </body>
        </html>
    );
}
