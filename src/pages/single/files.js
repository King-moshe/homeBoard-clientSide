import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';

export default function Files({ setFileResp }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'dnwud1i7t');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dnwud1i7t/auto/upload',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        }
      );

      setUploadedFileUrl(response.data.secure_url);

      setFileResp(response.data.secure_url)
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };


  return (
    <div className=' h-[70vh] bg-slate-600'>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>

      {selectedFile && (
        <div>
          <h3>קובץ שהועלה:</h3>

          {selectedFile.type.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="File Preview"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          ) : (
            <p>{selectedFile.name}</p>
          )}
        </div>
      )}

      {uploadProgress > 0 && <p>העלאה בתהליך: {uploadProgress}%</p>}


      {uploadedFileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          {uploadedFileUrl.startsWith('image/') ? (
            <img
              src={uploadedFileUrl}
              alt="Uploaded File"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          ) : (
            <p>{uploadedFileUrl}</p>
          )}

        </div>
      )}
    </div>
  );
};