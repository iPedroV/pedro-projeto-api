'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with produtos
 */

const { getCamposProduto, getCamposListagem } = require("../../Models/Produto")
const Produto = use('App/Models/Produto')

class ProdutoController {
  
  /**
  * @swagger
  * /produtos:
  *   get:
  *     tags:
  *       - Produto
  *     summary: Listagem completa de Produtos
  *     responses:
  *       200:
  *         description: Lista de Produtos
  */

  async index({ request, response, view }) {
    
    /*if ternário:
      se ele receber os dados do usuário ele separa com as vírgulas (campos.split(','))
      se não ele entrega o array com tudo (getCamposListagem())*/
    
    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Produto.query()
                  .select(campos)
                  .paginate(page, perPage)

    //return Produto.all()
  }

  /**
   * Render a form to be used for creating a new produto.
   * GET produtos/create
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
  * /produtos:
  *   post:
  *     tags:
  *       - Produto
  *     summary: Criação de um novo produto
  *     parameters:
  *         - name: nome
  *           description: Nome do produto
  *           in: query
  *           required: true
  *           type: string
  *         - name: descricao
  *           description: Descricao do produto
  *           in: query
  *           required: true
  *           type: string
  *         - name: peso_bruto
  *           description: Peso do produto
  *           in: query
  *           required: true
  *           type: number
  *         - name: qtd_disponivel
  *           description: Quantidade disponivel do produto
  *           in: query
  *           required: false
  *           type: integer
  *         - name: qtd_min
  *           description: Quantidade minima do produto
  *           in: query
  *           required: true
  *           type: integer
  *         - name: cod_barra
  *           description: Codigo de barras do produto
  *           in: query
  *           required: true
  *           type: string
  *         - name: data_fabricacao
  *           description: Data de fabricacao do produto
  *           in: query
  *           required: true
  *           type: string
  *         - name: data_vencimento
  *           description: Data de vencimento do produto
  *           in: query
  *           required: false
  *           type: string
  *         - name: preco
  *           description: Preco do produto
  *           in: query
  *           required: true
  *           type: number
  *         - name: categoria_id
  *           description: ID de categoria
  *           in: query
  *           required: true
  *           type: integer
  *         - name: marca_id
  *           description: ID de marca
  *           in: query
  *           required: true
  *           type: integer
  *         - name: unidade_medida_id
  *           description: ID de unidade_medida
  *           in: query
  *           required: true
  *           type: integer
  *     responses:
  *       200:
  *         description: Produto criado
  */
  async store({ request, response }) {
    const campos = getCamposProduto()
    const produto = request.only(campos)
    return await Produto.create(produto);
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    //return await Produto.findOrFail(params.id)

    return await Produto.query()
        .with('unidadeMedida')
        .with('categoria')
        .with('marca')
        .with('compras')
        .with('vendas')
        .where('id', params.id)
        .first()
  }

  /**
   * Render a form to update an existing produto.
   * GET produtos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const produto = await Produto.findOrFail(params.id)
    const data = request.only(getCamposProduto())

    produto.merge(data)
    await produto.save()

    return produto;
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const produto = await Produto.findOrFail(params.id)
    return await produto.delete();
  }
}

module.exports = ProdutoController