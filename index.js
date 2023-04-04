let inputUsuario=require("readline-sync")

let mensagemUsuario=inputUsuario.question("Digite um numero ")
let valorConvertido=Number(mensagemUsuario)
let fizzBuzz=(valorConvertido%15===0)
let fizz=(valorConvertido%3===0)
let buzz=(valorConvertido%5===0)

if(fizzBuzz){
    console.log("fizzBuzz")
}else if(fizz){
    console.log("Fizz")
}else if(buzz){
    console.log("Buzz")
}else{
    console.log(valorConvertido)
}
