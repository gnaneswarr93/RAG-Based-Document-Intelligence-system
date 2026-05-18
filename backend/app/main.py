from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.upload_routes import router as upload_router
from app.routes.query_routes import router as query_router
from app.routes.ingest_routes import router as ingest_router
app = FastAPI(
    title="LLM-Powered RAG System"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(upload_router)
app.include_router(query_router)
app.include_router(ingest_router)

@app.get("/")
async def root():

    return {
        "message": "RAG Backend Running"
    }