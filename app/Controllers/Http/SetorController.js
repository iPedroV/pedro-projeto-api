'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with setors
 */

const { getCamposSetor, getCamposListagem } = require("../../Models/Setor")
const Setor = use('App/Models/Setor')

class SetorController {
  
  /**
  * @swagger
  * /setores:
  *   get:
  *     tags:
  *       - Setor
  *     summary: Listagem completa de Setores
  *     responses:
  *       200:
  *         description: Lista de Setores
  */

  async index({ request, response, view }) {
    
    //const {page, perPage} = request.all()
    //return Setor.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Setor.query()
                  .select(campos)
                  .paginate(page, perPage)

    //return Setor.all()
  }

  /**
   * Render a form to be used for creating a new setor.
   * GET setors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
  * @swagger
  * /setores:
  *   post:
  *     tags:
  *       - Setor
  *     summary: Criação de uma novo Setor
  *     parameters:
  *         - name: nome
  *           description: Nome do setor
  *           in: query
  *           required: true
  *           type: string
  *     responses:
  *       200:
  *         description: Setor criado
  */

  async store({ request, response }) {
    const campos = getCamposSetor()
    const setor = request.only(campos)
    return await Setor.create(setor);
  }

  /**
   * Display a single setor.
   * GET setors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Setor.findOrFail(params.id)

    return await Setor.query().with('categorias').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing setor.
   * GET setors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update setor details.
   * PUT or PATCH setors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const setor = await Setor.findOrFail(params.id)
    const data = request.only(getCamposSetor())

    setor.merge(data)
    await setor.save()

    return setor;
  }

  /**
   * Delete a setor with id.
   * DELETE setors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const setor = await Setor.findOrFail(params.id)
    return await setor.delete();
  }
}

module.exports = SetorController