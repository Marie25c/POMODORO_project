# POMODORO_project
Veux juste essayer, un pomodoro simple



# BACKEND

## Environnement Virtuel et FastAPI

```

python3 -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt

```

Requirements.txt :

fastapi <- API
uvicorn <- API
pydantic
sqlmodel <- Faire nos requête SQL
psycopg2-binaty <- Communication entre Python et PostgreSQL

Local Backend url :
http://localhost:8000/docs

# FRONTEND

## Lancement de React

```

npm create vite@latest frontend --template react
> React
> JavaScript

```

## Exécuter

```

npm run dev

```


      {/* Affiche la liste des usernames */}
      <ul>
        {userName.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      