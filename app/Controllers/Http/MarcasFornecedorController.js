'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas_fornecedors
 */

const { getCamposMarcasFornecedor } = require("../../Models/MarcasFornecedor")
const MarcasFornecedor = use('App/Models/MarcasFornecedor')

class MarcasFornecedorController {
  /**
   * Show a list of all marcas_fornecedors.
   * GET marcas_fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return MarcasFornecedor.query().paginate(page, perPage)

    return MarcasFornecedor.all()
  }

  /**
   * Render a form to be used for creating a new marcas_fornecedor.
   * GET marcas_fornecedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new marcas_fornecedor.
   * POST marcas_fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposMarcasFornecedor()
    const marcas_fornecedor = request.only(campos)
    return await MarcasFornecedor.create(marcas_fornecedor);
  }

  /**
   * Display a single marcas_fornecedor.
   * GET marcas_fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await MarcasFornecedor.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing marcas_fornecedor.
   * GET marcas_fornecedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update marcas_fornecedor details.
   * PUT or PATCH marcas_fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const marcas_fornecedor = await MarcasFornecedor.findOrFail(params.id)
    const data = request.only(getCamposMarcasFornecedor())

    marcas_fornecedor.merge(data)
    await marcas_fornecedor.save()

    return marcas_fornecedor;
  }

  /**
   * Delete a marcas_fornecedor with id.
   * DELETE marcas_fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const marcas_fornecedor = await MarcasFornecedor.findOrFail(params.id)
    return await marcas_fornecedor.delete();
  }
}

module.exports = MarcasFornecedorController