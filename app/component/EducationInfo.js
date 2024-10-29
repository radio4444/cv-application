'use client';

import {useState} from "react";
import style from '../style/EducationInfo.module.css'

function EducationInfo() {

    const [educationData, setEducationData] = useState(
        {schoolName: '', titleOfStudy: '', dateOfStudy: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEducationData(prevEducationData => ({
            ...prevEducationData,
            [name]: value
        }));
    };

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(educationData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={style.container}>
                    <h1>This is the Education Section</h1>
                    <label>
                        School Name:
                        <input
                            type="text"
                            name="schoolName"
                            value={educationData.schoolName}
                            onChange={handleChange}
                            placeholder="Enter your school name: "
                        />
                    </label>
                    <label>
                        Title of Study:
                        <input
                            type="text"
                            name="titleOfStudy"
                            value={educationData.titleOfStudy}
                            onChange={handleChange}
                            placeholder="Enter your Title of Study: "
                        />
                    </label>
                    <label>
                        Date of Study:
                        <input
                            type="date"
                            name="dateOfStudy"
                            value={educationData.dateOfStudy}
                            onChange={handleChange}
                            placeholder="Enter your date of study: "
                        />
                    </label>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {/*We can create edit and submit for each form or whole CV*/}
            {submittedData && (
                <div>
                    <h2>Submitted Education Info</h2>
                    <p>School Name: {submittedData.schoolName}</p>
                    <p>Title of Study: {submittedData.titleOfStudy}</p>
                    <p>Date of Study: {submittedData.dateOfStudy}</p>
                </div>
            )}

        </>
    );

}

export default EducationInfo;
