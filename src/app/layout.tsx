import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoLines = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "멍크린 | 반려동물 전문 청소업체",
  description: "반려동물과 함께하는 공간, 청소가 달라야 합니다. 멍크린에서 전문가의 손길을 느껴보세요.",
  keywords: "반려동물청소, 강아지청소, 고양이청소, 이사청소, 거주청소, 아기맞이청소, 무지개청소",
  openGraph: {
    title: "멍크린 | 반려동물 전문 청소업체",
    description: "반려동물과 함께하는 공간, 청소가 달라야 합니다.",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoLines.className}>
        <Header />
        <main style={{ minHeight: "80vh", paddingTop: "80px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
