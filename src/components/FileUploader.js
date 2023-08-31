import React from 'react';
import { useUploadFileMutation } from '../services/fileUploadApi';
 

export default function FileUploader() {
    
    const [uploadFile] = useUploadFileMutation();

    const formdata = new FormData();

    var files=null;
   

    const handleFileChange = (e) => {
        files= (e.target).files;
        console.log(files);
        Object.values(files).forEach((file => formdata.append(file.name, file)));
    };
    
    const handleUpload = () => {
        uploadFile(formdata);
    };

    return (
        <div>
            <h2>Select file to upload</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );

}