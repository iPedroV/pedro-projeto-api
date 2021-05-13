'use strict'

/*
|--------------------------------------------------------------------------
| UnidadesMedidaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Unidade = use('App/Models/UnidadeMedida')

class UnidadesMedidaSeeder {
  async run () {
    await Unidade.createMany([
      {unidade_medida: 'mg'},
      {unidade_medida: 'g'},
      {unidade_medida: 'Kg'},
      {unidade_medida: 'm'},
      {unidade_medida: 'A'},
      {unidade_medida: 'ml'},
      {unidade_medida: 'L'}
    ])
  }
}

module.exports = UnidadesMedidaSeeder
