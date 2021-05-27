'use strict'

const User = use('App/Models/User')

class UserController {

    async index(){
        return User.all()
    }

    async store({request}){

        const camposCadastro = ['username', 'email', 'password']
        const dados = request.only(camposCadastro)

        return await User.create(dados)

    }

}

module.exports = UserController
