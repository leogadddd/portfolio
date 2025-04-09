import React from "react";

const SonnetDescription = () => {
  return (
    <>
      <section id="sonnet" className="max-w-4xl mx-auto">
        <p className="mb-6 text-base/6">
          <strong>Sonnet</strong> is a personal blogging platform I created with
          a local-first approach, empowering creators and professionals to write
          freely, sync across devices, and share their thoughts with the world —
          on their terms.
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          The Idea
        </h2>
        <p className="mb-4 text-base/6">
          I wanted a writing space that worked offline-first, felt minimal, and
          didn’t pressure users to publish unless they wanted to. That’s where
          Sonnet began — a balance between a notebook and a blogging tool, built
          for clarity and control.
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Local-First Writing
        </h2>
        <p className="mb-4 text-base/6">
          Sonnet stores your drafts locally in the browser, so your thoughts are
          always safe — even without internet. When you're ready, you can choose
          to sync or publish. It gives writers breathing room without the
          pressure of being “always online.”
        </p>

        {/* <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Sync & Publish — On Your Terms
        </h2>
        <ul className="list-disc pl-6 mb-4 text-base/6">
          <li>
            <strong>Free Plan</strong> – Save locally, manually sync when you
            want, and publish a few posts per month.
          </li>
          <li>
            <strong>Pro Plan</strong> – Unlock automatic syncing (SonnetSync),
            unlimited publishing, custom domains, scheduling, password-protected
            blogs, and more.
          </li>
          <li>
            <strong>Optional Extras</strong> – Even without going Pro, you can
            buy extra publish slots anytime.
          </li>
        </ul> */}

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Built for Creators
        </h2>
        <p className="mb-4 text-base/6">
          Sonnet is made with <strong>Next.js</strong>, <strong>React</strong>,{" "}
          <strong>Tailwind CSS</strong>, and <strong>Supabase</strong>. It’s
          designed to be snappy, clean, and minimal — with the freedom to grow
          into a full writing platform for those who want more.
        </p>

        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Why I Built It
        </h2>
        <p className="mb-4 text-base/6">
          I built Sonnet because I wanted something personal — a writing tool
          that felt like mine, not just another platform. It’s for people who
          love to write, reflect, and maybe share… but only when they’re ready.
        </p>
      </section>
    </>
  );
};

export default SonnetDescription;
