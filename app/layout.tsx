import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZipDemon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cdn.counter.dev/script.js"
          data-id="88c267ea-406e-4a19-8f4a-e1875a9795ce"
          data-utcoffset="1"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
