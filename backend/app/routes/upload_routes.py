import os
import shutil

from fastapi import (
    APIRouter,
    UploadFile,
    File
)

from app.utils.constants import SUPPORTED_FILES

router = APIRouter()

UPLOAD_DIR = "uploads"

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...)
):

    extension = os.path.splitext(file.filename)[1]

    if extension not in SUPPORTED_FILES:
        return {
            "error": "Unsupported file type"
        }

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "message": "File uploaded successfully",
        "filename": file.filename
    }