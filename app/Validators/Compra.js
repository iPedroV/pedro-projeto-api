'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Compra extends ValidatorAbstract{
  get rules () {
    return {
      valor_compra: 'required|number',
      data_compra: 'required|date',
      fornecedor_id: 'required|integer',
      produto_id: 'required|integer',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Compra
