"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import logo from "/public/SVCClogo.png";
import Image from "next/image";
import Link from "next/link";
import {
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const setConfigValue = {
  showSpeakerSpeakingDays: true,
};
export const ConfigValue = React.createContext(
  setConfigValue
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let time = "";
  const [timer, setTimer] = useState("");

  setTimeout(() => {
    setTimer(new Date().toLocaleTimeString());
    return time;
  }, 1000);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className={styles.logo}>
            <div className={styles.padding}>
              <h4>CINCINNATI, OHIO</h4>
              <p>{timer}</p>
            </div>
            <div>
              <Image
                src={logo}
                alt="logo"
                sizes=""></Image>
              <h2>Silicon Valley Code Camp</h2>
              <input
                type="email"
                placeholder="Enter email"
                height={"30px"}
                className={styles.email}></input>
              <span>
                <button>Get Updates</button>
              </span>
            </div>
          </div>
        </header>
        <nav>
          <Link href="/" className={styles.text}>
            Home
          </Link>
          <ConfigValue.Provider
            value={setConfigValue}>
            <Link
              href="/speakers"
              className={styles.text}>
              Speakers
            </Link>
          </ConfigValue.Provider>
        </nav>
        {children}
      </body>
    </html>
  );
}
