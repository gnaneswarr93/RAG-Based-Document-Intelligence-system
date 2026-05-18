import React from "react";

import {

  FileText,
  Trash2

} from "lucide-react";

import useChatStore from "../../store/useChatStore";


function DocumentsPanel() {

  const {

    uploadedFiles,
    removeUploadedFile

  } = useChatStore();

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-6">

        Uploaded Documents

      </h2>

      {

        uploadedFiles.length === 0 ? (

          <div className="text-gray-500">

            No uploaded documents

          </div>

        ) : (

          <div className="space-y-4">

            {

              uploadedFiles.map((file) => (

                <div

                  key={file.id}

                  className="border rounded-2xl p-5 flex justify-between items-center hover:shadow-lg transition-all"

                >

                  {/* File Info */}

                  <div className="flex items-center gap-4">

                    <div className="bg-indigo-100 p-3 rounded-xl">

                      <FileText
                        className="text-indigo-600"
                      />

                    </div>

                    <div>

                      <h3 className="font-bold text-lg">

                        {file.name}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {(file.size / 1024).toFixed(2)} KB

                      </p>

                      <p className="text-xs text-gray-400">

                        {file.uploadedAt}

                      </p>

                    </div>

                  </div>

                  {/* Delete Button */}

                  <button

                    onClick={() =>
                      removeUploadedFile(
                        file.id
                      )
                    }

                    className="bg-red-100 hover:bg-red-200 p-3 rounded-xl transition-all"

                  >

                    <Trash2
                      className="text-red-600"
                    />

                  </button>

                </div>
              ))
            }

          </div>
        )
      }

    </div>
  );
}

export default DocumentsPanel;