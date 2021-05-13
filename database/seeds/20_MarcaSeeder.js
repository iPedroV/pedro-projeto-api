'use strict'

/*
|--------------------------------------------------------------------------
| MarcaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Marca = use('App/Models/Marca')

class MarcaSeeder {
  async run () {
    await Marca.createMany([
      {cnpj: '12345678901234', nome: 'Marca_teste', email: 'testando@gmail.com'}
    ])
  }
}

module.exports = MarcaSeeder
