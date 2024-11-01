import GeneralInfo from "@/app/component/GeneralInfo";
import EducationInfo from "@/app/component/EducationInfo";
import ExperienceInfo from "@/app/component/ExperienceInfo";
import './style/Components.css';


export default function Home() {


    return (
        <>

            <div className="containerThreeComponents">
                <h1>CV application</h1>
                <GeneralInfo/>
                <EducationInfo/>
                <ExperienceInfo/>
            </div>
        </>
    );
};
