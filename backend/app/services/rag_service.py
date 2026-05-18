from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

from app.services.vector_service import VectorService
from app.services.llm_service import LLMService

from app.prompts.rag_prompt import RAG_PROMPT

class RAGService:

    def __init__(self):

        self.vector_service = VectorService()

        self.llm_service = LLMService()

    def ask_question(self, question):

        db = self.vector_service.load_vectorstore()

        retriever = db.as_retriever(search_kwargs={"k": 5})

        prompt = PromptTemplate(
            template=RAG_PROMPT,
            input_variables=["context", "question"]
        )

        chain = RetrievalQA.from_chain_type(
            llm=self.llm_service.get_llm(),
            retriever=retriever,
            return_source_documents=True,
            chain_type_kwargs={"prompt": prompt}
        )
        

        response = chain.invoke({
            "query": question
        })

        citations = []

        for doc in response["source_documents"]:

            citations.append({
                "source": doc.metadata.get("source"),
                "content": doc.page_content[:300]
            })

        return {
            "answer": response["result"],
            "citations": citations
        }