import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constant/url';
import { apiGet } from '../../services/apiServices';
import { useStateContext } from '../../context';
import { InsertDriveFile, Image, Description, PictureAsPdf, InsertChart, Slideshow, TextSnippet, Help } from '@mui/icons-material';

export default function FilesList() {
  const { client } = useStateContext();
  const [data, setData] = useState([]);
  const ID = client._id;

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = API_URL + '/users/userFiles/' + ID;
    try {
      let data = await apiGet(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFileType = (url) => {
    const fileExtension = url.split('.').pop().toLowerCase();
    if (fileExtension === 'jpeg' || fileExtension === 'jpg' || fileExtension === 'png' || fileExtension === 'gif') {
      return 'image';
    } else if (fileExtension === 'docx' || fileExtension === 'doc') {
      return 'docx';
    } else if (fileExtension === 'pdf') {
      return 'pdf';
    } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
      return 'excel';
    } else if (fileExtension === 'pptx' || fileExtension === 'ppt') {
      return 'powerpoint';
    } else if (fileExtension === 'txt') {
      return 'text';
    } else {
      return 'unknown';
    }
  };

  const handleDownload = async (url) => {
    try {
      const transformedUrl = url.replace('image/upload', 'auto/upload/fl_attachment');
      const response = await fetch(transformedUrl);
      const blob = await response.blob();
      const filename = getFilenameFromURL(url);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();

      // Clean up the temporary link element
      window.URL.revokeObjectURL(link.href);
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  const getFilenameFromURL = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  const getDisplayURL = (url) => {
    const fileType = getFileType(url);

    return (
      <div className="flex items-center">
        {fileType === 'image' ? (
          <img src={url} alt="Image" className="w-16 h-16 mr-4" />
        ) : (
          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 mr-4">
            {fileType === 'docx' ? (
              <Description fontSize="large" />
            ) : (
              <InsertDriveFile fontSize="large" />
            )}
          </div>
        )}
        <div>
          <p className="font-bold">File Details:</p>
          <p>{url}</p>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2"
            onClick={() => handleDownload(url)}
          >
            Download
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {data.map((file, index) => (
        <div className="bg-white rounded-lg p-4 shadow-md mb-4" key={index}>
          {getDisplayURL(file)}
        </div>
      ))}
    </div>
  );
}
