'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with unidadeMedidas
 */

const { getCamposUnidadesMedida, getCamposListagem } = require("../../Models/UnidadeMedida")
const UnidadesMedida = use('App/Models/UnidadeMedida')

class UnidadesMedidaController {
  /**
   * Show a list of all unidadeMedidas.
   * GET unidadeMedidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    
    //const {page, perPage} = request.all()
    //return UnidadesMedida.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return UnidadesMedida.query()
                  .select(campos)
                  .paginate(page, perPage)

    //return UnidadesMedida.all()
  }

  /**
   * Render a form to be used for creating a new unidadeMedida.
   * GET unidadeMedidas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new unidadeMedida.
   * POST unidadeMedidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = getCamposUnidadesMedida()
    const unidadeMedida = request.only(campos)
    return await UnidadesMedida.create(unidadeMedida);
  }

  /**
   * Display a single unidadeMedida.
   * GET unidadeMedidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await UnidadesMedida.findOrFail(params.id)

    return await UnidadesMedida.query().with('produtos').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing unidadeMedida.
   * GET unidadeMedidas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update unidadeMedida details.
   * PUT or PATCH unidadeMedidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const unidadeMedida = await UnidadesMedida.findOrFail(params.id)
    const data = request.only(getCamposUnidadesMedida())

    unidadeMedida.merge(data)
    await unidadeMedida.save()

    return unidadeMedida;
  }

  /**
   * Delete a unidadeMedida with id.
   * DELETE unidadeMedidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const unidadeMedida = await UnidadesMedida.findOrFail(params.id)
    return await unidadeMedida.delete();
  }
}

module.exports = UnidadesMedidaController