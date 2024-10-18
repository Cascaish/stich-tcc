import apiControllerUsuario from './controller/apiControllerUsuario.js'



export function rotas(servidor){

    servidor.use(apiControllerUsuario)


}

export default rotas;