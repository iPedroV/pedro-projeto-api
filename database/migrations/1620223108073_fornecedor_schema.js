'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedores', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('endereco', 155).notNullable()
      table.string('cep', 11).notNullable()
      table.string('cnpj', 18).notNullable()
      table.string('telefone', 16)
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores')
  }
}

module.exports = FornecedorSchema
