import { CloudUpload } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';

function ProfileImgUpload() {
    const [selectedFile, setSelectedFile] = useState([]);

    const { getRootProps: getPhotoRootProps, getInputProps: getPhotoInputProps } =
        useDropzone({
            accept: {
                "image/*": [],
            },
            onDrop: (newFiles) => {
                newFiles?.length &&
                    newFiles.find((file) => {
                        return (file.src = URL.createObjectURL(file));
                    });
                setSelectedFile(newFiles);
            },
        });
        // console.log('hii', selectedFile)
    return (
        <div {...getPhotoRootProps()} style={{display:"flex", justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <input type="file" name="file" {...getPhotoInputProps()} />
            {selectedFile.length>0 ? <Avatar alt="Remy Sharp" src= {selectedFile[0]?.src} /> : <><CloudUpload /><h2>Photo Update</h2></>}
            
            
        </div>
    );
}

export default ProfileImgUpload