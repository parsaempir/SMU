"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// All paragraphs exactly as they were
const paragraphs = [
  "We build thoughtful digital experiences that balance clarity, speed, and visual consistency across every touchpoint of the brand journey. Our process begins with understanding the business model, the audience needs, and the small details that shape meaningful interaction. From structure and messaging to interface systems and motion, every decision is designed to feel intentional, calm, and easy to use.",
  "We believe strong design is not decoration, but a practical tool that helps people understand value faster and trust the product sooner. By combining research, strategy, and execution, we turn complex ideas into simple experiences that feel refined and commercially focused.",
  "Each layout, section, and content block is arranged to support readability, hierarchy, and a smooth flow from first impression to action. We pay close attention to proportion, spacing, typography, and rhythm so the final result feels balanced on every screen size.",

];

// Flatten all chars with paragraph & position bookkeeping
interface CharInfo {
  char: string;
  paraIndex: number;
  globalIndex: number;
}

function buildCharList(texts: string[]): CharInfo[] {
  const list: CharInfo[] = [];
  texts.forEach((text, pi) => {
    [...text].forEach((char) => {
      list.push({ char, paraIndex: pi, globalIndex: list.length });
    });
  });
  return list;
}

const allChars = buildCharList(paragraphs);
const totalChars = allChars.length;

// Spread factor: how much of scroll progress a single char takes
// Leading edge of char i starts at (i / totalChars) * spreadFactor
// and fully resolves at ((i + 1) / totalChars) * spreadFactor
// We'll map the total to [0, 1] scroll progress.

function AnimatedChar({
  char,
  globalIndex,
  scrollProgress,
}: {
  char: string;
  globalIndex: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = globalIndex / totalChars;
  const end = (globalIndex + 1) / totalChars;

  // color transitions from light gray to the original text color
  const color = useTransform(scrollProgress, [start, end], ["#c8c8c8", "#141414"]);

  return (
    <motion.span style={{ color }} className="whitespace-pre-wrap">
      {char}
    </motion.span>
  );
}

// Group chars back into paragraph arrays for rendering
function groupByParagraph(chars: CharInfo[]) {
  const groups: CharInfo[][] = paragraphs.map(() => []);
  chars.forEach((c) => groups[c.paraIndex].push(c));
  return groups;
}

const charsByParagraph = groupByParagraph(allChars);

export default function AboutTextSection() {
  // The ref goes on the tall pin-container that provides the scroll room
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" = when top of container hits top of viewport (pin begins)
    // "end end"     = when bottom of container hits bottom of viewport (pin ends)
    offset: ["start start", "end end"],
  });

  return (
    // Tall container — 300vh gives ample scroll room for the animation.
    // Adjust the multiplier if you want a slower or faster reveal.
    <div ref={containerRef} style={{ height: "300vh" }}>
      {/* Sticky wrapper keeps the visible section locked in place */}
      <div className="sticky top-0 min-h-screen flex items-center">
        {/* ── SECTION: identical classes to original ── */}
        <section
          dir="ltr"
          className="w-full mt-10 sm:mt-0 py-16 sm:py-24 md:py-28 lg:py-32"
        >
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 lg:px-16">
            {charsByParagraph.map((chars, pi) => (
              <p
                key={pi}
                className={`${pi > 0 ? "mt-6 sm:mt-7 md:mt-8" : ""} text-left text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.35] text-[#141414]`}
              >
                {chars.map((c) => (
                  <AnimatedChar
                    key={c.globalIndex}
                    char={c.char}
                    globalIndex={c.globalIndex}
                    scrollProgress={scrollYProgress}
                  />
                ))}
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}