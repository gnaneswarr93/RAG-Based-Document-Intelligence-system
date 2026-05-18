import React from "react";

import Sidebar from "../components/sidebar/Sidebar";

import UploadPanel from "../components/upload/UploadPanel";

import ChatWindow from "../components/chat/ChatWindow";

import DocumentsPanel from "../components/documents/DocumentsPanel";

import HistoryPanel from "../components/history/HistoryPanel";

import useChatStore from "../store/useChatStore";


function Home() {

  const { activeTab } = useChatStore();

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-bold text-gray-800 mb-8">

          LLM-Powered RAG Workspace

        </h1>

        {/* CHAT */}

        {

          activeTab === "chat" && (

            <div className="grid grid-cols-3 gap-8">

              <UploadPanel />

              <div className="col-span-2">

                <ChatWindow />

              </div>

            </div>
          )
        }

        {/* DOCUMENTS */}

        {

          activeTab === "documents" && (

            <DocumentsPanel />

          )
        }

        {/* HISTORY */}

        {

          activeTab === "history" && (

            <HistoryPanel />

          )
        }

      </div>

    </div>
  );
}

export default Home;