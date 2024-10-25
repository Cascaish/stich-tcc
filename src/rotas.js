import apiControllerUsuario from './controller/apiControllerUsuario.js'
import apiControllerClientes from './controller/apiControllerClientes.js'
import apiControllerVendas from './controller/apiControllerVendas.js'


export function rotas(servidor){

    servidor.use(apiControllerUsuario)
    servidor.use(apiControllerClientes)
    servidor.use(apiControllerVendas)

}

export default rotas;