'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with marcas
 */

const { getCamposMarca, getCamposListagem } = require("../../Models/Marca")
const Marca = use('App/Models/Marca')

class MarcaController {
  
  /**
  * @swagger
  * /marcas:
  *   get:
  *     tags:
  *       - Marca
  *     summary: Listagem completa de Marcas
  *     responses:
  *       200:
  *         description: Lista de Marcas
  */

  async index({ request, response, view }) {
    //const {page, perPage} = request.all()
    //return Marca.query().paginate(page, perPage)

    let {page, perPage, campos} = request.all()
    campos = campos ? campos.split(',') : getCamposListagem()
    
    return Marca.query()
                  .select(campos)
                  .paginate(page, perPage)
                  
    //return Marca.all()
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
  * @swagger
  * /marcas:
  *   post:
  *     tags:
  *       - Marca
  *     summary: Criação de uma nova Marca
  *     parameters:
  *         - name: cnpj
  *           description: CNPJ da Marca
  *           in: query
  *           required: false
  *           type: string
  *         - name: nome
  *           description: Nome da Marca
  *           in: query
  *           required: true
  *           type: string  
  *         - name: telefone
  *           description: Telefone da Marca
  *           in: query
  *           required: false
  *           type: string  
  *         - name: email
  *           description: Email da Marca
  *           in: query
  *           required: false
  *           type: string  
  *         - name: site
  *           description: Site da Marca
  *           in: query
  *           required: false
  *           type: string  
  *     responses:
  *       200:
  *         description: Marca criada
  */
  async store({ request, response }) {
    const campos = getCamposMarca()
    const marca = request.only(campos)
    return await Marca.create(marca);
  }

  /**
  * @swagger
  * /marcas/{id}:
  *   get:
  *     tags:
  *       - Marca
  *     summary: Listagem de Marca específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Marca pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Marca listada
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
  * @swagger
  * /marcas/{id}:
  *   put:
  *     tags:
  *       - Marca
  *     summary: Atualização de Marca específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Atualização de Marca pelo id
  *           in: path
  *           type: integer
  *         - name: cnpj
  *           description: CNPJ da Marca
  *           in: query
  *           required: false
  *           type: string
  *         - name: nome
  *           description: Nome da Marca
  *           in: query
  *           required: true
  *           type: string  
  *         - name: telefone
  *           description: Telefone da Marca
  *           in: query
  *           required: false
  *           type: string  
  *         - name: email
  *           description: Email da Marca
  *           in: query
  *           required: false
  *           type: string  
  *         - name: site
  *           description: Site da Marca
  *           in: query
  *           required: false
  *           type: string  
  *     responses:
  *       200:
  *         description: Marca atualizada
  */

  async update({ params, request, response }) {
    const marca = await Marca.findOrFail(params.id)
    const data = request.only(getCamposMarca())

    marca.merge(data)
    await marca.save()

    return marca;
  }

  /**
  * @swagger
  * /marcas/{id}:
  *   delete:
  *     tags:
  *       - Marca
  *     summary: Exclusão de uma Marca específica pelo seu id
  *     parameters:
  *         - name: id
  *           description: Exclusão de Marca pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Marca excluída
  */

  async destroy({ params, request, response }) {
    const marca = await Marca.findOrFail(params.id)
    return await marca.delete();
  }
}

module.exports = MarcaController