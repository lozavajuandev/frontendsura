import './ClientForm.css'


function ClientForm() {
    return (



        <div className="form-container">
            <form action="" className='client-form'>
                <div>
                    <label htmlFor="document">Documento</label>
                    <input type="text" placeholder="Numero de documento" />
                </div>
                <div>
                    <label htmlFor="documentType">Tipo de documento</label>
                    <select name="" id="">
                        <option value="CC">Cedula de ciudadania</option>
                        <option value="NIT">NIT</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" placeholder="Nombre" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Correo electronico" />
                </div>
                <div>
                    <label htmlFor="phone">Numero Celular</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="phone">Dirección</label>
                    <input type="text" />
                </div>

            </form>
        </div>

    )
}

export default ClientForm