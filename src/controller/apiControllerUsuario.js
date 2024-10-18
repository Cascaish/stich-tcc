import { Router } from "express";
import { loginUsuario } from "../repository/repositoryUsuario.js";


const endpoints = Router();

endpoints.post('/usuario' ,async (req, resp) =>{
    
    try {
        let adm = req.body;
        let usuario = await loginUsuario(adm);
    
       if(usuario === null){
         resp.send({erro:"Usuario ou senha incorreta(s)"})
       }else{
        resp.send(usuario)
       }

     
        
    } catch (err) {
        
        resp.status(400).send({
            erro: err.message
    })
    
    }})
    

export default endpoints;