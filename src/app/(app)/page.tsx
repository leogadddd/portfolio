import DataHero from "@/components/hero/data.hero";
import DescriptionHero from "@/components/hero/description.hero";
import TitleHero from "@/components/hero/title.hero";
import Highlightcards from "@/components/highlight/highlights";
import RecentProjectSection from "@/components/recentprojects/recentprojects.section";
import ToolsSection from "@/components/tools/tools.section";
import ContactMeSection from "@/components/contactme/contactme.section";

export default function Home() {
  return (
    <div className="mb-64 min-h-screen">
      <TitleHero title="Software" subtitle="Developer" />
      <DescriptionHero
        text="Self-Taught Software Developer, Film Maker, and a recent
            graduate of Bachelor of Science in Computer Science."
      />
      <DataHero />
      <Highlightcards />

      <RecentProjectSection />
      <ToolsSection />
      {/* <ThoughtsSection /> */}
      <ContactMeSection />
    </div>
  );
}
