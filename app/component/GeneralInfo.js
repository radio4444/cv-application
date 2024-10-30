'use client';

import {useState} from "react";
import '../style/Components.css'

function GeneralInfo() {

    const [generalData, setGeneralData] = useState(
        {userName: '', userEmail: '', userPhone: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setGeneralData(prevGeneralData => ({
            ...prevGeneralData,
            [name]: value
        }));
    };

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(generalData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="containerGeneral">
                    <h1>This is the General Section</h1>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="userName"
                            value={generalData.userName}
                            onChange={handleChange}
                            placeholder="Enter your name: "
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="userEmail"
                            value={generalData.userEmail}
                            onChange={handleChange}
                            placeholder="Enter your email: "
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="userPhone"
                            value={generalData.userPhone}
                            onChange={handleChange}
                            placeholder="Enter your phone: "
                            pattern="[0-9]*"
                            maxLength={10}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {/*We can create edit and submit for each form or whole CV*/}
            {submittedData && (
                <div >
                    <h2>General Info</h2>
                    <p>Name: {submittedData.userName}</p>
                    <p>Email: {submittedData.userEmail}</p>
                    <p>Phone: {submittedData.userPhone}</p>
                </div>
            )}

        </>
    );

}

export default GeneralInfo;
