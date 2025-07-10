import React from "react";
import { useState } from "react";


function Validation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Email дұрыс емес");
            return;
        }
        else if (password.length < 6) {
            setError("құпия сөз 6 таңбадан кем болмауы керек");
            return;
        }
        else {
            setError("")
            alert("Форма сәтті жіберілді!")

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email:</label>
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br />
                <label htmlFor="">Құпия сөз: </label>
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit">Кіру</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    )
}
export default Validation