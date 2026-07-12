from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import resend
import os

load_dotenv()

app = FastAPI(title="tuply. API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("FRONTEND_URL", "http://localhost:3000"),
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:5173",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    company: str
    email: EmailStr
    message: str


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/contact")
async def contact(form: ContactForm):
    resend.api_key = os.getenv("RESEND_API_KEY", "")

    resend.Emails.send({
        "from": "tuply. <hello@tuply.co>",
        "to": os.getenv("CONTACT_EMAIL", "hello@tuply.co"),
        "subject": f"New enquiry from {form.name} — {form.company}",
        "html": f"""
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Company:</strong> {form.company}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Message:</strong><br>{form.message}</p>
        """,
    })

    return {"success": True}
