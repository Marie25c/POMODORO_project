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

## Ajout 2 eme page


### Installer :

```
npm install react-router-dom
```

### Crée la 2e page : 

```
function About() {
  return <h1>Page À propos</h1>;
}

export default About;

```

### Définir le routeur :

```
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function Home() {
  return <h1>Page Accueil</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/about">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

      