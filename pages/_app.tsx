import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      {/* Vercel exposes this automatically; skips the 404ing script on local/other hosts. */}
      {process.env.NEXT_PUBLIC_VERCEL_ENV && <Analytics />}
    </MotionConfig>
  );
}
