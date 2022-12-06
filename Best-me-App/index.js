const questions = [
    "Oque aprendi hoje? ",
    "Oque me deixou aborrecido? ",
    "Oque fazer para melhorar? ",
    "Oque me deixou feliz? ",
    "Quantas pessoas ajudei Hoje? ",
]
const ask = (index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + ":")
    //Esta função pega a const questions com as perguntas( que esta sendo chamado na pasta index)
}
ask()
// como interagir com o terminal?
// sempre que dados forem inseridos essa função irá rodar
const anweser = []
process.stdin.on("data", data => {
    anweser.push(data.toString().trim())
    if (anweser.length < questions.length) {
        ask(anweser.length)
    } else {
        process.exit()
    }
 
   //process.exit() desliga o processo

})

process.on("exit", () => {
    console.log(`
    Bacana Bryan
    ----------------------------------------------
    oque você aprendeu hoje foi:
    ${anweser[0]}
    ----------------------------------------------
    Oque te aborreceu hoje foi:
    ${anweser[1]}
    ----------------------------------------------
    Oque te deixou felix foi:
    ${anweser[2]}
    ----------------------------------------------
    Você ajudou ${anweser[3]} pessoas hoje!
    ----------------------------------------------
    Volte amanha para novas reflexoes

    `)
})