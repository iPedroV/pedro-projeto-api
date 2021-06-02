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
  * @swagger
  * /unidadesMedida:
  *   get:
  *     tags:
  *       - UnidadesMedida
  *     summary: Listagem completa de UnidadesMedida
  *     responses:
  *       200:
  *         description: Lista de UnidadesMedida
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
  * @swagger
  * /unidadesMedida:
  *   post:
  *     tags:
  *       - UnidadesMedida
  *     summary: Criação de uma nova unidade de medida
  *     parameters:
  *         - name: unidade_medida
  *           description: Unidade de medida
  *           in: query
  *           required: true
  *           type: string
  *     responses:
  *       200:
  *         description: Unidade de medida criada
  */

  async store({ request, response }) {
    const campos = getCamposUnidadesMedida()
    const unidadeMedida = request.only(campos)
    return await UnidadesMedida.create(unidadeMedida);
  }

  /**
  * @swagger
  * /unidadesMedida/{id}:
  *   get:
  *     tags: 
  *       - UnidadesMedida
  *     summary: Listagem de uma Unidade de Medida específica
  *     parameters:
  *         - name: id
  *           description: Unidade de Medida específica pelo id
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Unidade de Medida específica no ID
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
  * @swagger
  * /unidadesMedida/{id}:
  *   put:
  *     tags: 
  *       - UnidadesMedida
  *     summary: Atualização de uma Unidade de Medida específica
  *     parameters:
  *         - name: id
  *           description: Atualização de uma Unidade de Medida específica
  *           in: path
  *           type: integer
  *         - name: unidade_medida
  *           description: Unidade de medida
  *           in: query
  *           required: true
  *           type: string
  *     responses:
  *       200:
  *         description: Unidade de Medida atualizada
  */

  async update({ params, request, response }) {
    const unidadeMedida = await UnidadesMedida.findOrFail(params.id)
    const data = request.only(getCamposUnidadesMedida())

    unidadeMedida.merge(data)
    await unidadeMedida.save()

    return unidadeMedida;
  }

  /**
  * @swagger
  * /unidadesMedida/{id}:
  *   delete:
  *     tags: 
  *       - UnidadesMedida
  *     summary: Exclusão de uma Unidade de Medida específica pelo ID
  *     parameters:
  *         - name: id
  *           description: Exclusão de uma Unidade de Medida específica pelo ID
  *           in: path
  *           type: integer
  *     responses:
  *       200:
  *         description: Unidade de Medida excluída
  */
 
  async destroy({ params, request, response }) {
    const unidadeMedida = await UnidadesMedida.findOrFail(params.id)
    return await unidadeMedida.delete();
  }
}

module.exports = UnidadesMedidaController