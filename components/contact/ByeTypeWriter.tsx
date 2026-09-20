"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const WORDS = ["ধন্যবাদ", "THANKS", "धन्यवाद", "شکریہ"];
const TYPE_SPEED = 100;
const DELETE_SPEED = 100;
const PAUSE = 1000;

const toGraphemes = (word: string): string[] =>
  typeof Intl.Segmenter === "function"
    ? Array.from(
      new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(word),
      (part) => part.segment,
    )
    : Array.from(word);

const CHARS = WORDS.map(toGraphemes);

const ByeTypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [count, setCount] = useState(0); // how many characters are visible
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const finishedTyping = !deleting && count === CHARS[wordIndex].length;
    const delay = finishedTyping ? PAUSE : deleting ? DELETE_SPEED : TYPE_SPEED;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (deleting && count === 0) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % WORDS.length);
      } else {
        setCount((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, wordIndex]);

  return (
    <div className="font-bold text-brand hidden sm:block">
      <span className="sr-only">Thanks</span>

      {/* Animated version */}
      <span aria-hidden="true" className="motion-reduce:hidden">
        {CHARS[wordIndex].slice(0, count).join("")}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          🙏
        </motion.span>
      </span>

      {/* Static version for visitors who prefer reduced motion */}
      <span aria-hidden="true" className="hidden motion-reduce:inline">
        THANKS 🙏
      </span>
    </div>
  );
};

export default ByeTypeWriter;