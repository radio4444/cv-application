import GeneralInfo from "@/app/component/GeneralInfo";
import EducationInfo from "@/app/component/EducationInfo";
import ExperienceInfo from "@/app/component/ExperienceInfo";

export default function Home() {
    return (
      <div>
          <h1>CV application</h1>
          <GeneralInfo/>
          <EducationInfo/>
          <ExperienceInfo/>
      </div>
    );
}