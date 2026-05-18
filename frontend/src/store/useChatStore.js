import { create } from "zustand";


const useChatStore = create((set) => ({

  activeTab: "chat",

  currentConversationId: null,

  conversations: [],

  uploadedFiles: [],

  loading: false,


  // Tabs

  setActiveTab: (tab) =>
    set({
      activeTab: tab
    }),


  // Loading

  setLoading: (loading) =>
    set({
      loading
    }),


  // Uploads

  addUploadedFile: (file) =>

    set((state) => ({

      uploadedFiles: [

        ...state.uploadedFiles,

        {
          id: Date.now(),

          name: file.name,

          size: file.size,

          uploadedAt:
            new Date().toLocaleString()
        }

      ]

    })),
    removeUploadedFile: (id) =>

  set((state) => ({

    uploadedFiles:

      state.uploadedFiles.filter(

        (file) => file.id !== id

      )

  })),



  // Create Conversation

  createConversation: (firstQuestion) =>

    set((state) => {

      const newConversation = {

        id: Date.now(),

        title:
          firstQuestion.slice(0, 30),

        messages: [],

        createdAt:
          new Date().toLocaleString()
      };

      return {

        conversations: [

          newConversation,

          ...state.conversations

        ],

        currentConversationId:
          newConversation.id
      };
    }),


  // Add Message

  addMessage: (message) =>

    set((state) => ({

      conversations:

        state.conversations.map(

          (conversation) => {

            if (
              conversation.id ===
              state.currentConversationId
            ) {

              return {

                ...conversation,

                messages: [

                  ...conversation.messages,

                  message
                ]
              };
            }

            return conversation;
          }
        )

    })),



  // Select Conversation

  selectConversation: (id) =>

    set({
      currentConversationId: id,
      activeTab: "chat"
    }),

}));


export default useChatStore;