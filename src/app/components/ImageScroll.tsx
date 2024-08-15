import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function ImageScroll({
  primaryImage,
  secondaryImage,
  speakeralt,
}: any) {
  const imageRef =
    useRef<HTMLImageElement | null>(null);
  const setISInView = function () {
    const rect =
      imageRef.current?.getBoundingClientRect();
    return rect
      ? rect.top >= 0 &&
          rect.bottom <= window.innerHeight
      : false;
  };
  const [inView, setView] = useState(true);
  useEffect(() => {
    setView(setISInView);
    window.addEventListener(
      "scroll",
      scrollHandler
    );
    return () => {
      window.removeEventListener(
        "scroll",
        scrollHandler
      );
    };
  });
  function scrollHandler() {
    setView(setISInView);
  }
  return (
    <img
      ref={imageRef}
      src={inView ? primaryImage : secondaryImage}
      height={300}
      alt={speakeralt}></img>
  );
}
