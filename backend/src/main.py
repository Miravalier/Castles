from fastapi import FastAPI


app = FastAPI()


@app.get("/api/status")
async def get_status():
    return {"status": "up"}
