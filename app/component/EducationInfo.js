'use client';

import {useState} from "react";

function EducationInfo({onSubmit}) {

    const [educationData, setEducationData] = useState(
        {schoolName: '', titleOfStudy: '', dateOfStudy: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEducationData(prevEducationData => ({
            ...prevEducationData,
            [name]: value
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(educationData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>

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

            </form>


        </>
    );

}

export default EducationInfo;
