'use strict'

/*
|--------------------------------------------------------------------------
| CompraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Compra = use('App/Models/Compra')

class CompraSeeder {
  async run () {
    await Compra.createMany([
      {valor_compra: 200,
       //qtd_compra: 10, 
       data_compra: '2020-12-11', 
       fornecedor_id: 1, 
       produto_id: 1}
    ])
  }
}

module.exports = CompraSeeder
