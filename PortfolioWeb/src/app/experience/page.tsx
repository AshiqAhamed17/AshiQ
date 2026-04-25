import Layout from "@/components/layout/layout";
import Timeline from "@/components/layout/timeline";
import { experiences } from "@/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Career journey and experiences as a CS student exploring Zero-Knowledge Proofs, cryptography, and blockchain security.",
  path: "/experience",
});

const getExperienceYears = () => {
  if (experiences.length === 0) return 0;
  const earliest = experiences
    .map((e) => new Date(e.year.split(" - ")[0]))
    .sort((a, b) => a.getTime() - b.getTime())[0];
  if (!earliest || isNaN(earliest.getTime())) return 0;
  const years = (new Date().getTime() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
};

const Experience = () => {
  const totalYears = getExperienceYears();

  return (
    <Layout
      showHeader
      title="Experiences"
      subtitle={
        experiences.length > 0
          ? `My journey over ${totalYears}+ years`
          : "My journey in ZK, cryptography, and blockchain security"
      }
    >
      <div>
        {[...experiences].reverse().map((experience, index) => (
          <Timeline {...experience} key={index} index={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Experience;
