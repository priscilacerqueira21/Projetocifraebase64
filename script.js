//Coletar dados
//transformar letras em números
// pesquisar o que é uma split
var dados // pega os dados do usuário
var incremento // recebe número que ajuda a codificar 
    function codificar (){ // vai codificar os dados que usuário passar
        var arr= dados.split("") // var se referindo a array
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
