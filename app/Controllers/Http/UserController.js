'use strict'

const User = use('App/Models/User')

class UserController {

    async index(){
        return User.query().select(['id', 'username', 'email']).fetch()
    }

    async show({params}){
        return User.query()
                   .select(['id', 'username', 'email'])
                   .where('id', params.id)
                   .first()
    }

    async store({request}){

        const camposCadastro = ['username', 'email', 'password']
        const dados = request.only(camposCadastro)

        return await User.create(dados)

    }

    async token({request, auth}){

        const {email, password} = request.all()
        return await auth.attempt(email, password)
    }

}

module.exports = UserController
