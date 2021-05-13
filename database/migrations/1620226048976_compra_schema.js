'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompraSchema extends Schema {
  up () {
    this.create('compras', (table) => {
      table.increments()
      table.decimal('valor_compra')
      //table.integer('qtd_compra')
      table.date('data_compra').notNullable()
      table.integer('fornecedor_id').references('id').inTable('fornecedores').unsigned().notNullable()
      table.integer('produto_id').references('id').inTable('produto').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('compras')
  }
}

module.exports = CompraSchema
