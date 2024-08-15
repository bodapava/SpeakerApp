"use client";
import { Button, Card } from "react-bootstrap";
import styles from "./speakers.module.css";
import Heart from "../components/heart";
import { useState } from "react";
import ImageScroll from "../components/ImageScroll";

export default function SpeakerCard({
  speaker,
}: any) {
  const [fav, setFav] = useState(
    speaker.favorite
  );

  return (
    <>
      {/* Array of Picture IDs */}
      {
        <div
          key={speaker.id}
          className={styles.imageSize}>
          <ImageScroll
            primaryImage={`/speakers/Speaker-${speaker.id}.jpg`}
            secondaryImage={`/speakers/bw/Speaker-${speaker.id}.jpg`}
            speakeralt={speaker.id}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <div>
              {speaker.firstName}{" "}
              {speaker.lastName}
            </div>
            <div className={styles.heart}>
              <Heart
                sessionId={speaker.id}
                favorite={fav}
                handleClick={() =>
                  setFav(!fav)
                }></Heart>
            </div>
          </div>
          <p>{speaker.bio}</p>
        </div>
      }
    </>
  );
}
