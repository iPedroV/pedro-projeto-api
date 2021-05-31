'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(()=>{

Route.resource('/fornecedores', 'FornecedorController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'fornecedor'],
     ]))

Route.resource('/marcas', 'MarcaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'marca'],
     ]))

Route.resource('/unidadesMedida', 'UnidadeMedidaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'unidadeMedida'],
     ]))

Route.resource('/setores', 'SetorController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'setor'],
     ]))

Route.resource('/vendas', 'VendaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'venda'],
     ]))

Route.resource('/marcasFornecedor', 'MarcasFornecedorController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'marcasfornecedor'],
     ]))

Route.resource('/categorias', 'CategoriaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'categoria'],
     ]))

Route.resource('/produtos', 'ProdutoController')     
     .apiOnly()     
     .validator(new Map([     
      [['store', 'update'], 'produto'],
     ]))

Route.resource('/compras', 'CompraController')
     .apiOnly()     
     .validator(new Map([     
      [['store', 'update'], 'compra'],
     ]))

Route.resource('/produtosVenda', 'ProdutosVendaController')
     .apiOnly()     
     .validator(new Map([     
      [['store', 'update'], 'produtosvenda'],
     ]))

}).middleware('auth')