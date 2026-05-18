import React from "react";

import {

  MessageSquare,
  FileText,
  History,
  BrainCircuit

} from "lucide-react";

import useChatStore from "../../store/useChatStore";


function Sidebar() {

  const {

    activeTab,
    setActiveTab,

    uploadedFiles

  } = useChatStore();

  return (

    <div className="w-72 bg-gradient-to-b from-indigo-950 to-indigo-900 text-white h-screen flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-indigo-800">

        <div className="flex items-center gap-4">

          <div className="bg-indigo-500 p-3 rounded-xl">

            <BrainCircuit size={30} />

          </div>

          <div>

            <h1 className="text-3xl font-bold">

              RAG AI

            </h1>

            <p className="text-indigo-200">

              Document Intelligence

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="p-4 space-y-4">

        {/* Chat */}

        <button

          onClick={() =>
            setActiveTab("chat")
          }

          className={`

            w-full
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all

            ${activeTab === "chat"

              ? "bg-indigo-500"

              : "hover:bg-indigo-800"
            }

          `}
        >

          <MessageSquare />

          Chat

        </button>

        {/* Documents */}

        <button

          onClick={() =>
            setActiveTab("documents")
          }

          className={`

            w-full
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all

            ${activeTab === "documents"

              ? "bg-indigo-500"

              : "hover:bg-indigo-800"
            }

          `}
        >

          <FileText />

          Documents

        </button>

        {/* History */}

        <button

          onClick={() =>
            setActiveTab("history")
          }

          className={`

            w-full
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all

            ${activeTab === "history"

              ? "bg-indigo-500"

              : "hover:bg-indigo-800"
            }

          `}
        >

          <History />

          History

        </button>

      </div>

      {/* Upload Count */}

      <div className="p-4">

        <div className="bg-indigo-800 rounded-2xl p-4">

          <h2 className="text-lg font-bold">

            Uploaded Files

          </h2>

          <p className="text-4xl mt-2 font-bold">

            {uploadedFiles.length}

          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;