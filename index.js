// const express = require('express');
// const app = express();
// const port = 3000;

// app.use((req,res,next)=>{
//     const randomNumber = Math.floor(Math.random()*10);
//     console.log(`Random Number: ${randomNumber}`);
//     if(randomNumber %3) return next();
//     else return res.sendStatus(403); //403 forbidden error를 HTTP응답으로 보냄
// });

// app.use((req,res,next)=>{
//     const {method,path}=req; //요청객체(req)에서 요청의 메서드와 경로를 가져옴
//     console.log(`${method} ${path}`);
//     return next();
// });

// app.get('/',(req,res)=>res.send('GET /'));
// app.post('/',(req,res)=>res.send('POST /'));


// app.listen(port, ()=>console.log(`server listening on port ${port}`));


const express = require('express');
const router = require('./router');
const port = 3000;

const app=express();
app.use('/',router);


app.listen(port, ()=>console.log(`server listening on port ${port}`));