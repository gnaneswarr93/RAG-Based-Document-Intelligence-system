from langchain.text_splitter import RecursiveCharacterTextSplitter

from app.utils.constants import (
    CHUNK_SIZE,
    CHUNK_OVERLAP
)

class ChunkingService:

    def split_documents(self, documents):

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=CHUNK_SIZE,
            chunk_overlap=CHUNK_OVERLAP
        )

        return splitter.split_documents(documents)