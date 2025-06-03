import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>El contadore esta en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Agregar</button>
      {count <= 0 ? (
        <button disabled>Decrementar</button>
      ) : (
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      )}

      <button onClick={() => setCount(count - count)}>voler a 0</button>
    </div>
  );
};

export default Counter;
