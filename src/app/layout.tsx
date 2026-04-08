import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "멍톡",
  description: "반려동물 sns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
