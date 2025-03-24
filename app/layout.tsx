import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
