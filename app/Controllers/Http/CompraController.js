'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with compras
 */

const { getCamposCompra, getCamposListagem } = require("../../Models/Compra")
const Compra = use('App/Models/Compra')

class CompraController {
  
  /**
  * @swagger
  * /compras:
  *   get:
  *     tags:
  *       - Compra
  *     summary: Listagem completa de Compras
  *     responses:
  *       200:
  *         description: Lista de Compras
  */

  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Compra.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Compra.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return Compra.all()
  }

  /**
   * Render a form to be used for creating a new compra.
   * GET compras/create
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
  * /compras:
  *   post:
  *     tags:
  *       - Compra
  *     summary: Criação de uma nova Compra
  *     parameters:
  *         - name: valor_compra
  *           description: Valor da Compra
  *           in: query
  *           required: false
  *           type: number
  *         - name: data_compra
  *           description: Data da Compra
  *           in: query
  *           required: true
  *           type: string  
  *         - name: fornecedor_id
  *           description: ID de Fornecedor
  *           in: query
  *           required: true
  *           type: integer  
  *         - name: data_compra
  *           description: ID de Produto
  *           in: query
  *           required: true
  *           type: integer  
  *     responses:
  *       200:
  *         description: Compra efetuada
  */
  async store({ request, response }) {
    const campos = getCamposCompra()
    const compra = request.only(campos)
    return await Compra.create(compra);
  }

  /**
   * Display a single compra.
   * GET compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Compra.findOrFail(params.id)

    return await Compra.query().with('fornecedor').with('produto').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing compra.
   * GET compras/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update compra details.
   * PUT or PATCH compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const compra = await Compra.findOrFail(params.id)
    const data = request.only(getCamposCompra())

    compra.merge(data)
    await compra.save()

    return compra;
  }

  /**
   * Delete a compra with id.
   * DELETE compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const compra = await Compra.findOrFail(params.id)
    return await compra.delete();
  }
}

module.exports = CompraController