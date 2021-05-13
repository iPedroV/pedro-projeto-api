'use strict'

/*
|--------------------------------------------------------------------------
| MarcaFornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Marca_Fornecedor = use('App/Models/MarcasFornecedor')

class MarcaFornecedorSeeder {
  async run () {
    await Marca_Fornecedor.createMany([
      {marca_id: 1, fornecedor_id: 1}
    ])
  }
}

module.exports = MarcaFornecedorSeeder
