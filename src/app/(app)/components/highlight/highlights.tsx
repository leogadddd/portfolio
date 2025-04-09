import React from "react";
import Card from "@/components/highlight/card.highlights";

const Highlightcards = () => {
  return (
    <div className="mt-2 flex flex-col sm:flex-row gap-4 max-w-[556px] mx-auto lg:mx-0">
      <Card
        topText="Blog"
        title="Spaceverse"
        subtitle="A Productivity App"
        link="https://sonnet.leogadil.com/blog/spaceverse"
      />
      <Card
        topText="Blog"
        title="Sonnet"
        subtitle="A Blogging Platform"
        link="https://sonnet.leogadil.com/blog/sonnet"
      />
    </div>
  );
};

export default Highlightcards;
