const form = document.querySelector('form')
const resposta1 = document.querySelector("#resposta1")
const resposta2 = document.querySelector("#resposta2")


let resposta = ""
let valortotal = 0
let nuncontas = 0

form.addEventListener('submit', (e) =>{
    e.preventDefault()


    const contas= form.contas.value
    const valor = Number(form.valor.value)

    nuncontas ++
    valortotal = valortotal + valor

    resposta = resposta + contas+ " -R$:" + valor.toFixed(2)+ '\n'

    resposta1.innerHTML= `${resposta}-------------------------`
    resposta2.innerHTML = `${nuncontas} Contas(s) - Total R$: ${valor.toFixed(2)}`

    form.contas.value = ""
    form.valor.value = ""
    form.contas.focus()
})