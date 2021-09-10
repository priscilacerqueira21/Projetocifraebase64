var texto1= document.getElementById('texto1')
var incremento= document.getElementById('incremento')
var botao= document.getElementById('enviar')
var escolhermetodo= document.getElementById('escolherMetodo')
var resultado= document.getElementById('resultado')
var codifica= document.getElementById('codi')
var descodifica = document.getElementById('descodi')
var resultadofinal= ''

codifica.addEventListener('click',function (){
botao.textContent= 'Codificar mensagem!'


})

descodifica.addEventListener('click', function (){
    botao.texContent= 'Descodificar mensagem!'
})



document.getElementById('enviar').onclick= function(event){
event.preventDefault()
    var selecionado= escolhermetodo.value

if(selecionado == '1'){
    if(codifica.checked){
        resultadofinal = codificar()
        resultado.textContent= resultadofinal
    } else if(descodifica.checked) { resultadofinal = decodificar()
        resultado.textContent= resultadofinal

    }
}

else if (selecionado == '2'){
    if(codifica.checked){
        resultadofinal = base64()
        resultado.textContent= resultadofinal
    } else if(descodifica.checked){ resultadofinal = decodificar64()
        resultado.textContent= resultadofinal

    }
}
}



//Coletar dados
//transformar letras em números
// pesquisar o que é uma split
 // pega os dados do usuário
 // recebe número que ajuda a codificar 
    function codificar (){ // vai codificar os dados que usuário 
        var arr= texto1.value.split("") // var se referindo a 
        // entrando na array com os dados que o usuário forneceu, o split divide uma array
        var arr2=  [] // essa array está vazia porque ainda está esperando para ser usada
        var arr3= []
        for (let i = 0; i < arr.length; i++) {// estrutura do for e só meche no meio
            if (arr[i] !=" "){
                arr2.push(arr[i].charCodeAt() + parseInt(incremento.value))
            }
            else {
                arr2.push(arr[i].charCodeAt())
            }
        }
        for (let j = 0; j < arr2.length; j++) {
        
           arr3.push(String.fromCharCode(arr2[j]))
        }
        return arr3.join("")// se usa uma string vazia () para não separar por virgula o espaço
    }

function decodificar (){
    var arr= texto1.value.split("") // var se referindo a array
        // entrando na array com os dados que o usuário forneceu, o split divide uma array
        var arr2= [] // essa array está vazia porque ainda está esperando para ser usada
        var arr3= []
        for (let i = 0; i < arr.length; i++) {// estrutura do for e só meche no meio
            if (arr[i] !=" "){
                arr2.push((arr[i].charCodeAt())- parseInt(incremento.value))
                console.log(arr2)
            }
            else {
                arr2.push(arr[i].charCodeAt())
            }
        }
        for (let j = 0; j < arr2.length; j++) {
        
           arr3.push(String.fromCharCode(arr2[j]))
           console.log(arr3)
        }
        return arr3.join("")// se usa uma string vazia () para não separar por virgula o espaço
}








function base64 () {
    var code = btoa (texto1.value)
    return code
}

function decodificar64() {
    var decode = atob (texto1.value)
    return decode
}
