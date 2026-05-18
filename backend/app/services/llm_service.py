from langchain_groq import ChatGroq

from app.config.settings import settings


class LLMService:

    def __init__(self):

        self.llm = ChatGroq(
            groq_api_key=settings.GROQ_API_KEY,
            model_name=settings.MODEL_NAME,
            temperature=0
        )

    def get_llm(self):

        return self.llm