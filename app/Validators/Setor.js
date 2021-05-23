'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Setor extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|min:1|max:45'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Setor
