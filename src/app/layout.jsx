import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Medixa – Search & Compare Medicines in India",
  description:
    "Find medicines, compare prices and compositions, check side effects, and explore alternatives. Simple and reliable medicine information for Indian users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body
        className={`${roboto.variable} min-h-full flex flex-col font-roboto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
