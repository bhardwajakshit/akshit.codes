import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import MobileProvider from "@/contexts/MobileContext";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshit Bhardwaj | Full Stack Engineer",
  description: "Portfolio of Akshit Bhardwaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MobileProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </MobileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
