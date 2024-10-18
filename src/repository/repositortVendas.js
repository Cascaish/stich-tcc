import con from "./connection.js";



export async function inserirVendas(vendas){

    const comando = `
    
    insert into adm (produtos, valor, quantidade, dia_da_venda, id_clientes, numero)
    values(?,?,?,?,?,?)
    `;
   let resposta = await con.query(comando , [vendas.produtos, vendas.valor, vendas.quantidade,  vendas.dia, vendas.id_clientes, vendas.numero]);
  let info = resposta[0];

  return info.insertId;

}




export async function consultarVendas(){

const comando = `


select   id_vendas   id,
         produtos    produtos,
         valor     valor,
         quantidade  quantidade,
         dia_da_venda dia da venda,
         id_clientes  id da venda,
         numero numero
from  vendas; 
`
let resposta = await con.query(comando);
        let registros = resposta[0]
    
        return registros;
}


export async function consultarVendasTelefone(telefone){

  const comando = `
  
           select   id_vendas    id,
           produtos    produtos,
           vendas     vendas,
           quantidade  quantidade,
           dia_da_venda dia da venda, 
           id_clientes  id clientes,
           numero    numero,
           from vendas
           where numero = ?  
  `;
  let resposta = await con.query(comando,[telefone]);
          let registros = resposta[0];
      
          return registros;
  }


export async function alterarVendas(telefone , vendas){

  const comando = `
  
  
  update vendas
  set   produtos  =  ?,
           vendas  =   ?,
           quantidade = ?,
           dia_da_venda = ?
           id_clientes = ?
           numero = ?
  where numero = ?;
  `

  let resposta = await con.query(comando , [vendas.produtos, vendas.valor, vendas.quantidade,  vendas.dia, vendas.id_clientes, vendas.numero ,telefone]);
  let info = resposta[0];
  return info.insertId;

}


export async function deletarVendas(telefone){

  const comando = `
  
  
  delete from vendas
  where telefone = ?
  `;

  let resposta = await con.query(comando , [telefone]);
  let info = resposta[0];
  return info.insertId;

}