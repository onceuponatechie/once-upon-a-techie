import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Once Upon a Techie | Creator · Builder · Storyteller",
  description:
    "A premium personal portfolio — products, people, and the stories that connect them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-text-primary bg-lightOatmeal min-h-screen">
        {children}
      </body>
    </html>
  );
}
