function jogoppt(){
    const possiveisescolhas = document.querySelectorAll(".jogoPPT");
    document.getElementById("regras").innerHTML = "Escolha uma imagem: ";
    

    let escolha;
    possiveisescolhas.forEach(possiveisescolhas => possiveisescolhas.addEventListener("click", (e) =>{escolha = e.target.id
        console.log(escolha);  
        document.getElementById("resultadosuser").innerHTML = escolha;
        EscolhaAletória();
     
    }))
    function EscolhaAletória(){
        var jogo = ["Pedra", "Papel", "Tesoura"];
    
        var aleatorio = Math.floor(Math.random() * jogo.length);
        var escolhaaletoria = jogo[aleatorio];
        if(escolhaaletoria == "Pedra"){
            document.getElementById("imagPC").innerHTML = "<img src='imagens/pedra.png' alt='Pedra' id = 'PedraC' >"
        }
        else if(escolhaaletoria == "Papel"){
            document.getElementById("imagPC").innerHTML = "<img src='imagens/papel.png' alt='Pedra' id = 'PedraC' >"
        }
        else if(escolhaaletoria == "Tesoura"){
            document.getElementById("imagPC").innerHTML = "<img src='imagens/tesoura.png' alt='Pedra' id = 'PedraC' >"
        }

        console.log(escolhaaletoria);
        document.getElementById("apostause").innerHTML = "Jogador 1:";
        document.getElementById("apostapc").innerHTML = "Jogador 2:";
        document.getElementById("resultadospc").innerHTML = escolhaaletoria;
       
        if(escolha == escolhaaletoria){
            document.getElementById("resultados").innerHTML = "Empate";
        }
        if(escolha == "Pedra" && escolhaaletoria == "Tesoura"){
            document.getElementById("resultados").innerHTML = "Ganhou!!!";
        }
        if(escolha == "Pedra" && escolhaaletoria == "Papel"){
            document.getElementById("resultados").innerHTML = "Perdeu!!!";
        }
        if(escolha == "Papel" && escolhaaletoria == "Pedra"){
            document.getElementById("resultados").innerHTML = "Ganhou!!!";
        }
        if(escolha == "Papel" && escolhaaletoria == "Tesoura"){
            document.getElementById("resultados").innerHTML = "Perdeu!!!";
        }
        if(escolha == "Tesoura" && escolhaaletoria == "Papel"){
            document.getElementById("resultados").innerHTML = "Ganhou!!!";
        }
        if(escolha == "Tesoura" && escolhaaletoria == "Pedra"){
            document.getElementById("resultados").innerHTML = "Perdeu!!!";
        }
    }
}

