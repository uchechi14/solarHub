import "./globals.css";
import { rage, sora, soraBold } from "./utils/Font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${rage.variable} ${sora.variable} ${soraBold.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
