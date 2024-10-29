// Clean all this code later
// So the initial value for name, email and phone number, (in this example), empty
// And the setValue going to be input field?

//I would like a button that can edit name, email and phone.
// What exactly setValue would be? It would be equal to input. Then what?
// Output the input, where? in the page itself?
// How would they do it? press submit


// const handleSubmit = (event) => {
//     event.preventDefault(); // search later what this mean
//     console.log('Form Date: ', generalData);
//     setGeneralData({
//         userName: '',
//         userEmail: '',
//         userPhone: '',
//     });
// };

'use client';

import {useState} from "react";
import styles from '../style/GeneralInfo.module.css';

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
                <div className={styles.container}>
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
                <div>
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
