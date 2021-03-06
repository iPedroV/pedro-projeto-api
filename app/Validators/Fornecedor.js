'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Fornecedor extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|min:3|max:100',
      endereco: 'required|min:5|max:155',
      cep: 'required|min:8|max:11',
      cnpj: 'required|min:14|max:18',
      telefone: 'min:10|max:16',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Fornecedor
