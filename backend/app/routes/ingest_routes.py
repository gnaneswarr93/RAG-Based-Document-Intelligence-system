import os

from fastapi import APIRouter

from app.services.document_loader_service import (
    DocumentLoaderService
)

from app.services.chunking_service import (
    ChunkingService
)

from app.services.vector_service import (
    VectorService
)

router = APIRouter()

UPLOAD_DIR = "uploads"

@router.post("/ingest")
async def ingest_documents():

    loader_service = DocumentLoaderService()

    chunk_service = ChunkingService()

    vector_service = VectorService()

    all_chunks = []

    for filename in os.listdir(UPLOAD_DIR):

        filepath = os.path.join(
            UPLOAD_DIR,
            filename
        )

        documents = loader_service.load_document(
            filepath
        )

        chunks = chunk_service.split_documents(
            documents
        )

        all_chunks.extend(chunks)

    vector_service.store_documents(
        all_chunks
    )

    return {
        "message": "Documents ingested successfully",
        "chunks": len(all_chunks)
    }