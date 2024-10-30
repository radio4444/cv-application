'use client';

import {useState} from "react";

function ExperienceInfo() {

    const [experienceData, setExperienceData] = useState(
        {companyName: '', positionTitle: '', from: '', to: '', responsibilities: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setExperienceData(prevExperienceData => ({
            ...prevExperienceData,
            [name]: value
        }));
    };

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(experienceData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="containerExperience">
                    <h1>This is the Experience Section</h1>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="companyName"
                            value={experienceData.companyName}
                            onChange={handleChange}
                            placeholder="Enter your company name: "
                        />
                    </label>
                    <label>
                        Position Title:
                        <input
                            type="text"
                            name="positionTitle"
                            value={experienceData.positionTitle}
                            onChange={handleChange}
                            placeholder="Enter your position title: "
                        />
                    </label>
                    <label>
                        From:
                        <input
                            type="date"
                            name="from"
                            value={experienceData.from}
                            onChange={handleChange}
                            placeholder="From: "
                        />
                    </label>
                    <label>
                        To:
                        <input
                            type="date"
                            name="to"
                            value={experienceData.to}
                            onChange={handleChange}
                            placeholder="To: "
                        />
                    </label>
                    <p>Responsibilities:</p>
                    <label>
                        <textarea
                            name="responsibilities"
                            value={experienceData.responsibilities}
                            onChange={handleChange}
                            placeholder="Enter your responsibilities: "
                            style={{width: '100%', height: '200px', resize: 'both'}}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </div>

            </form>

            {/*We can create edit and submit for each form or whole CV*/}
            {submittedData && (
                <div>
                    <h2>Submitted Experience Info</h2>
                    <p>Company Name: {submittedData.companyName}</p>
                    <p>Position Title: {submittedData.positionTitle}</p>
                    <p>From: {submittedData.from}</p>
                    <p>To: {submittedData.to}</p>
                    <p>Responsibilities: {submittedData.responsibilities}</p>
                </div>
            )}

        </>
    );

}

export default ExperienceInfo;
