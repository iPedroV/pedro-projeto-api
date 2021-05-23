'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class MarcasFornecedor extends ValidatorAbstract{
  get rules () {
    return {
      marca_id: 'required|integer',
      fornecedor_id: 'required|integer'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = MarcasFornecedor
