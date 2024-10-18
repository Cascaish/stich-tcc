import { Router } from "express";
import { inserirUsuario, loginUsuario } from "../repository/repositoryUsuario.js";
import { gerarToken } from "../utils/jwt.js";

const endpoints = Router();

endpoints.post('/usuario' ,async (req, resp) =>{
    
    try {
        let usuario = req.body;
        let uss = await loginUsuario(usuario);


        if (uss == null) {
          resp.send({ erro: "Usuário ou senha incorreto(s)" })
      } else {
          let token = gerarToken(uss);
          resp.send({
              "token": token
          })
      }
  }catch (err) {
        
        resp.status(400).send({
            erro: err.message
    })
    
    }})


    endpoints.post('/inserirUsuario' ,async (req, resp) =>{
    try {
      let usuario = req.body;
      let ins = await inserirUsuario(usuario);
  
     if(ins === null){
       resp.send({erro:"Usuario ou senha incorreta(s)"})
     }else{
      resp.send({ins}) 


     } 
    } catch (err) {
      
      resp.status(400).send({
        erro: err.message
    })
    }
          
            })
        
    

export default endpoints;