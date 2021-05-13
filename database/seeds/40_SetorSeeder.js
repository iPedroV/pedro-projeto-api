'use strict'

/*
|--------------------------------------------------------------------------
| SetorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Setor = use('App/Models/Setor')

class SetorSeeder {
  async run () {
    await Setor.createMany([
      {nome: 'Alimentos Perecíveis'},
      {nome: 'Alimentos Não-Perecíveis'},
      {nome: 'Limpeza'},
      {nome: 'Ferramentas'}
    ])
  }
}

module.exports = SetorSeeder
