import React, {useState} from 'react';
import "./ProjectPub.css";


function ProjectPub() {
  const [projectName, setProjectName] = useState("");
  const [catagory, setCatagory] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState("");
  const [projectDetailsArr, setProjectDetailsArr] = useState([])

  const AddProjectDetails = () => {
      let newArr = [...projectDetailsArr]
      newArr.push({ "Projectname": projectName, "Catagory": catagory, "SubmissionDate": submissionDate, "Status": status });
      setProjectDetailsArr(newArr)
      setProjectName("")
      setCatagory("")
      setSubmissionDate("")
      setStatus("")
  }
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };
  return (
    <div>
          <>
            <h2 className='heading'>Project Publication</h2>
            <div className='maincantener'>
                <div className="col-md-5 position-relative textrow" >
                    <label for="validationTooltip01" className="form-label">Project Name</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="Enter Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
                </div><br />
                <div className="col-md-5 position-relative textrow">
                    <label for="validationTooltip04" className="form-label">Catagory</label>
                    <select className="form-select" id="validationTooltip04" value={catagory} onChange={(e) => setCatagory(e.target.value)} required>
                        <option selected disabled value="">Select</option>
                        <option value="Solo">Solo</option>
                        <option value="Jount">Jount</option>
                        <option value="Group">Group</option>
                    </select>
                    <div className="invalid-tooltip">
                        Please select a valid Catagory.
                    </div>
                </div><br />
                <div className="col-md-5 position-relative textrow">
                    <label for="validationTooltip01" className="form-label">Submission Date</label>
                    <input type="date" className="form-control" id="validationTooltip01" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)} required />
                </div><br />
                <div className="col-md-5 position-relative textrow">
                    <label for="validationTooltip04" className="form-label">Status</label>
                    <select className="form-select" id="validationTooltip04" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option selected disabled value="">Select</option>
                        <option value="Submited">Submited</option>
                        <option value="On Going">On Going</option>
                    </select>
                    <div className="invalid-tooltip">
                        Please select a valid Status.
                    </div>
                </div><br />
               <div className="fileupload">
          <label className="form-label">Upload A File</label>
          <input type='file' onChange={handleFileChange} /><br />
          <p>More than 2MB</p>
        </div>
        
        {/* Submit Button */}
        <div className="col-12">
          <button className="btn btn-primary" type="button" onClick={AddProjectDetails}>Submit</button>
        </div>

            </div>
        </>
    </div>
  )
}

export default ProjectPub