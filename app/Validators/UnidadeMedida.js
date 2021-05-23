'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class UnidadeMedida extends ValidatorAbstract{
  get rules () {
    return {
      unidade_medida: 'required|min:1|max:10'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = UnidadeMedida
