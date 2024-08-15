"use client";
import SpeakerCard from "./SpeakerCard";
import styles from "./speakers.module.css";
import Spinner from "react-bootstrap/Spinner";
import speakerData from "./SpeakerData";

import {
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { ConfigValue } from "../layout";

export default function SpeakerList() {
  const [speakersdata, setSpeakersData] =
    useState(speakerData);
  const [satConfig, setSatConfig] =
    useState(false);
  const [sunConfig, setSunConfig] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(ConfigValue);
  useEffect(() => {
    setLoading(true);
    new Promise<void>(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => setLoading(false));
    if (satConfig && sunConfig)
      setSpeakersData(
        speakerData
          .filter(
            (spkr) =>
              spkr.sat === true &&
              spkr.sun === true
          )
          .sort(function (a, b) {
            if (a.firstName < b.firstName)
              return -1;
            else if (a.firstName > b.firstName)
              return 1;
            return 0;
          })
      );
    else if (satConfig)
      setSpeakersData(
        speakerData
          .filter((spkr) => spkr.sat === true)
          .sort(function (a, b) {
            if (a.firstName < b.firstName)
              return -1;
            else if (a.firstName > b.firstName)
              return 1;
            return 0;
          })
      );
    else if (sunConfig)
      setSpeakersData(
        speakerData
          .filter((spkr) => spkr.sun === true)
          .sort(function (a, b) {
            if (a.firstName < b.firstName)
              return -1;
            else if (a.firstName > b.firstName)
              return 1;
            return 0;
          })
      );
    else setSpeakersData(speakerData);
  }, [satConfig, sunConfig]);
  return (
    <>
      {context &&
        context.showSpeakerSpeakingDays && (
          <div style={{ margin: "20px" }}>
            <input
              type="checkbox"
              name="Sat"
              onClick={() =>
                setSatConfig(!satConfig)
              }
            />
            <label htmlFor="Sat">
              Sat Speakers
            </label>
            <span style={{ marginLeft: "10px" }}>
              <input
                type="checkbox"
                name="Sun"
                onClick={() =>
                  setSunConfig(!sunConfig)
                }
              />
              <label htmlFor="Sat">
                Sun Speakers
              </label>
            </span>
          </div>
        )}
      {loading && <div>Loading......</div>}
      <div className={styles.wrapper}>
        {!loading &&
          speakersdata &&
          speakersdata.map((speaker) => (
            <div key={speaker.id}>
              <SpeakerCard
                speaker={speaker}></SpeakerCard>
            </div>
          ))}
      </div>
    </>
  );
}
