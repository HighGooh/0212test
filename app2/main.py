from fastapi import FastAPI

app = FastAPI(title="Consumer")

@app.get("/")
def read_root():
    return {"msg":"Consumer"}