import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import WhatsAppButton from '@/components/WhatsAppButton';
import TargetCursor from '@/components/TargetCursor';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adekunle - Owoseni",
  description: "Adekunle Owoseni Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <TargetCursor 
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
          <Navigation />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
