import React from "react";
import axios from "axios";
import "./app.scss";

import { OAuthButton } from "./components/oauthButton/OAuthButton";

import buttonDataList from "./buttonData";

function App() {
  const handleAuth = async (authLink: string) => { 
      window.location.href = `http://localhost:5000${authLink}`; 
  };

  return (
    <div className="App">
      <header>OAuth City</header>
      <a href="http://localhost:5000/google">press me</a>
      <main>
        {buttonDataList.map((buttonData, index) => (
          <OAuthButton
            key={index}
            buttonData={buttonData}
            handleAuth={handleAuth}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
