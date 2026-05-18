from pydantic import BaseModel
from typing import List

class Citation(BaseModel):
    source: str
    content: str

class QueryResponse(BaseModel):
    answer: str
    citations: List[Citation]