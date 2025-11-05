import { useEffect, useState } from "react";

const AbdullahText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "Abdullah";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center  text-foreground">
      <h1
        className="text-8xl md:text-9xl font-bold tracking-tight"
        style={{ fontFamily: "Space Mono" }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};
export default AbdullahText;
