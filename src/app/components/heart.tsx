"use client";
export default function Heart({
  sessionId,
  favorite,
  handleClick,
}: any) {
  return (
    <>
      <img
        src={
          favorite
            ? "./heart-red.png"
            : "./heart-dark.png"
        }
        alt="heart"
        height={20}
        onClick={handleClick}
        spkr-id={sessionId}
      />
    </>
  );
}
