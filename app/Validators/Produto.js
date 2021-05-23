'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Produto extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|min:3|max:100',
      descricao: 'required|min:3|max:155',
      peso_bruto: 'required|number',
      qtd_disponivel: 'required|integer',
      qtd_min: 'required|integer',
      cod_barra: 'required',
      data_fabricacao: 'date',
      data_vencimento: 'date',
      preco: 'required|number',
      categoria_id: 'required|integer',
      marca_id: 'required|integer',
      unidade_medida_id: 'required|integer',
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Produto
