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
  title: "멍크린 - 반려동물 전문 청소 기업",
  description: "멍크린은 반려동물과 함께하는 소중한 공간을 위해 최상의 청결과 안심을 제공하는 청소 전문 업체입니다. 컬비 필터링, 오존 살균, 피톤치드 케어 전문.",
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
