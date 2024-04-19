var date = new Date()

var mesAtual = date.getMonth()
var diaAtual = date.getDay()
var dataAtual = date.getDate()
var anoAtual = date.getFullYear()

var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

var titulo = document.getElementById("mes")
titulo.innerHTML = `🌸 ${meses[mesAtual]} 🌸`

var tituloDoHabito = document.getElementById("titulo-do-habito")
tituloDoHabito.onclick = function () {
    let habitos = prompt("Qual é o seu hábito? :3", tituloDoHabito.innerHTML)
    if(habitos.length == 0) {
        tituloDoHabito.innerHTML = "Clique para adicionar seu hábito! :O"
    }
    else {
        tituloDoHabito.innerHTML = habitos
    }
}

var listagemDeDiasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var diasDesseMes = listagemDeDiasDoMes[mesAtual]

var diasCompletos = 0
var totalDeDias = document.getElementById("total-de-dias")

var contagemDeDias = 0
var contagemDeLinhas = 0

var dias = document.getElementsByClassName("dias")

for ( var i = 0; i < dias.length; i++) {
    var dia = dias[contagemDeLinhas].getElementsByClassName('dia')
    for( var j = 0; j < dia.length; j++) {
        if(contagemDeDias == dataAtual - 1) {
            dia[j].setAttribute("style", "color:rgb(234, 1, 144)")
            dia[j].setAttribute("style", "border:2px solid fuchsia")
        }

        if(contagemDeDias < diasDesseMes) {
            dia[j].innerHTML = contagemDeDias + 1
            dia[j].setAttribute("id", "dia" + (contagemDeDias + 1))
            contagemDeDias++
        } else{
            dia[j].innerHTML = ""
            dia[j].setAttribute("style", "background-color:white")
        }
    }

    contagemDeLinhas++
}

var completa = new Array(31)
for(var i = 0; i < contagemDeDias; i++) {
    var tempo  = 
    `${mesAtual + 1} - ${ i + 1} - ${anoAtual}`

    var diaT = localStorage.getItem(tempo)
    if(diaT == null || diaT == 'false') {
        localStorage.setItem(tempo, "false")
    }else if (diaT == "true"){
        diasCompletos++
    }

    totalDeDias.innerHTML = `${diasCompletos} / ${diasDesseMes}`
}

