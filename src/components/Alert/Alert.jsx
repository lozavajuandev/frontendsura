import "./Alert.css";
const Alert = () => {
  const isTrue = true;
  return (
    isTrue ? (
      <div className="container">
        <p className="alert-message"> ✅ Usuario creado exitosamente</p>
      </div>
    ) : (
      <div className="container-error">
        <p className="alert-message-error"> ⚠️ Error al crear el usuario</p>
      </div>
    )
  );
};

export default Alert;
