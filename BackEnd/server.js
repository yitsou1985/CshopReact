import express from 'express';
import data from './data';

const app =express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
});

app.listen(3300,()=>{console.log('server started at "http://localhost:3300')})
/* pour que le "node backend/server.js" puisse marcher 
n oublie pas d installer npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
ceci permet de convertir jsx6 en jsx5 pour le node qui ne marche uniquement en jsx5*/