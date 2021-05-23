'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Categoria extends ValidatorAbstract {
  get rules () {
    return {
      descricao: 'required|max:255',
      setor_id: 'required|integer',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Categoria
