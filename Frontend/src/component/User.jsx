import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const User = () => {

    const [data, setData] = useState({});
    const {id} = useParams()

  useEffect(() => {
    axios.get(`/api/help/${id}`).then((response) => setData(response.data));
    console.log(data)
  }, [id,data]);
    
  return (
    <div>
      <h2>this is user page</h2>
    </div>
  )
}

export default User
