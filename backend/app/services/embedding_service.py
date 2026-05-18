from langchain_community.embeddings import HuggingFaceEmbeddings


class EmbeddingService:

    def __init__(self):

        self.embedding_model = HuggingFaceEmbeddings(
            model_name="sentence-transformers/paraphrase-MiniLM-L3-v2",
            model_kwargs={
                "device": "cpu"
            }
        )

    def get_embedding_model(self):

        return self.embedding_model