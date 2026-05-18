import React from "react";

import useChatStore from "../../store/useChatStore";


function HistoryPanel() {

  const {

    conversations,
    selectConversation

  } = useChatStore();

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-6">

        Conversations

      </h2>

      <div className="space-y-4">

        {

          conversations.map((conversation) => (

            <div

              key={conversation.id}

              onClick={() =>
                selectConversation(
                  conversation.id
                )
              }

              className="border rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer"

            >

              <h3 className="font-bold text-lg">

                {conversation.title}

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                {conversation.createdAt}

              </p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default HistoryPanel;