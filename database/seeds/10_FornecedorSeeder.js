'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Fornecedor = use('App/Models/Fornecedor')

class FornecedorSeeder {
  async run () {
    await Fornecedor.createMany([
      {nome: 'Pedro_teste', endereco: 'Samambaia Norte', telefone: '(61) 98494-1352'}
      
    ])
  }
}

module.exports = FornecedorSeeder
