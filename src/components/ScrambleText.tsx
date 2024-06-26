import { useEffect, useRef } from "react";
import { randomInt, scrambleWord } from "../../utils/util";

const ScrambleText = ({ word, trigger }: { word: string; trigger: boolean }) => {
  const ref = useRef<HTMLDivElement>(null!);
  const wordCounts = [...word].map(() => randomInt(5, 10));
  const resWord = [...word].map(() => "");

  useEffect(() => {
    if (!ref.current) return;

    if (trigger) {
      let completeCount: number;
      const timer = setInterval(() => {
        completeCount = 0;

        wordCounts.forEach((num, i) => {
          if (num === 0) {
            resWord[i] = word[i];
            completeCount += 1;
          }
          if (num > 0) {
            resWord[i] = scrambleWord[randomInt(0, 47)];
            wordCounts[i] -= 1;
          }
        });

        ref.current.textContent = resWord.join("");
        if (completeCount === wordCounts.length) {
          clearInterval(timer);
        }
      }, 100);
    }
  }, [trigger]);

  return <p ref={ref} />;
};

export default ScrambleText;
