'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Marca extends ValidatorAbstract{
  get rules () {
    return {
      cnpj: 'required|min:14|max:20',
      nome: 'required|min:3|max:100',
      telefone: 'min:10|max:16',
      email: 'min:10|max:45',
      site: 'min:10|max:30', 
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Marca
