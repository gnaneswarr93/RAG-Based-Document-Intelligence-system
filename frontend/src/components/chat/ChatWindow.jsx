import React, {

  useState,
  useEffect,
  useRef

} from "react";

import API from "../../services/api";

import useChatStore from "../../store/useChatStore";

import ChatMessage from "./ChatMessage";

import {

  Send,
  Loader2

} from "lucide-react";


function ChatWindow() {

  const [question, setQuestion] = useState("");

  const messagesEndRef = useRef(null);

  const {

    conversations,

    currentConversationId,

    createConversation,

    addMessage,

    loading,

    setLoading

  } = useChatStore();


  const currentConversation =

    conversations.find(

      (conv) =>
        conv.id === currentConversationId
    );


  const messages =
    currentConversation?.messages || [];


  // Auto Scroll

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [messages]);


  // Ask Question

  const askQuestion = async () => {

    if (!question.trim()) return;

    const currentQuestion = question;

    setQuestion("");


    // Create Conversation Automatically

    if (!currentConversationId) {

      createConversation(currentQuestion);
    }


    // User Message

    addMessage({

      role: "user",

      content: currentQuestion

    });

    setLoading(true);

    try {

      const response = await API.post(

        "/query",

        {
          question: currentQuestion
        }

      );

      addMessage({

        role: "assistant",

        content: response.data.answer,

        citations:
          response.data.citations || []

      });

    } catch (error) {

      addMessage({

        role: "assistant",

        content:
          "Error generating response."

      });

    } finally {

      setLoading(false);
    }
  };


  return (

    <div className="bg-white rounded-3xl shadow-xl h-[82vh] flex flex-col overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5">

        <h2 className="text-2xl font-bold text-white">

          AI Assistant

        </h2>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-auto p-6 space-y-6 bg-gray-50">

        {

          messages.length === 0 && (

            <div className="h-full flex items-center justify-center text-gray-400 text-xl">

              Ask anything about your documents

            </div>
          )
        }

        {

          messages.map((msg, index) => (

            <ChatMessage

              key={index}

              role={msg.role}

              content={msg.content}

              citations={msg.citations}

            />

          ))
        }

        {

          loading && (

            <div className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-3 w-fit">

              <Loader2
                className="animate-spin text-indigo-600"
              />

              AI is thinking...

            </div>
          )
        }

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}

      <div className="border-t bg-white p-5 flex gap-4">

        <textarea

          value={question}

          onChange={(e) =>
            setQuestion(e.target.value)
          }

          rows={2}

          placeholder="Ask anything..."

          className="flex-1 border rounded-2xl p-4 resize-none"

        />

        <button

          onClick={askQuestion}

          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-2xl"

        >

          <Send />

        </button>

      </div>

    </div>
  );
}

export default ChatWindow;