import React, { useState } from 'react';


const AddUsername = ({addUsername}) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        if (userName){

            addUsername(userName);
            // + garder les 10 stats des session récentes
            // afficher le nom sur la page et mettre à la page suivante
            setUserName("");
        }

    };


return (

    <form onSubmit={handleSubmit}>

        <input type="text" value={userName} 
        onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Username"  />
        <button type="submit">
            Enter
        </button>

    </form>

);
};

export default AddUsername;
