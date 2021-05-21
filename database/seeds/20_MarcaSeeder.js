'use strict'

/*
|--------------------------------------------------------------------------
| MarcaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Marca = use('App/Models/Marca')

class MarcaSeeder {
  async run () {
    await Marca.createMany([
      
      {cnpj: '12345678901234', 
       nome: 'Marca_teste', 
       telefone: '0800 0558450',
       email: 'testando@gmail.com',
       site: 'www.siteteste.com.br'
      },

      {cnpj: '54.360.656/0001-44', 
       nome: 'ARCOR', 
       telefone: '0800 0558450',
       email: 'aquiarcor@arcor.com',
       site: 'www.arcor.com.br'
      },

      {cnpj: '10.945.007/0001-30', 
       nome: 'Fortaleza Comércio de Embalagens LTDA', 
       telefone: '(62) 3284-3401',
       email: 'sac@mdiasbranco.com.br',
       site: 'www.marcafortaleza.com.br'
      },

      /*{cnpj: '', 
       nome: '', 
       telefone: '',
       email: '',
       site: ''
      },*/
    ])
  }
}

module.exports = MarcaSeeder
