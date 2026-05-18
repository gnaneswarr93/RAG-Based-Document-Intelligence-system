import os

from langchain_community.document_loaders import (
    PyPDFLoader,
    Docx2txtLoader,
    TextLoader
)

class DocumentLoaderService:

    def load_document(self, filepath):

        extension = os.path.splitext(filepath)[1].lower()

        if extension == ".pdf":
            loader = PyPDFLoader(filepath)

        elif extension == ".docx":
            loader = Docx2txtLoader(filepath)

        elif extension == ".txt":
            loader = TextLoader(filepath)

        else:
            raise Exception("Unsupported file format")

        return loader.load()