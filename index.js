const app= require('express')();

const  PORT = 4000;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("hello this is succesfull Get Request")
});

app.post('/postRequest', (req,res)=>{
    res.send("Jesús Javier Zermeño Rodríguez\n20997\n5°A")
});




