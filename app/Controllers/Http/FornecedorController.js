'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedors
 */

const { getCamposFornecedor } = require("../../Models/Fornecedor")
const Fornecedor = use('App/Models/Fornecedor')

class FornecedorController {
  /**
   * Show a list of all fornecedors.
   * GET fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Fornecedor.query().paginate(page, perPage)

    return Fornecedor.all()
  }

  /**
   * Render a form to be used for creating a new fornecedor.
   * GET fornecedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new fornecedor.
   * POST fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposFornecedor()
    const fornecedor = request.only(campos)
    return await Fornecedor.create(fornecedor);
  }

  /**
   * Display a single fornecedor.
   * GET fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Fornecedor.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing fornecedor.
   * GET fornecedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update fornecedor details.
   * PUT or PATCH fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    const data = request.only(getCamposFornecedor())

    fornecedor.merge(data)
    await fornecedor.save()

    return fornecedor;
  }

  /**
   * Delete a fornecedor with id.
   * DELETE fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    return await fornecedor.delete();
  }
}

module.exports = FornecedorController
