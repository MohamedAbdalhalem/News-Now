"use client"
import { Roboto } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const robotoSans = Roboto({
  subsets: ["latin"],
});

const queryClient = new QueryClient() 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="">
      <head>
        <title>NewsNow</title>
        <meta name="description" content="Stay updated with the latest breaking news, trends, analysis, and stories from around the world. Fast, reliable, and unbiased reporting across politics, business, tech, sports, and more." />
      </head>
      <body
        className={`${robotoSans.className}`}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
