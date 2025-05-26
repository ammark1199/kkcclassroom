"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const WORDS = [
  "cheap.",
  "accessible.",
  "mentorship.",
  "a platform.",
  "a guide.",
  "a solution.",
];

const SEQUENCE = WORDS.reduce((acc, current) => {
  return acc.concat(current, 2000);
}, []);

export default function HomeHeroText() {
  const textComponent = (
    <TypeAnimation
      className=" text-primary after:font-thin"
      sequence={SEQUENCE}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block", color: "var(--color-primary)" }}
      repeat={Infinity}
    />
  );

  return (
    <>
      <div className="text-5xl lg:text-6xl font-black sm:hidden">
        <span className="block">KKC Classroom</span>
        <span>is </span>
        {textComponent}
      </div>
      <div className="text-5xl lg:text-6xl font-black lg:hidden block max-sm:hidden mx-auto w-max text-center">
        <span className="block text-center">KKC Classroom</span>
        is {textComponent}
      </div>
      <div className="text-5xl lg:text-6xl xl:text-7xl font-black hidden lg:block">
        <span className="text-left block lg:text-left">KKC Classroom</span>
        <span className="text-left lg:text-left">is </span>
        {textComponent}
      </div>
    </>
  );
}
