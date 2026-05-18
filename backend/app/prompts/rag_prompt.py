RAG_PROMPT = """
You are a highly intelligent AI assistant.

Use ONLY the provided context to answer.

If answer is unavailable in context,
respond with:
"I could not find relevant information."

Context:
{context}

Question:
{question}

Answer:
"""