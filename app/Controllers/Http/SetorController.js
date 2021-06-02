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
  * @swagger
  * /setores/{id}:
  *   get:
  *     tags:
  *       - Setor
  *     summary: Listagem de uma novo Setor específico
  *     parameters:
  *         - name: id
  *           description: Setor pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Setor no ID
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
  * @swagger
  * /setores/{id}:
  *   put:
  *     tags:
  *       - Setor
  *     summary: Atualização de um Setor
  *     parameters:
  *         - name: id
  *           description: Setor pelo id
  *           in: path
  *           type: integer
  *         - name: nome
  *           description: Nome do setor
  *           in: query
  *           required: true
  *           type: string
  *     responses:
  *       200:
  *         description: Setor atualizao
  */
 
  async update({ params, request, response }) {
    const setor = await Setor.findOrFail(params.id)
    const data = request.only(getCamposSetor())

    setor.merge(data)
    await setor.save()

    return setor;
  }

  /**
  * @swagger
  * /setores/{id}:
  *   delete:
  *     tags:
  *       - Setor
  *     summary: Exclusão de uma novo Setor específico
  *     parameters:
  *         - name: id
  *           description: Exclusão do Setor pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Exclusão do Setor no ID
  */
 
  async destroy({ params, request, response }) {
    const setor = await Setor.findOrFail(params.id)
    return await setor.delete();
  }
}

module.exports = SetorController