"use client";

import Script from "next/script";

export default function NextAdsScript() {
  return <Script src="/next-ads-tag.js" strategy="afterInteractive" />;
}
