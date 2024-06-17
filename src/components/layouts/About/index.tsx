import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import Certification from "@/components/elements/Certification";
import Contact from "@/components/elements/Contact";
import Education from "@/components/elements/Education";
import OrganizationExperience from "@/components/elements/Organization_Experience";
import Skill from "@/components/elements/Skill";
import TrainingExperience from "@/components/elements/Training_Experience";
import WorkExperience from "@/components/elements/Work_Experience";

export default function About() {
  const isLocale = useSelector((state: RootState) => state.local.isLocale);
  return (
    <>
      <div className="h-auto py-48 sm:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Education />
          <WorkExperience />
          <TrainingExperience />
          <Certification />
          <Skill />
          <OrganizationExperience />
        </div>
      </div>
    </>
  );
}
