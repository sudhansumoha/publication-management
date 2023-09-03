import React, { useState } from 'react';
import "./Profile.css";
import ProfileImgUpload from './ProfileImgUpload';
function Profile() {
    const [empId, setEmpId] = useState("");
    const [userName, setUserName] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [designation, setDesignation] = useState("");
    const [campus, setCampus] = useState("");
    const [detailsArr, setDetailsArr] = useState([])

    const AddDetails = () => {
        let newArr = [...detailsArr]
        newArr.push({ "empId": empId, "Name": userName, "Mobile": userMobile, "Designation": designation, "Campus": campus });
        setDetailsArr(newArr)
        setEmpId("")
        setUserName("")
        setUserMobile("")
        setDesignation("")
        setCampus("")
    }

    return (
        <>
            <h1 className='heading'>Personal Info</h1>
            <div className='cantener'>
                <div className='upload-img'>
                <ProfileImgUpload/>
                </div>
                

                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-6 position-relative">
                        <label for="validationTooltip03" className="form-label">EMPID</label>
                        <input type="text" placeholder="i.e-213121" className="form-control" id="validationTooltip03" value={empId} onChange={(e) => setEmpId(e.target.value)} required />
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip01" className="form-label">Name</label>
                        <input type="text" placeholder="Enter Your Name" className="form-control" id="validationTooltip01" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Mobile</label>
                        <input type="text" placeholder="Enter Your Mobile" className="form-control" id="validationTooltip02" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} required />
                    </div>
                    <div className="col-md-3 position-relative">
                        <label for="validationTooltip04" className="form-label">Designation</label>
                        <select placeholder="Select Designation" className="form-select" id="validationTooltip04" value={designation} onChange={(e) => setDesignation(e.target.value)} required>
                            <option selected disabled value="">Select</option>
                            <option value="Prof">Prof</option>
                            <option value="Assistant Prof">Assistant Prof</option>
                        </select>
                        <div className="invalid-tooltip">
                            Please select a valid Designation.
                        </div>

                    </div>
                    <div className="col-md-3 position-relative">
                        <label for="validationTooltip04" className="form-label">Campus</label>
                        <select placeholder="Select Campus" className="form-select" id="validationTooltip04" value={campus} onChange={(e) => setCampus(e.target.value)} required>
                            <option selected disabled value="">Select</option>
                            <option value="Bhubaneswar">Bhubaneswar</option>
                            <option value="Paralakhemundi">Paralakhemundi</option>
                            <option value="Visakhapatnam">Visakhapatnam</option>
                        </select>
                        <div className="invalid-tooltip">
                            Please select a valid Campus.
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={AddDetails}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile