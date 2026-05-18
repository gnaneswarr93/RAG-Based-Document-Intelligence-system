from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    GROQ_API_KEY: str

    MODEL_NAME: str = "llama3-8b-8192"

    VECTOR_DB_PATH: str = "vector_db/faiss_index"

    class Config:
        env_file = ".env"


settings = Settings()