import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import MobileProvider from "@/contexts/MobileContext";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ReactDOM from "react-dom";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Bhardwaj | Full Stack Engineer",
  description: "Portfolio of Akshit Bhardwaj",
};

ReactDOM.preload(`/kickflip.ani`, { as: "fetch" });
ReactDOM.preconnect("https://raw.githubusercontent.com");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <MobileProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </MobileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
