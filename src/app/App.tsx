import Link from "next/link";
import styles from "./page.module.css";
import React from "react";
const setConfigValue = {
  showSpeakerSpeakingDays: true,
};
export const ConfigValue = React.createContext(
  setConfigValue
);
export default function App() {
  return (
    <>
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
    </>
  );
}
