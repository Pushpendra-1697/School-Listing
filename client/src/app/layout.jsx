import "@/src/styles/globals.css";
import { Source_Sans_3 } from "next/font/google";
import FaviconLight from "@/public/asserts/favicon-light.png";
import FaviconDark from "@/public/asserts/favicon-dark.png";

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: FaviconLight.src,
        href: FaviconLight.src,
        type: "image/svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: FaviconDark.src,
        href: FaviconDark.src,
        type: "image/svg",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};


export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={`${SourceSans3.className} min-h-screen font-[400]`}>
        {children}
      </body>
    </html>
  );
}
