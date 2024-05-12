const express=require('express')
const app=express()
const productRouter=require('./routes/products.route')
const mongoose=require('mongoose')

// node doesnot allow to pass json in post request by default we have to add middle ware .
// Below is the middle ware we define
app.use(express.json());

const username = encodeURIComponent("<username>");
const password = encodeURIComponent(<passkey>);
const cluster = "backenddb";
let url=`mongodb+srv://${username}:${password}@${cluster}.0lzfaib.mongodb.net/node-db?retryWrites=true&w=majority&appName=backendDb`;
mongoose.connect(url)
.then(()=>{ console.log("connected to the database")
app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
})
.catch(()=>{console.log("connection fail")})

//get request 
app.get('/',(req,res)=>{
     res.send("hello ankit raj")
})

app.use('/api/products',productRouter)






