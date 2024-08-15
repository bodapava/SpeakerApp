"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.margin}>
      {" "}
      <h4>Hello</h4>
      <p>
        Code Camp is a community event where
        developers learn from fellow developers.
        We also have developer related topics that
        include software branding, legal issues
        around software as well as other topics
        developers are interested in hearing
        about.
      </p>
    </div>
  );
}
