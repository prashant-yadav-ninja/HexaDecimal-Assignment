import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const User = () => {

    const [data, setData] = useState({});
    const {id} = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>{
        console.log(response.data);
        setData(response.data)
    })
  }, [id]);
    
  return (
    <div>
      <h2>this is user page</h2>
      <h1>{data.title}</h1>
    </div>
  )
}

export default User
