'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcasFornecedorSchema extends Schema {
  up () {
    this.create('marcas_fornecedores', (table) => {
      table.increments()
      table.integer('marca_id').references('id').inTable('marcas').unsigned().notNullable()
      table.integer('fornecedor_id').references('id').inTable('fornecedores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('marcas_fornecedores')
  }
}

module.exports = MarcasFornecedorSchema
