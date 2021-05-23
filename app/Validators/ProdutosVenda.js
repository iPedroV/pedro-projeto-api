'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class ProdutosVenda extends ValidatorAbstract{
  get rules () {
    return {
      produto_id: 'required|integer',
      venda_id: 'required|integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = ProdutosVenda
