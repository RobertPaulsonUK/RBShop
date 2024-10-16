import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Layout from "@/components/layouts";
import "./globals.css";
import "./custom.scss"
import "./animation.scss"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Suspense} from "react";
import Loading from "@/app/[locale]/loading";

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
export default async function RootLayout({
    children,
    params: {locale}
}: Readonly<{
  children: React.ReactNode;
    params: {locale: string};
}>) {
    const messages = await getMessages({locale});
      return (
        <html lang={locale}>
          <body
              suppressHydrationWarning={true}
              className={jost.className}>
                <NextIntlClientProvider messages={messages}>
                    <Layout locale={locale}>
                        <Suspense fallback={<Loading />}>
                        {children}
                        </Suspense>
                    </Layout>
                </NextIntlClientProvider>

          </body>
        </html>
      );
}

