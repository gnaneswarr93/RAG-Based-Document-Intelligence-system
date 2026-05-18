from fastapi import APIRouter

from app.models.query_model import QueryRequest

from app.services.rag_service import RAGService

router = APIRouter()

rag_service = RAGService()

@router.post("/query")
async def query_documents(
    request: QueryRequest
):

    result = rag_service.ask_question(
        request.question
    )

    return result