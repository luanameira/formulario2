
let botaoEnviar = document.querySelector("#botaoVL");

botaoEnviar.addEventListener ("click", function(){
         let usuario = document.querySelector("#usuario").value;
         let senha = document.querySelector(".senha").value;
         if (usuario.trim() === "" || senha.length < 7) { 
        alert ("Os campos não foram preenchidos corretamente");
        } else  {
        alert ("Login realizado com sucesso");
     }})


