import React, { useEffect, useState } from 'react';
import api from "../api.js";
import AddUsername from './AddUsername';

const UserName = () => {
  // State pour stocker la liste des usernames
  const [users, setUsers] = useState([]);

  // Fonction pour récupérer la liste des usernames depuis l'API
  const fetchUsers = async () => {
    try {
      const response = await api.get('/usernames');
      setUsers(response.data); // met à jour le state
    } catch (error) {
      console.error("Error fetching Username", error);
    }
  };

  // Appel automatique lors du chargement du composant
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fonction pour ajouter un nouvel username
  const addUsername = async (newusername) => {
    try {
        const response = await api.post("/usernames/", {
        username: newusername,
        recent_connect: new Date().toISOString(),
      });
      console.log("User ajouté :", response.data);
      fetchUsers();
    } catch (error) {
      console.error("Erreur API", error);
    }
  };

  return (
    <div>
      <h2>USERNAME</h2>
      <AddUsername addUsername={addUsername} />
    </div>
  );
};

export default UserName;
