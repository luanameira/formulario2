
let botaoVL = document.querySelector("#botaoVL");

botaoVL.addEventListener ("click", function(event){
    event.preventDefault()

         let usuario = document.querySelector("#usuario").value;
         let senha = document.querySelector(".senha").value;
         if (usuario.trim() === "" || senha.length < 7) { 
        alert ("Os campos não foram preenchidos corretamente");
        } else  {
        alert ("Login válido");
     }})

let botaoVG = document.querySelector("#botaoVG");
botaoVG.addEventListener ("click", function(event){
    event.preventDefault()

    let feminino = document.getElementById("feminino");
    let masculino = document.getElementById("masculino");
    let outro = document.getElementById("outro");

    if (feminino.checked == true || masculino.checked == true || outro.checked == true){
    alert ("Gênero selecionado");
    } else {
        alert ("Nenhum gênero foi selecionado")

    }
    })

    let botaoVO = document.getElementById("botaoVO");
    botaoVO.addEventListener("click", function(event){
        event.preventDefault()

        let estagio = document.getElementById("estagio");
        let clt = document.getElementById("clt");
        let autonomo = document.getElementById("autonomo");

        if (estagio.checked == true || clt.checked == true || autonomo.checked == true){
            alert ("A opção foi selecionada")
        } else {
            alert ("Selecione uma opção")
        }
    });

    let botaoVT = document.querySelector("#botaoVT");
    botaoVT.addEventListener("click", function(event){
    event.preventDefault()

    let ensinomedio = document.getElementById("em");
    let superiorin = document.getElementById("si");
    let superiorcu = document.getElementById("scu");
    let superiorcom = document.getElementById("sc");

    
    })