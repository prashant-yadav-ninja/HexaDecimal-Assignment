import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  // const [classassign,setClassassign] = useState(true)

  useEffect(() => {
    axios.get("/api/show").then((response) => setData(response.data));
  }, []);

  const handleClick = (id) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate(`/user/${id}`);
  };

  return (
    <>
      <h2>this is frontend</h2>
      <p>data : {data.length} </p>
      <table className="table">
        <thead className="heading">
          <tr>
            <th>id</th>
            <th>username</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody className="bodytable">
          {data.map((item) => (
            <tr
              onClick={() => handleClick(item.id)}
              key={item.id}
              className="row"
            >
              <td> {item.id} </td>
              <td> {item.username} </td>
              <td> {item.name} </td>
              <td> {item.email} </td>
              <td> {item.phone} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
