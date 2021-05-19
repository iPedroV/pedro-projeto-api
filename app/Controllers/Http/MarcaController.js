'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas
 */

const { getCamposMarca } = require("../../Models/Marca")
const Marca = use('App/Models/Marca')

class MarcaController {
  /**
   * Show a list of all marcas.
   * GET marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Marca.query().paginate(page, perPage)

    return Marca.all()
  }

  /**
   * Render a form to be used for creating a new marca.
   * GET marcas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new marca.
   * POST marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposMarca()
    const marca = request.only(campos)
    return await Marca.create(marca);
  }

  /**
   * Display a single marca.
   * GET marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Marca.findOrFail(params.id)

    return await Marca.query().with('produtos').with('fornecedores').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing marca.
   * GET marcas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update marca details.
   * PUT or PATCH marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const marca = await Marca.findOrFail(params.id)
    const data = request.only(getCamposMarca())

    marca.merge(data)
    await marca.save()

    return marca;
  }

  /**
   * Delete a marca with id.
   * DELETE marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const marca = await Marca.findOrFail(params.id)
    return await marca.delete();
  }
}

module.exports = MarcaController