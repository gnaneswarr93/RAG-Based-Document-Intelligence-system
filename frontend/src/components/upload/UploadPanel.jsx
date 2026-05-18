import React, { useState } from "react";

import API from "../../services/api";

import useChatStore from "../../store/useChatStore";

import toast from "react-hot-toast";


function UploadPanel() {

  const [file, setFile] = useState(null);

  const { addUploadedFile } = useChatStore();

  const handleUpload = async () => {

    if (!file) {

      toast.error("Select a file");

      return;
    }

    try {

      const formData = new FormData();

      formData.append("file", file);

      await API.post(
        "/upload",
        formData
      );

      await API.post("/ingest");

      addUploadedFile(file);

      toast.success(
        "Document uploaded successfully"
      );

    } catch (error) {

      toast.error("Upload failed");
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Upload Document

      </h2>

      <input
        type="file"

        onChange={(e) =>
          setFile(e.target.files[0])
        }

        className="mb-4"
      />

      <button

        onClick={handleUpload}

        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-3 rounded-xl"

      >
        Upload & Ingest
      </button>

    </div>
  );
}

export default UploadPanel;