import Alert from "../Alert/Alert";
import "./ClientForm.css";
import { useState } from "react";

function ClientForm() {
  
  const [document, setDocument] = useState("");
  const [documentType, setdocumentType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [addres, setAddress] = useState("");

  const handleCreateClient = (e) => {
    e.preventDefault();
    console.log(
      `Cliente creado: ${document} - ${name} - ${email} - ${phone} - ${addres}`
    );
    // Aquí podrías enviar los datos al backend más adelante
  };

  return (
    <div className="form-container">
      <div className="alert-container"></div>
      <form action="" className="client-form">
        <div>
          <label htmlFor="document">Documento</label>
          <input
            type="text"
            placeholder="Numero de documento"
            value={document}
            onChange={(e)=> setDocument(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="documentType">Tipo de documento</label>
          <select
            name=""
            id=""
            value={documentType}
            onChange={(e) => setdocumentType(e.target.value)}
          >
            <option value="CC">Cedula de ciudadania</option>
            <option value="NIT">NIT</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Numero Celular</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Dirección</label>
          <input
            type="text"
            value={addres}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="main-button" onClick={handleCreateClient}>
          Crear Cliente
        </button>
        <button
          className="secondary-button"
          onClick={() => setDocument(document)}
        >
          {" "}
          Consultar DIAN
        </button>
      </form>
    </div>
  );
}

export default ClientForm;
