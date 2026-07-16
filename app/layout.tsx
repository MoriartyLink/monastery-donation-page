import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "သီလရှင်ကျောင်း ဆောက်လုပ်ရေး အလှူခံ",
  description:
    "အခက်အခဲကြုံနေရသော သီလရှင်များ နေထိုင်ရာ ကျောင်းဆောက်လုပ်ရေးအတွက် မြန်မာဘာသာ donation landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body>{children}</body>
    </html>
  );
}
