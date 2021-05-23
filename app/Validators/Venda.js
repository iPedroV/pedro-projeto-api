'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Venda extends ValidatorAbstract{
  get rules () {
    return {
      valor_venda: 'number',
      data_venda: 'required|date'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Venda
