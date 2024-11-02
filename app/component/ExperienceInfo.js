'use client';

import {useState} from "react";

function ExperienceInfo({onSubmit}) {

    const [experienceData, setExperienceData] = useState(
        {companyName: '', positionTitle: '', from: '', to: '', responsibilities: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setExperienceData(prevExperienceData => ({
            ...prevExperienceData,
            [name]: value
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(experienceData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>

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


            </form>


        </>
    );

}

export default ExperienceInfo;
