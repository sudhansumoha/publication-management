import React, { useState } from 'react'
import "./BookPub.css"
function BookPub() {
    const [bookName, setBookName] = useState("");
    const [bookType, setBookType] = useState("");
    const [status, setStatus] = useState("");
    const [publisherName, setPublisherName] = useState("");
    const [file, setFile] = useState("");
    const [bookDetailsArr, setBookDetailsArr] = useState([])

    const AddBookDetails = () => {
        let newArr = [...bookDetailsArr]
        newArr.push({ "Bookname": bookName, "Booktype": bookType, "Status": status, "PublisherName": publisherName });
        setBookDetailsArr(newArr)
        setBookName("")
        setBookType("")
        setStatus("")
        setPublisherName("")
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
        <div className='main'>
            <h2 className='heading'>Book Publication</h2>
            <div className='maincantenerr d-flex justify-content-center'>
                <div className="">
                    <div className="col-md-5 position-relative textrow" >
                        <label for="validationTooltip01" className="form-label">Book Name</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="Enter Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
                    </div><br />
                    <div className="col-md-5 position-relative textrow">
                        <label for="validationTooltip04" className="form-label">Book Type</label>
                        <select className="form-select" id="validationTooltip04" required>
                            <option selected disabled value={bookType} onChange={(e) => setBookType(e.target.value)}>Select</option>
                            <option value="">informetnal</option>
                            <option value="">story</option>
                            <option value="">horhor</option>
                        </select>
                        <div className="invalid-tooltip">
                            Please select a valid Designation.
                        </div>
                    </div><br />
                    <div className="col-md-5 position-relative textrow">
                        <label for="validationTooltip04" className="form-label">Status</label>
                        <select className="form-select" id="validationTooltip04" required>
                            <option selected disabled value={status} onChange={(e) => setStatus(e.target.value)}>Select</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                        </select>
                        <div className="invalid-tooltip">
                            Please select a valid Designation.
                        </div>
                    </div><br />
                    <div className="col-md-5 position-relative textrow">
                        <label for="validationTooltip01" className="form-label">Publisher Name</label>
                        <input type="text" className="form-control" id="validationTooltip01" value={publisherName} onChange={(e) => setPublisherName(e.target.value)} required />
                    </div><br />
                    <div className="fileupload">
                        <label className="form-label">Upload A File</label>
                        <input type='file' onChange={handleFileChange} /><br />
                        <p>More than 2MB</p>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                        <button className="btn btn-primary" type="button" onClick={AddBookDetails }>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookPub