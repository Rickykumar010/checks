require('dotenv').config();
const express=require('express');
const { mongoConnect } = require('./configs/db');
const { userRouter } = require('./router/userRouter');
const { auth } = require('./authentication/auth');
const cors = require('cors');
const { taskRouter } = require('./router/taskRouter');
const app=express();
app.use(cors());
const port=process.env.port

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.get('/tetion',auth,(req,res)=>{
    res.send("Hello World");
})

app.listen(port,async()=>{
    try{
        await mongoConnect(process.env.mongodb_url);
        console.log(`Listening on port ${port}`);

    }catch(err){
        console.log(err);
    }
})
