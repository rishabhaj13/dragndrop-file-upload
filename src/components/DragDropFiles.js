import { useState, useRef } from "react";
import React from 'react';
import { useUploadFileMutation } from '../services/fileUploadApi';
import './DragDropStyle.css'

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [uploadFile] = useUploadFileMutation();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  

  const handleUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i])
    }
    console.log(formData);
    uploadFile(formData);
  };

  if (files) return (
    <div className="dropzone">
        <div className="list-item">
          <ol>
              {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
          </ol>
        </div>
        <div className="actions">
            <button onClick={handleUpload}>Upload</button>
            <button onClick={() => setFiles(null)}>Cancel</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
        >
          <h1>Drag and Drop Files</h1>
          <h2>Or</h2>
          <button>Select Files</button>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          
        </div>
    </>
  );
};

export default DragDropFiles;
