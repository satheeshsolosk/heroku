const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const port = 8080;

let carInformation ={};

app.use(express.json());

app.get('/', (request, response) => {
    response.send('i am sk')
  })
  

app.post('/carRecord',(request, response)=>{
    console.log("request",request.body);
    carInformation = request.body;
    response.status(300).send({response:"data received succesfully"});
    
})
app.get("/getCarInfo",(request,response)=>{
    response.status(300).send(carInformation);
})
app.put("/updateCarInfo",(request,response) =>{
  console.log("request",request.body);
  carInformation.carName = request.body.carName;
  response.status(300).send({result:"data update succesfully"});   
});

app.delete("/deleteInfo",(request,response) =>{
  carInformation ={};
  response.status(300).send({result:"data update succesfully"});   

})





















  

app.listen(port, () => {
    console.log("server is been listening to the port "+port);
  })