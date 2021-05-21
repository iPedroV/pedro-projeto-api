'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Produto = use('App/Models/Produto')

class ProdutoSeeder {
  async run () {
    await Produto.createMany([

      {nome: 'Arroz_teste',
      descricao: 'Essencial para um almoço brasileiro',
      peso_bruto: 10,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'ABF212HDUU2DHXU1H2HD',
      data_fabricacao: '01/01/2021',
      preco: 20,
      categoria_id: 2,
      marca_id: 1,
      unidade_medida_id: 3
      },
      
      {nome: 'Biscoito Danix - sabor morango',
      descricao: 'Biscoito danix que cai muito bem em um lanchinho da tarde',
      peso_bruto: 130,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'BTF212HDUU2DHXU1H2HD',
      data_fabricacao: '01/01/2021',
      data_vencimento: '10/11/2021',
      preco: 1.79,
      categoria_id: 1,
      marca_id: 2,
      unidade_medida_id: 2
      },

      {nome: 'Biscoito Danix - sabor chocolate',
      descricao: 'Biscoito danix que cai muito bem em um lanchinho da tarde',
      peso_bruto: 130,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'TFB212HDUU2DHXU1H2HD',
      data_fabricacao: '02/01/2021',
      data_vencimento: '11/11/2021',
      preco: 1.59,
      categoria_id: 1,
      marca_id: 2,
      unidade_medida_id: 2
      },

      {nome: 'Biscoito Doce Maizena',
      descricao: 'Contém Aromatizante Sintético Idêntico ao Natural',
      peso_bruto: 400,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'BBB212HDUU2DHXU1H2HD',
      data_fabricacao: '05/01/2021',
      data_vencimento: '08/09/2021',
      preco: 4.69,
      categoria_id: 1,
      marca_id: 3,
      unidade_medida_id: 2
      },

      {nome: 'Fortaleza Lámen Galinha Caipira',
      descricao: 'Macarrão Instantâneo com Tempero sabor Galinha Caipira',
      peso_bruto: 75,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'UIP212HDUU2DHXU1H2HD',
      data_fabricacao: '05/01/2021',
      
      preco: 0.89,
      categoria_id: 1,
      marca_id: 3,
      unidade_medida_id: 2
      },

      {nome: 'Fortaleza Sêmola Lasanha',
      descricao: 'Macarrão Sêmola - 10 minutos de preparo',
      peso_bruto: 500,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: 'PIU212HDUU2DHXU1H2HD',
      data_fabricacao: '05/01/2021',
      
      preco: 5.89,
      categoria_id: 1,
      marca_id: 3,
      unidade_medida_id: 2
      },

      /*{nome: '',
      descricao: '',
      peso_bruto: ,
      qtd_disponivel: 10,
      qtd_min: 2,
      cod_barra: '',
      data_fabricacao: '//2021',
      data_vencimento: '//2021',
      preco: ,
      categoria_id: ,
      marca_id: ,
      unidade_medida_id: 
      },*/
    ])
  }
}

module.exports = ProdutoSeeder
