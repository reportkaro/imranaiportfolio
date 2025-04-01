import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ChatProvider } from '../context/ChatContext';
import { ChatToggleProvider } from '../hooks/useChatToggle';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// Create a client-side Providers component
import ClientProviders from '../components/ClientProviders';

export const metadata: Metadata = {
  title: "Imran Mohammed | AI Experience Designer",
  description: "Product designer specializing in creating human-centered AI experiences that balance technical innovation with usability and ethics.",
  keywords: ["AI design", "UX design", "product design", "AI experience", "conversational UI", "ethical AI", "interaction design"],
  authors: [{ name: "Imran Mohammed" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ClientProviders>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
