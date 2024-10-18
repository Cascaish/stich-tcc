import apiControllerUsuario from './controller/apiControllerUsuario.js'
import apiControllerClientes from './controller/apiControllerClientes.js'


export function rotas(servidor){

    servidor.use(apiControllerUsuario)
    servidor.use(apiControllerClientes)


}

export default rotas;