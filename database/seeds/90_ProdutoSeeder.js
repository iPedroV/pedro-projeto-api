'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Produto = use('App/Models/Produto')

class ProdutoSeeder {
  async run () {
    await Produto.createMany([
      {nome: 'Arroz_teste',
      descricao: 'Essencial para um almoço brasileiro',
      peso_bruto: 10,
      peso_liquido: 9.98,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'ABF212HDUU2DHXU1H2HD',
      data_fabricacao: '01/01/2020',
      preco: 20,
      categoria_id: 2,
      marca_id: 1,
      unidade_medida_id: 3
      } 
    ])
  }
}

module.exports = ProdutoSeeder
