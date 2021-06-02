'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas_fornecedors
 */

const { getCamposMarcasFornecedor, getCamposListagem } = require("../../Models/MarcasFornecedor")
const MarcasFornecedor = use('App/Models/MarcasFornecedor')

class MarcasFornecedorController {
  
  /**
  * @swagger
  * /marcasFornecedor:
  *   get:
  *     tags:
  *       - MarcasFornecedor
  *     summary: Listagem completa de MarcasFornecedor
  *     responses:
  *       200:
  *         description: Lista de MarcasFornecedor
  */

  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return MarcasFornecedor.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return MarcasFornecedor.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return MarcasFornecedor.all()
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
  * @swagger
  * /marcasFornecedor:
  *   post:
  *     tags:
  *       - MarcasFornecedor
  *     summary: Criação de uma nova MarcasFornecedor
  *     parameters:
  *         - name: marca_id
  *           description: ID de marca
  *           in: query
  *           required: true
  *           type: integer
  *         - name: fornecedor_id
  *           description: ID de fornecedor
  *           in: query
  *           required: true
  *           type: integer  
  *     responses:
  *       200:
  *         description: MarcasFornecedor criada
  */

  async store({ request, response }) {
    const campos = getCamposMarcasFornecedor()
    const marcas_fornecedor = request.only(campos)
    return await MarcasFornecedor.create(marcas_fornecedor);
  }

  /**
  * @swagger
  * /marcasFornecedor/{id}:
  *   get:
  *     tags:
  *       - MarcasFornecedor
  *     summary: Listagem de uma Marca de Fornecedor específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Marca de Fornecedor pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Marca de Fornecedor listada
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
  * @swagger
  * /marcasFornecedor/{id}:
  *   put:
  *     tags:
  *       - MarcasFornecedor
  *     summary: Atualização de uma Marca de Fornecedor específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Atualização de Marca de umFornecedor pelo id
  *           in: path
  *           type: integer
  *         - name: marca_id
  *           description: ID de marca
  *           in: query
  *           required: true
  *           type: integer
  *         - name: fornecedor_id
  *           description: ID de fornecedor
  *           in: query
  *           required: true
  *           type: integer   
  *     responses:
  *       200:
  *         description: Marca de Fornecedor atualizada
  */
  async update({ params, request, response }) {
    const marcas_fornecedor = await MarcasFornecedor.findOrFail(params.id)
    const data = request.only(getCamposMarcasFornecedor())

    marcas_fornecedor.merge(data)
    await marcas_fornecedor.save()

    return marcas_fornecedor;
  }

  /**
  * @swagger
  * /marcasFornecedor/{id}:
  *   delete:
  *     tags:
  *       - MarcasFornecedor
  *     summary: Exclusão de uma Marca de Fornecedor específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Exclusão de Marca de Fornecedor pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Marca de Fornecedor excluída
  */

  async destroy({ params, request, response }) {
    const marcas_fornecedor = await MarcasFornecedor.findOrFail(params.id)
    return await marcas_fornecedor.delete();
  }
}

module.exports = MarcasFornecedorController