'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendaSchema extends Schema {
  up () {
    this.create('vendas', (table) => {
      table.increments()
      table.decimal('valor_venda')
      //table.integer('qtd_venda')
      table.date('data_venda').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vendas')
  }
}

module.exports = VendaSchema
