'use client';

import GeneralInfo from "@/app/component/GeneralInfo";
import EducationInfo from "@/app/component/EducationInfo";
import ExperienceInfo from "@/app/component/ExperienceInfo";
import './style/Components.css';
import {useState} from "react";

export default function Home() {

    const [submittedData, setSubmittedData] = useState({
        generalData: {userName: '', userEmail: '', userPhone: ''},
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
            experienceData: data
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
                    <p>Name: {submittedData.generalData.userName}</p>
                    <p>Email: {submittedData.generalData.userEmail}</p>
                    <p>Phone: {submittedData.generalData.userPhone}</p>
                </div>
                <div className="containerSubmitDataEducation">
                    <h2>Submitted Education Info</h2>
                    <p>School Name: {submittedData.educationData.schoolName}</p>
                    <p>Title of Study: {submittedData.educationData.titleOfStudy}</p>
                    <p>Date of Study: {submittedData.educationData.dateOfStudy}</p>
                </div>
                <div className="containerSubmitDataExperience">
                    <h2>Submitted Experience Info</h2>
                    <p>Company Name: {submittedData.experienceData.companyName}</p>
                    <p>Position Title: {submittedData.experienceData.positionTitle}</p>
                    <p>From: {submittedData.experienceData.from}</p>
                    <p>To: {submittedData.experienceData.to}</p>
                    <p>Responsibilities: {submittedData.experienceData.responsibilities}</p>
                </div>

            </div>
        </div>
    )
        ;
};
