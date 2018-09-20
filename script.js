// let senha = document.querySelector(".senha").value;


let botaoEnviar = document.querySelector("#btn");

botaoEnviar.addEventListener ("click", function(){
         let usuario = document.querySelector("#usuario").value;
         if (usuario === "") { 
        alert ("O campo login deve ser preenchido");
        } else  {
        alert ("Login realizado com sucesso");
     }})


