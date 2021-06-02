'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */

const { getCamposCategoria, getCamposListagem } = require("../../Models/Categoria")
const Categoria = use('App/Models/Categoria')

class CategoriaController {
  
  /**
  * @swagger
  * /categorias:
  *   get:
  *     tags:
  *       - Categoria
  *     summary: Listagem completa de Categorias
  *     responses:
  *       200:
  *         description: Lista de Categorias
  */

  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Categoria.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Categoria.query()
                  .select(campos)
                  .paginate(page, perPage)

    //return Categoria.all()
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
  * @swagger
  * /categorias:
  *   post:
  *     tags:
  *       - Categoria
  *     summary: Criação de uma nova Categoria
  *     parameters:
  *         - name: descricao
  *           description: Descricao da Categoria
  *           in: query
  *           required: true
  *           type: string
  *         - name: setor_id
  *           description: ID do Setor
  *           in: query
  *           required: true
  *           type: integer  
  *     responses:
  *       200:
  *         description: Categoria criada
  */
  async store({ request, response }) {
    const campos = getCamposCategoria()
    const categoria = request.only(campos)
    return await Categoria.create(categoria);
  }

  /**
  * @swagger
  * /categorias/{id}:
  *   get:
  *     tags:
  *       - Categoria
  *     summary: Listagem de uma Categoria específica pelo id
  *     parameters:
  *         - name: id
  *           description: Categoria pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Categoria listada
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
  * @swagger
  * /categorias/{id}:
  *   put:
  *     tags:
  *       - Categoria
  *     summary: Atualização de uma Categoria específica pelo id
  *     parameters:
  *         - name: id
  *           description: Atualização de uma Categoria pelo id
  *           in: path
  *           type: integer
  *         - name: descricao
  *           description: Descricao da Categoria
  *           in: query
  *           required: true
  *           type: string
  *         - name: setor_id
  *           description: ID do Setor
  *           in: query
  *           required: true
  *           type: integer   
  *     responses:
  *       200:
  *         description: Categoria atualizada
  */

  async update({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    const data = request.only(getCamposCategoria())

    categoria.merge(data)
    await categoria.save()

    return categoria;
  }

  /**
  * @swagger
  * /categorias/{id}:
  *   delete:
  *     tags:
  *       - Categoria
  *     summary: Exclusão de uma Categoria específica pelo id
  *     parameters:
  *         - name: id
  *           description: Exclusão de uma Categoria pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Categoria excluída
  */

  async destroy({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    return await categoria.delete();
  }
}

module.exports = CategoriaController