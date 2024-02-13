import express, { response, urlencoded } from "express"
import axios from "axios"

const port = 5100

const app = express()

app.use(express.urlencoded({limit: "16kb",extended:true}));


app.get('/api/show',(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        res.send(response.data)
    })
})

app.get(`/api/help/id`,(req,res)=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>{
        console.log(response.data);
        res.send(response.data)
    })
})




app.listen(port,()=>{
    console.log('server is ready and running at : ', port )
})