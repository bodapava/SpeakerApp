import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Header() {
  let time = "";
  const [timer, setTimer] = useState("");

  setTimeout(() => {
    setTimer(new Date().toLocaleTimeString());
    return time;
  }, 1000);

  return (
    <>
      <div className={styles.logo}>
        <div className={styles.padding}>
          <h4>CINCINNATI, OHIO</h4>
          <p>{timer}</p>
        </div>
        <div>
          <Image
            src={"/public/SVCClogo.png"}
            alt="logo"
            width={10}
            height={10}
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
    </>
  );
}
