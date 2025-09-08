const form = document.querySelector("form")
const resposta1 = document.querySelector("#resposta1")
const resposta2 = document.querySelector("#resposta2")


let resposta = "" // string com a resposta a ser exibida
let valortotal = 0 //aculula as variaveis
let nuncontas = 0 // declara e inicializa o contador

form.addEventListener('submit', (e) =>{
    e.preventDefault()


    const contas= form.contas.value // obitem dados da conta
    const valor = Number(form.valor.value)

    nuncontas++ // adiciona valores ao contador e acumulador
    valortotal = valortotal + valor

    resposta = resposta + contas+ " -R$:" + valor.toFixed(2)+ '\n'

    resposta1.innerHTML= `${resposta}`
    resposta2.innerHTML = `${nuncontas} Contas(s) - Total R$: ${valortotal.toFixed(2)}`

    form.contas.value = "" // limpa od campos de form
    form.valor.value = ""
    form.contas.focus() //posiciona no campo contas
})