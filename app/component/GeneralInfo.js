'use client';

import {useState} from "react";
import '../style/Components.css';

function GeneralInfo({onSubmit}) {

    const [generalData, setGeneralData] = useState(
        {userName: '', userEmail: '', userPhone: ''});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setGeneralData(prevGeneralData => ({
            ...prevGeneralData,
            [name]: value
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(generalData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>

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

            </form>


        </>
    );

}

export default GeneralInfo;
