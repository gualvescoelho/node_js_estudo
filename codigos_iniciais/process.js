//lista de argumentos
//console.log(process.argv) //lista de argumentos que esta rodando no node, sendo que se inserir mais na hora de interpretar os novos argumentos entrarão no processo

console.log('seu nome é: ', process.argv[2] + ' ' + process.argv[3])

const firstName = process.argv[3] 
const lastName = process.argv[4]

console.log(`seu nome é ${firstName} ${lastName} `) //usar crase

console.log(process.argv) //node process --name "Mayk Brito" --greeting "Tudo bem com você?", uso de flags