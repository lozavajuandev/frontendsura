import { useFetch } from "../../hooks/useFetch";

const UserList = () => {
  const { data, error, fetching, setFetching } = useFetch(
    "http://127.0.0.1:5000/api/clients",
    "GET"
  );
  const users = data;

  console.log(users);
  return (
    <div>
      <ul>
        {error ? (
          <p>error</p>
        ) : (
          users.map((user) => (
            <li key={user.document}>
              {user.first_name + " " + user.last_name}
            </li>
          ))
        )}
      </ul>
      <button onClick={() => setFetching(!fetching)}>Colectar Datos</button>
      <button onClick={() => setFetching(false)}>Desconectar</button>
    </div>
  );
};

export default UserList;
