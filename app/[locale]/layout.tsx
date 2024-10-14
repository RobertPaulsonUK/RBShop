import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Layout from "@/components/layouts";
import "./globals.css";
import "./custom.scss"
import "./animation.scss"

const jost = Jost({
    subsets: ['latin'],
    weights: ['400', '500', '600', '700'],
    styles: ['normal'],
});

export const metadata: Metadata = {
    title: {
        template: '%s | Strum',
        default: 'Home',
    },
    description: "Some text from layout"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
          suppressHydrationWarning={true}
          className={jost.className}>
    <Layout>
        {children}
    </Layout>

      </body>
    </html>
  );
}

