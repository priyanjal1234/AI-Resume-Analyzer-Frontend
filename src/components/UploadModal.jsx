import { Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import resumeService from "../services/Resume";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UploadModal = ({ setshowUploadModal }) => {
  const resumeRef = useRef(null);
  const [fileData, setfileData] = useState(null);
  const [isUploading, setisUploading] = useState(false);
  let navigate = useNavigate()

  const onDrop = async (acceptedFiles) => {
    if (Array.isArray(acceptedFiles) && acceptedFiles.length > 0) {
      setfileData(acceptedFiles[0]);
      setisUploading(true);

      let formdata = new FormData();
      formdata.append("resume", acceptedFiles[0]);
      try {
        let uploadResumeRes = await resumeService.uploadResume(formdata);
        if(uploadResumeRes.status === 200) {
          setisUploading(false);
          navigate("/feedback")
        }
      } catch (error) {
        setisUploading(false);
        toast.error(error?.message);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".docx, .doc",
    maxFiles: 1,
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border-2 border-dashed rounded-xl p-8 text-center transition-colors border-gray-700 hover:border-gray-600 max-w-sm w-full">
        <button
          className="absolute top-2 right-10 text-gray-400 hover:text-white"
          onClick={() => setshowUploadModal(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mx-auto w-fit p-4 bg-blue-500/10 rounded-full mb-4">
          <Upload className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Drag and drop your resume here
        </h3>
        <p className="text-gray-400 mb-4">Supports Word documents</p>

        <div
          {...getRootProps()}
          className="border-2 border-dashed p-4 rounded-lg text-gray-400 bg-gray-700 cursor-pointer hover:bg-gray-600 h-32 flex items-center justify-center"
        >
          <input {...getInputProps()} />
          {!fileData ? (
            <p>Drag & drop files here, or click to select files</p>
          ) : (
            <p className="text-xl font-semibold">{fileData?.name}</p>
          )}
        </div>
        {isUploading && (
          <h2 className="text-2xl font-semibold mt-4 flex items-center justify-center gap-3">
            Analyzing <div className="loaderDot"></div>
          </h2>
        )}
      </div>
    </div>
  );
};

export default UploadModal;
