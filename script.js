var texto1= document.getElementById('texto1')
var incremento= document.getElementById('incremento')
var botao= document.getElementById('botao')
var escolhermetodo= document.getElementById('escolhermetodo')
var resultado= document.getElementById('resultado')
var codificar= document.getElementById('codificar')
var descodificar = document.getElementById('descodificar')
var resultadofinal= ''

codificar.addEventListener('click',function (){
botao.textContent= 'Codificar mensagem!'


})

descodificar.addEventListener('click', function (){
    botao.texContent= 'Descodificar mensagem!'
})



document.getElementById('botao').onclick= function(){







}





//Coletar dados
//transformar letras em números
// pesquisar o que é uma split
var dados // pega os dados do usuário
var incremento // recebe número que ajuda a codificar 
    function codificar (){ // vai codificar os dados que usuário 
        var arr= dados.split("") // var se referindo a 
        // entrando na array com os dados que o usuário forneceu, o split divide uma array
        var arr2=  [] // essa array está vazia porque ainda está esperando para ser usada
        var arr3= []
        for (let i = 0; i < arr.length; i++) {// estrutura do for e só meche no meio
            if (arr[i] !=" "){
                arr2.push((arr[i].charCodeAt())+incremento)
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

function descodificar (){
    var arr= dados.split("") // var se referindo a array
        // entrando na array com os dados que o usuário forneceu, o split divide uma array
        var arr2=  [] // essa array está vazia porque ainda está esperando para ser usada
        var arr3= []
        for (let i = 0; i < arr.length; i++) {// estrutura do for e só meche no meio
            if (arr[i] !=" "){
                arr2.push((arr[i].charCodeAt())-incremento)
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








function base64 () {
    var code = btoa (dados)
    return code
}

function decodificar64() {
    var decode = atob (dados)
    return decode
}
