import con from "./connection.js"
import crypto from "crypto-js";



export async function inserirUsuario(user){
    const comando = `
    
    insert into usuario(nm_usuario, email, ds_senha)
    values(?,?,?)
    `

    let hash = crypto.SHA256(user.senha).toString();
    let resp = await con.query(comando, [user.nome, user.email,hash]);
    let info = resp[0];
    return info.insertId;
}




export async function loginUsuario(user){

    const comando = 
  
  `
  select 
    nm_usuario nome,
       email  email,
       ds_senha senha
  from usuario
  where nm_usuario = ?
       and ds_senha = ?
  `;

  let registros = await con.query(comando, [user.nome]);
  let usuario = registros[0][0]; 

  let hash = crypto.SHA256(user.senha).toString();

  if (hash === usuario.senha) {
      return usuario; 
  } else {
      return null; 
  }

}


