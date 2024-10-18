import con from "./connection.js"




export async function inserirUsuario(usuario){
    const comando = `
    
    insert into usuario(nm_usuario, email, ds_senha)
    values(?,?,?)
    `

    let resposta = await con.query(comando, [usuario.nome, usuario.email, usuario.senha])
    let info = resposta[0]
    
    return info.insertId


}



export async function loginUsuario(usuario){

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

  let resposta = await con.query(comando , [usuario.nome, usuario.email, usuario.senha]);
  let info = resposta[0];
  return info;



}


