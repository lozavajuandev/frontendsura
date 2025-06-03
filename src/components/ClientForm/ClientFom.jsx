import Alert from "../Alert/Alert";
import "./ClientForm.css";
import { useState } from "react";

function ClientForm() {
  const [document, setDocument] = useState("");
  const [documentType, setdocumentType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setAddress] = useState("");

  const createClint = async (e) => {
    e.preventDefault();

    const newClient = {
      document,
      document_type: documentType,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
    };
    try {
      console.log(newClient);
      const response = await fetch("http://127.0.0.1:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClient),
      });
      const data = await response.json();
      console.log(data);
      alert(data)
      setDocument("");
      setFirstName("");
      setLastName("");
      setAddress("");
      setphone("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <form action="" className="client-form">
        <div>
          <label htmlFor="document">Documento</label>
          <input
            type="text"
            placeholder="Numero de documento"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
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
          <label htmlFor="firstName">Nombres</label>
          <input
            type="text"
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            placeholder="Nombre"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="main-button" onClick={createClint}>
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
