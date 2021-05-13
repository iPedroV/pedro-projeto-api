'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutosVendaSchema extends Schema {
  up () {
    this.create('produtos_vendas', (table) => {
      table.increments()
      table.integer('produto_id').references('id').inTable('produtos').unsigned().notNullable()
      table.integer('venda_id').references('id').inTable('vendas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos_vendas')
  }
}

module.exports = ProdutosVendaSchema
