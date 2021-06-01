'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedors
 */

const { getCamposFornecedor, getCamposListagem } = require("../../Models/Fornecedor")
const Fornecedor = use('App/Models/Fornecedor')

class FornecedorController {
  
  /**
  * @swagger
  * /fornecedores:
  *   get:
  *     tags:
  *       - Fornecedor
  *     summary: Listagem completa de Fornecedores
  *     responses:
  *       200:
  *         description: Lista de Fornecedores
  */

  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Fornecedor.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Fornecedor.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return Fornecedor.all()
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
  * @swagger
  * /fornecedores:
  *   post:
  *     tags:
  *       - Fornecedor
  *     summary: Criação de uma novo Fornecedor
  *     parameters:
  *         - name: nome
  *           description: Nome do Fornecedor
  *           in: query
  *           required: true
  *           type: string
  *         - name: endereco
  *           description: Endereco do Fornecedor
  *           in: query
  *           required: true
  *           type: string  
  *         - name: cep
  *           description: CEP do Fornecedor
  *           in: query
  *           required: true
  *           type: string  
  *         - name: cnpj
  *           description: CNPJ do Fornecedor
  *           in: query
  *           required: true
  *           type: string  
  *         - name: telefone
  *           description: Telefone do Fornecedor
  *           in: query
  *           required: true
  *           type: string  
  *     responses:
  *       200:
  *         description: Fornecedor criado
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
    //return await Fornecedor.findOrFail(params.id)
    return await Fornecedor.query().with('compras').with('marcas').where('id', params.id).first()
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
