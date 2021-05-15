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


Route.resource('/fornecedores', 'FornecedorController').apiOnly()
Route.resource('/marcas', 'MarcaController').apiOnly()
Route.resource('/unidadesMedida', 'UnidadeMedidaController').apiOnly()
Route.resource('/setores', 'SetorController').apiOnly()
Route.resource('/vendas', 'VendaController').apiOnly()
Route.resource('/marcasFornecedor', 'MarcasFornecedorController').apiOnly()
Route.resource('/categorias', 'CategoriaController').apiOnly()
Route.resource('/produtos', 'ProdutoController').apiOnly()
Route.resource('/compras', 'CompraController').apiOnly()
Route.resource('/produtosVenda', 'ProdutosVendaController').apiOnly()