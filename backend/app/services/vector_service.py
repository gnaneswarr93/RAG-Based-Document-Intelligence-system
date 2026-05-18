from app.services.embedding_service import EmbeddingService
from app.vectorstore.faiss_store import FAISSStore

class VectorService:

    def __init__(self):

        self.embedding_service = EmbeddingService()

        self.embeddings = self.embedding_service.get_embedding_model()

        self.faiss_store = FAISSStore(self.embeddings)

    def store_documents(self, documents):

        self.faiss_store.create_store(documents)

    def load_vectorstore(self):

        return self.faiss_store.load_store()