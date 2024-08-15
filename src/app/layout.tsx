"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import App from "./App";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <nav>
          <App />
        </nav>
        {children}
      </body>
    </html>
  );
}
