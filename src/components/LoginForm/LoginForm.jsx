import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const login = async (e) => {
    e.preventDefault();

    const loginInformation = {
      username,
      password,
    };
    try {
      console.log(loginInformation);
      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInformation),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={login}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ingresa tu usuario"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
