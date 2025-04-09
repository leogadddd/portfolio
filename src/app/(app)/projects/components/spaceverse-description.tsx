import React from "react";

const SpaceverseDescription = () => {
  return (
    <>
      <section id="spaceverse" className="max-w-4xl mx-auto ">
        <p className="mb-6 text-base/6 ">
          <strong>Spaceverse</strong> is a dynamic productivity web app that
          blends aesthetic ambiance with practical tools — a cosmic workspace
          designed to help you focus while vibing in your own digital universe.
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          The Concept
        </h2>
        <p className="mb-4 text-base/6">
          At the heart of Spaceverse are <strong>“universes”</strong> —
          immersive video backgrounds that act as your customizable work
          environment. Whether it’s a starry galaxy or a cozy animated café,
          each setting is designed to inspire.
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Widgets
        </h2>
        <p className="mb-4 text-base/6 ">
          Each workspace includes draggable, resizable widgets — styled like
          Windows OS windows — that help you stay productive:
        </p>
        <ul className="list-disc pl-6 mb-4 text-base/6 ">
          <li>
            <strong>Clock</strong> – Your time anchor.
          </li>
          <li>
            <strong>Pomodoro Timer</strong> – Stay focused with structured
            sessions.
          </li>
          <li>
            <strong>Spotify Player</strong> – Play your favorite tunes.
          </li>
          <li>
            <strong>Universe Navigator</strong> – Easily switch scenes.
          </li>
          <li>
            <strong>Brown Noise Generator</strong> – Calm, focus-friendly
            background audio.
          </li>
        </ul>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Under the Hood
        </h2>
        <p className="mb-4 text-base/6 ">
          Built with <strong>Next.js</strong>, <strong>React</strong>, and{" "}
          <strong>Tailwind CSS</strong>, Spaceverse is optimized for performance
          and responsiveness. The video backgrounds scale smoothly across screen
          sizes, thanks to reverse-engineered techniques inspired by lifeat.io.
        </p>
        <p className="mb-4 text-base/6 ">
          You can still explore the original version at{" "}
          <a
            href="https://old.spvr.app"
            target="_blank"
            className="hover:underline text-[--color-accent]"
          >
            old.spvr.app
          </a>
          .
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Why It Exists
        </h2>
        <p className="mb-4 text-base/6 ">
          Originally built as a hobby project for yourself and your friends
          during college, Spaceverse has grown into a potential go-to
          productivity space for creators, students, and anyone who wants to
          work in a beautiful digital environment.
        </p>
      </section>
    </>
  );
};

export default SpaceverseDescription;
