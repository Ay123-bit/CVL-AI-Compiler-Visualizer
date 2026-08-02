from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from compiler import compile_and_run

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Code(BaseModel):
    code: str


@app.get("/")
def root():
    return {
        "success": True,
        "message": "CVL Compiler Backend Running"
    }


@app.post("/compile")
def compile(code: Code):

    return compile_and_run(code.code)
