'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with produtosVendas
 */

const { getCamposProdutosVenda, getCamposListagem } = require("../../Models/ProdutosVenda")
const ProdutosVenda = use('App/Models/ProdutosVenda')

class ProdutosVendaController {
  
  /**
  * @swagger
  * /produtosVenda:
  *   get:
  *     tags:
  *       - ProdutosVenda
  *     summary: Listagem completa de ProdutosVenda
  *     responses:
  *       200:
  *         description: Lista de ProdutosVenda
  */

  async index({ request, response, view }) {

    //const {page, perPage} = request.all()
    //return ProdutosVenda.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return ProdutosVenda.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return ProdutosVenda.all()
  }

  /**
   * Render a form to be used for creating a new produtosVenda.
   * GET produtosVendas/create
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
  * /produtosVenda:
  *   post:
  *     tags:
  *       - ProdutosVenda
  *     summary: Criação de uma nova venda de produto
  *     parameters:
  *         - name: produto_id
  *           description: ID do produto
  *           in: query
  *           required: true
  *           type: integer
  *         - name: venda_id
  *           description: ID de venda
  *           in: query
  *           required: true
  *           type: integer
  *     responses:
  *       200:
  *         description: Venda de produto criada
  */

  async store({ request, response }) {
    const campos = getCamposProdutosVenda()
    const produtosVenda = request.only(campos)
    return await ProdutosVenda.create(produtosVenda);
  }

  /**
  * @swagger
  * /produtosVenda/{id}:
  *   get:
  *     tags:
  *       - ProdutosVenda
  *     summary: Listagem de uma nova venda de produto específica
  *     parameters:
  *         - name: id
  *           description: Venda de um id específico
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Venda de produto listada
  */

  async show({ params, request, response, view }) {
    return await ProdutosVenda.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing produtosVenda.
   * GET produtosVendas/:id/edit
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
  * /produtosVenda/{id}:
  *   put:
  *     tags:
  *       - ProdutosVenda
  *     summary: Atualização de uma nova venda de produto específica
  *     parameters:
  *         - name: id
  *           description: Atualização de ProdutosVenda de um id específico
  *           in: path
  *           type: integer
  *         - name: produto_id
  *           description: ID do produto
  *           in: query
  *           required: true
  *           type: integer
  *         - name: venda_id
  *           description: ID de venda
  *           in: query
  *           required: true
  *           type: integer
  *     responses:
  *       200:
  *         description: Venda de produto atualizada
  */
  async update({ params, request, response }) {
    const produtosVenda = await ProdutosVenda.findOrFail(params.id)
    const data = request.only(getCamposProdutosVenda())

    produtosVenda.merge(data)
    await produtosVenda.save()

    return produtosVenda;
  }

  /**
  * @swagger
  * /produtosVenda/{id}:
  *   delete:
  *     tags:
  *       - ProdutosVenda
  *     summary: Exclusão de uma venda de produto específica
  *     parameters:
  *         - name: id
  *           description: Exclusão Venda de um id específico
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Venda de produto excluída
  */

  async destroy({ params, request, response }) {
    const produtosVenda = await ProdutosVenda.findOrFail(params.id)
    return await produtosVenda.delete();
  }
}

module.exports = ProdutosVendaController