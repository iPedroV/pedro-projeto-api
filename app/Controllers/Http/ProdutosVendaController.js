'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with produtosVendas
 */

const { getCamposProdutosVenda, getCamposListagem } = require("../../Models/ProdutosVenda")
const ProdutosVenda = use('App/Models/ProdutosVenda')

class ProdutosVendaController {
  /**
   * Show a list of all produtosVendas.
   * GET produtosVendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

    //const {page, perPage} = request.all()
    //return ProdutosVenda.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return ProdutosVenda.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return ProdutosVenda.all()
  }

  /**
   * Render a form to be used for creating a new produtosVenda.
   * GET produtosVendas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new produtosVenda.
   * POST produtosVendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposProdutosVenda()
    const produtosVenda = request.only(campos)
    return await ProdutosVenda.create(produtosVenda);
  }

  /**
   * Display a single produtosVenda.
   * GET produtosVendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await ProdutosVenda.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing produtosVenda.
   * GET produtosVendas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update produtosVenda details.
   * PUT or PATCH produtosVendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const produtosVenda = await ProdutosVenda.findOrFail(params.id)
    const data = request.only(getCamposProdutosVenda())

    produtosVenda.merge(data)
    await produtosVenda.save()

    return produtosVenda;
  }

  /**
   * Delete a produtosVenda with id.
   * DELETE produtosVendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const produtosVenda = await ProdutosVenda.findOrFail(params.id)
    return await produtosVenda.delete();
  }
}

module.exports = ProdutosVendaController