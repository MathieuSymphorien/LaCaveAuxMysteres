"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./home.css";

export default function HomePage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const trimmed = code.trim().toLowerCase();

    if (!trimmed) {
      setError("Entre un code pour commencer...");
      return;
    }

    setError("");
    router.push(`/game/${trimmed}`);
  };

  return (
    <main className="home">
      <div className="home__content">
        <h1 className="home__title">La Cave aux Mystères</h1>
        <p className="home__subtitle">Chaque code ouvre une porte...</p>

        <div className="home__input-group">
          <input
            type="text"
            className="home__input"
            placeholder="Entrez votre code..."
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="home__button" onClick={handleSubmit}>
            Entrer
          </button>
        </div>

        {error && <p className="home__error">{error}</p>}
      </div>
    </main>
  );
}
