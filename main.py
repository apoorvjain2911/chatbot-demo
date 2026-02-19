import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from dotenv import load_dotenv

# Load variables from .env
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY)
app = FastAPI()

# CORS Middleware (Allows your UI to talk to this backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {"role": "system", "content": "You are a helpful assistant for a coaching institute."},
                {"role": "user", "content": req.message}
            ]
        )
        # Extracting content correctly as an attribute
        ai_reply = completion.choices[0].message.content
        
        # We send it back with the key "reply"
        return {"reply": ai_reply}

    except Exception as e:
        print(f"Error: {e}")
        return {"reply": "Sorry, I am having trouble connecting to the server."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)