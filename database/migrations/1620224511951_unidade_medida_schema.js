'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnidadeMedidaSchema extends Schema {
  up () {
    this.create('unidade_medidas', (table) => { //apaguei o 's' de unidade
      table.increments()
      table.string('unidade_medida', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('unidade_medidas')
  }
}

module.exports = UnidadeMedidaSchema
