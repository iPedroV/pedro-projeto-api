'use strict'

class Fornecedor {
  get rules () {
    return {
      nome: 'required|max:45',
      endereco: 'required|max:45',
      telefone: 'min:14|max:16'
    }
  }
}

module.exports = Fornecedor
