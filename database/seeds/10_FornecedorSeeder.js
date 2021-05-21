'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Fornecedor = use('App/Models/Fornecedor')

class FornecedorSeeder {
  async run () {
    await Fornecedor.createMany([

      {nome: 'Pedro_teste', 
       endereco: 'Samambaia Norte',
       cep: '13.080-290', 
       cnpj: '06.042.467/0001-80', 
       telefone: '(61) 98494-1352'
      },
      
      {nome: 'Bagley do Brasil Alimentos LTDA', 
       endereco: 'Rua Henrique Veiga, 500 - Fundos para a Rua Fulvio Salvador Pagani, 285 - Campinas/SP',
       cep: '13.080-290', 
       cnpj: '06.042.467/0001-80', 
       telefone: '(61) 98494-1352'
      },

      {nome: 'M. Dias Branco S.A e Indústria e Comércio de Alimentos',
       endereco: 'Rodovia BR-116 - km 18 - Eusébio/CE', 
       cep: '61760-000', 
       cnpj: '07.206.816/0001-15', 
       telefone: '(61) 98494-1352'
      },

      

      /*{nome: '',
       endereco: '', 
       cep: '', 
       cnpj: '', 
       telefone: '(61) 98494-1352'
      },*/
      
    ])
  }
}

module.exports = FornecedorSeeder
