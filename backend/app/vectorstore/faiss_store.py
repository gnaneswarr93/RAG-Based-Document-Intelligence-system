from langchain_community.vectorstores import FAISS

class FAISSStore:

    def __init__(self, embeddings):

        self.embeddings = embeddings

    def create_store(self, documents):

        db = FAISS.from_documents(
            documents,
            self.embeddings
        )

        db.save_local("vector_db/faiss_index")

    def load_store(self):

        return FAISS.load_local(
            "vector_db/faiss_index",
            self.embeddings,
            allow_dangerous_deserialization=True
        )