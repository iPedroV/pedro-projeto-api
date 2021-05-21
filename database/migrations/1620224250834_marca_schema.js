'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcaSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments()
      table.string('cnpj', 20).notNullable()
      table.string('nome', 100).notNullable()
      table.string('telefone', 15)
      table.string('email', 45)
      table.string('site', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcaSchema
