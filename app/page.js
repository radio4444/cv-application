'use client';

import GeneralInfo from "@/app/component/GeneralInfo";
import EducationInfo from "@/app/component/EducationInfo";
import ExperienceInfo from "@/app/component/ExperienceInfo";
import './style/Components.css';
import {useState} from "react";

export default function Home() {

    const [submittedData, setSubmittedData] = useState({
        generalData: {},
        educationData: {},
        experienceData: {}
    });

    const updateGeneralData = (data) => {
        setSubmittedData((prev) => ({
            ...prev,
            generalData: data
        }));
    };

    const updateEducationData = (data) => {
        setSubmittedData((prev) => ({
            ...prev,
            educationData: data
        }));
    };
    const updateExperienceData = (data) => {
        setSubmittedData((prev) => ({
            ...prev,
            ExperienceData: data
        }));
    };


    return (
        <div className="containerFlex">
            <div className="containerThreeComponents">
                <h1>CV application</h1>
                <div className="containerGeneral"><GeneralInfo onSubmit={updateGeneralData}/></div>
                <div className="containerEducation"><EducationInfo onSubmit={updateEducationData}/></div>
                <div className="containerExperience"><ExperienceInfo onSubmit={updateExperienceData}/></div>
            </div>
            <div className="containerThreeComponentsSubmission">
                <div className="containerSubmitDataGeneral">
                    <h2>General Info</h2>
                    <p>Name: {submittedData.userName}</p>
                    <p>Email: {submittedData.userEmail}</p>
                    <p>Phone: {submittedData.userPhone}</p>
                </div>
                <div className="containerSubmitDataEducation">
                    <h2>Submitted Education Info</h2>
                    <p>School Name: {submittedData.schoolName}</p>
                    <p>Title of Study: {submittedData.titleOfStudy}</p>
                    <p>Date of Study: {submittedData.dateOfStudy}</p>
                </div>
                <div className="containerSubmitDataExperience">
                    <h2>Submitted Experience Info</h2>
                    <p>Company Name: {submittedData.companyName}</p>
                    <p>Position Title: {submittedData.positionTitle}</p>
                    <p>From: {submittedData.from}</p>
                    <p>To: {submittedData.to}</p>
                    <p>Responsibilities: {submittedData.responsibilities}</p>
                </div>

            </div>
        </div>
    )
        ;
};
