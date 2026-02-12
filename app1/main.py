from fastapi import FastAPI

app = FastAPI(title="Producer")

@app.get("/")
def read_root():
    return {"msg":"Producer"}