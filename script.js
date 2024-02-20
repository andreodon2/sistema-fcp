// BANCO DE DADOS
const MongoClient = require('mongodb')
const url = '#' /* URL do banco de dados */
const dbName = '#' /* Nome do banco de dados */
const collectionName = '#' /* Nome da coleção */
const client  = new MongoClient(url, { useUnifiedTopology: true }) // Cria um cliente MongoDB
async function run() {
    try {
        await client.connect() // Conecta ao servidor MongoDB
        console.log('Conectado ao servidor MongoDB')
        const db = client.db(dbName) // Seleciona o banco de dados
        const collection = db.collection(collectionName) // Seleciona a coleção
        const query = { campo: 'valor' } // Query MongoDB
        const result = await collection.find(query).toArray() // Executa a consulta
        console.log('Resultados da consulta: ', result) // Exibe os resultados
    } catch (error) {
        console.error('Erro ao executar a consulta: ', error)
    } finally { //Fecha a conexão com o cliente
        await client.close()
        console.log('Conexão fechada')
    }
}

run()


var nomeLivro = document.querySelector("#nome-livro")
var dataLivro = document.querySelector("#data-recebe-livro")
var inclusaoSite = document.querySelector("#data-inclusao-site")

function consultar() { 
    //
}