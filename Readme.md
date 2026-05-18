# LLM-Powered RAG Document Intelligence System

An AI-powered Retrieval-Augmented Generation (RAG) application that enables users to upload documents, perform semantic search, and ask natural language questions using Large Language Models.

---

# Features

* PDF/DOCX/TXT Upload Support
* Semantic Search using Vector Embeddings
* Retrieval-Augmented Generation (RAG)
* FAISS Vector Database
* Groq LLM Integration
* ChatGPT-style Conversational Interface
* Conversation History
* Document Management
* Source Citations
* Modern React + Tailwind Frontend
* FastAPI Backend
* LangChain Orchestration

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Zustand
* Axios
* Lucide React
* React Markdown

## Backend

* FastAPI
* LangChain
* FAISS
* Sentence Transformers
* Groq API
* Python

---

# Architecture

```text
User Query
    ↓
Embedding Generation
    ↓
FAISS Semantic Retrieval
    ↓
Relevant Context Retrieval
    ↓
LLM Prompting
    ↓
AI Response Generation
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/rag-document-intelligence.git

cd rag-document-intelligence
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Mac/Linux

```bash
source venv/bin/activate
```

---

# Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

# Create Environment Variables

Create a `.env` file inside backend directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

---

# Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# Frontend Setup

Open a new terminal:

```bash
cd frontend

npm install
```

---

# Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Upload Document

### POST `/upload`

Uploads PDF/DOCX/TXT healthcare documents.

---

## Ingest Documents

### POST `/ingest`

Processes uploaded documents:

* text extraction
* chunking
* embedding generation
* FAISS indexing

---

## Ask Questions

### POST `/query`

Example Request:

```json
{
  "question": "What symptoms are associated with diabetes?"
}
```

Example Response:

```json
{
  "answer": "The document states that common symptoms of diabetes include frequent urination, increased thirst, fatigue, blurred vision, and slow wound healing.",
  "citations": [
    {
      "source": "diabetes_guide.pdf",
      "content": "Common symptoms of diabetes include increased thirst, frequent urination, fatigue, blurred vision, and delayed healing of wounds."
    }
  ]
}
```

---

# Frontend Features

* AI Chat Workspace
* ChatGPT-style Conversations
* Conversation History
* Document Management
* Delete Documents
* Upload Tracking
* Markdown Rendering
* Modern Sidebar Navigation
* Loading Animations
* Responsive UI

---

# Backend Features

* FastAPI REST APIs
* LangChain RAG Pipeline
* Semantic Retrieval
* FAISS Vector Search
* Embedding Generation
* Groq LLM Integration
* Context-aware Prompting
* Source Citations

---

# Real World Applications

* Healthcare Knowledge Assistants
* Clinical Document QA Systems
* Medical Research Retrieval
* Patient Report Analysis
* Hospital Knowledge Search
* AI-powered Healthcare Support Systems

---

# Future Enhancements

* Streaming Responses
* Authentication System
* Cloud Deployment
* Hybrid Search (BM25 + Vector Search)
* OCR Support
* PDF Preview
* Multi-document Filtering
* Real-time Collaboration
* Multi-modal RAG

---

# Screenshots

## Dashboard

*Add dashboard screenshot here*

## Chat Interface

*Add chat interface screenshot here*

## Document Workspace

*Add documents workspace screenshot here*

---

# GitHub Push Commands

```bash
git init

git add .

git commit -m "Initial Commit"

git branch -M main

git remote add origin YOUR_REPOSITORY_URL

git push -u origin main
```
