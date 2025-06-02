import "./LoginForm.css"

function LoginForm() {
  return (
    <div className="form-container">
      <form className="login-form">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ingresa tu usuario"
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
