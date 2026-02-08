from fastapi import FastAPI, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import shutil, sqlite3, os

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
app.mount("/static", StaticFiles(directory="static"), name="static")

DB = "menu.db"

def db():
    return sqlite3.connect(DB)

with db() as c:
    c.execute("""CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, category TEXT, price REAL,
        discount INTEGER, image TEXT,
        available INTEGER, bestseller INTEGER, popular INTEGER
    )""")

@app.post("/login")
def login(username: str = Form(...), password: str = Form(...)):
    return {"success": username=="matin" and password=="1025"}

@app.post("/item")
def add_item(
    name: str = Form(...),
    category: str = Form(...),
    price: float = Form(...),
    discount: int = Form(...),
    available: int = Form(1),
    bestseller: int = Form(0),
    popular: int = Form(0),
    image: UploadFile = None
):
    img = ""
    if image:
        img = f"static/uploads/{image.filename}"
        with open(img, "wb") as f:
            shutil.copyfileobj(image.file, f)
    with db() as c:
        c.execute("INSERT INTO items VALUES (NULL,?,?,?,?,?,?,?,?)",
        (name,category,price,discount,img,available,bestseller,popular))
    return {"status":"ok"}

@app.get("/items")
def items():
    with db() as c:
        return [dict(zip(
            ["id","name","category","price","discount","image","available","bestseller","popular"], r
        )) for r in c.execute("SELECT * FROM items")]