import React from "react";

import ReactMarkdown from "react-markdown";


function ChatMessage({

  role,
  content,
  citations = []

}) {

  return (

    <div

      className={`

        flex

        ${role === "user"

          ? "justify-end"

          : "justify-start"
        }

      `}
    >

      <div

        className={`

          max-w-3xl
          rounded-3xl
          px-6
          py-5
          shadow-md

          ${role === "user"

            ? "bg-indigo-600 text-white"

            : "bg-white text-gray-800"
          }

        `}
      >

        <ReactMarkdown>

          {content}

        </ReactMarkdown>

        {/* Citations */}

        {

          citations.length > 0 && (

            <div className="mt-5 space-y-3">

              <h4 className="font-bold text-sm">

                Sources

              </h4>

              {

                citations.map((citation, index) => (

                  <div

                    key={index}

                    className="bg-gray-100 text-gray-700 p-3 rounded-xl text-sm"

                  >

                    <p className="font-semibold">

                      {citation.source}

                    </p>

                    <p className="mt-2">

                      {citation.content}

                    </p>

                  </div>
                ))
              }

            </div>
          )
        }

      </div>

    </div>
  );
}

export default ChatMessage;