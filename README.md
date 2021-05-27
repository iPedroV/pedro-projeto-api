# Uma aplicação ADONIS para o cadastramento, compra e venda de produtos.

Este repositório contém os códigos de uma API básica do Adonis no Visual Studio Code, desenvolvida no primeiro semestre de 2021 pelo aluno Pedro Vitor da Costa Silva do curso de Análise e Desenvolvimento de Sistemas do IESB OESTE. Os principais arquivos trabalhados foram:

1. Controllers
2. Arquivo do Insomnia via JSON
3. Models
4. Validators
5. Migrations e Seeds

## Para iniciar:

Vale ressaltar que você precisa estar com o node e o adonis instalado em sua máquina, após isso, basta instalar primeiramente o banco e a node modules com os comandos, respectivamente:

```bash
npm i sqlite3
npm install --legacy-bundling
```

após isso basta rodar o comando `adonis serve --dev`.


### Migrations

É necessário também criar o banco de dados em sua máquina, por isso rode o comando a seguir.

```js
adonis migration:run
```
### Seeds

Logo após faça a inserção das seeds com o seguinte comando.

```js
adonis seed
```
