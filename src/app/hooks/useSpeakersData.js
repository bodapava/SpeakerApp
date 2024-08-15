import { useEffect, useState } from "react";
import { speakerData } from "speakers/SpeakerData.js";

export default function useSpeakerData() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(speakerData);
  }, []);

  return { data };
}
