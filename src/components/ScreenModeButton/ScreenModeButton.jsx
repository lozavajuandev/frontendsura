import { useState } from "react"



const ScreenModeButton = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Activo ✅" : "Inactivo 📛"}
            </button>
        </div>
    )
}

export default ScreenModeButton