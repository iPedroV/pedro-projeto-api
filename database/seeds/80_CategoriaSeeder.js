'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Categoria = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await Categoria.createMany([
      {descricao: 'Alimentos que estragam com o decorrer do tempo.', setor_id: 1},
      {descricao: 'Alimentos que não estragam com o decorrer do tempo.', setor_id: 2},
      {descricao: 'Produtos de limpeza e produtos voltado para higiene e beleza.', setor_id: 3},
      {descricao: 'Ferramentas para construção e jardinagem', setor_id: 4},
    ])
  }
}

module.exports = CategoriaSeeder
