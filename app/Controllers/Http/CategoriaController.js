'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */

const { getCamposCategoria } = require("../../Models/Categoria")
const Categoria = use('App/Models/Categoria')

class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Categoria.query().paginate(page, perPage)

    return Categoria.all()
  }

  /**
   * Render a form to be used for creating a new categoria.
   * GET categorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposCategoria()
    const categoria = request.only(campos)
    return await Categoria.create(categoria);
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Categoria.findOrFail(params.id)

    return await Categoria.query().with('setor').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing categoria.
   * GET categorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update categoria details.
   * PUT or PATCH categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    const data = request.only(getCamposCategoria())

    categoria.merge(data)
    await categoria.save()

    return categoria;
  }

  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    return await categoria.delete();
  }
}

module.exports = CategoriaController