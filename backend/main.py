import uvicorn # type : ignore
from fastapi import FastAPI 
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel 
from typing import List
from sqlmodel import Field, Session, SQLModel, create_engine, select

class User(SQLModel,table=True):
    username : str = Field(primary_key=True)
    recent_connect : str | None = Field(default=None, index=True)

# Connexion PostgreSQL
DATABASE_URL = "postgresql+psycopg2://myuser:mypassword@localhost:5432/mydatabase"
engine = create_engine(DATABASE_URL, echo=True)

# Créer les tables automatiquement
SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/usernames/",response_model=User)
def add_usernames(new_user: User, session: Session = Depends(get_session)) -> User:
    print("DATA REÇUE :", new_user)
    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    return new_user


@app.get("/usernames/",response_model=List[User])
def get_usernames(session: Session = Depends(get_session)):
    users = session.exec(select(User)).all()
    return users


if __name__ == "__main__":
    uvicorn.run(app,host="0.0.0.0", port=8000)

