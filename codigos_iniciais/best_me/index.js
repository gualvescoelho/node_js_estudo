process.stdout.write("oi \n")

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data=> { //enquanto tiver entrada de dados ouvir o evento
    answers.push(data.toString().trim()) //vai incluir na lista answers a resposta

    if(answers.length < questions.length){ //parte responsavel por percorrer a lista
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit() //garantir que o programa so encerra quando acabam as perguntas
    }
}) 

process.on('exit', () => { //quando ouvido o exit fazer algo
    console.log(`
        Bacana! 

        O que voce aprendeu
        ${answers[0]}

        O que te aborreceu 
        ${answers[1]}

        pgta 2
        ${answers[2]}

        pgta 3
        ${answers[3]}
    `)
})