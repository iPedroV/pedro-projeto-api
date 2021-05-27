'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vendas
 */

const { getCamposVenda, getCamposListagem } = require("../../Models/Venda")
const Venda = use('App/Models/Venda')

class VendaController {
  /**
   * Show a list of all vendas.
   * GET vendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    
    //const {page, perPage} = request.all()
    //return Venda.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Venda.query()
                  .select(campos)
                  .paginate(page, perPage)

    //return Venda.all()
  }

  /**
   * Render a form to be used for creating a new venda.
   * GET vendas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new venda.
   * POST vendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposVenda()
    const venda = request.only(campos)
    return await Venda.create(venda);
  }

  /**
   * Display a single venda.
   * GET vendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Venda.findOrFail(params.id)

    return await Venda.query().with('produtos').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing venda.
   * GET vendas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update venda details.
   * PUT or PATCH vendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const venda = await Venda.findOrFail(params.id)
    const data = request.only(getCamposVenda())

    venda.merge(data)
    await venda.save()

    return venda;
  }

  /**
   * Delete a venda with id.
   * DELETE vendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const venda = await Venda.findOrFail(params.id)
    return await venda.delete();
  }
}

module.exports = VendaController