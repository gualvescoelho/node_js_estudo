function getFlag(){ //erro do meu, não funcionar em qualquer aplicativo
    name = process.argv[3]
    greeting = process.argv[5]

    console.log(name +'. ' + greeting)
}
/* console.log(process.argv)
getFlag()
console.log(name) */

module.exports = getFlag()

//resposta do mayk

function getFlagValue(flag){ //ao se usat indexOf se encontra alguma informação passada, e com isso buscar uma posição a mais
    const index = process.argv.indexOf(flag) + 1 //pega a proxima posição
    return process.argv[index]
}
module.exports = getFlagValue;