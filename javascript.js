
window.onload = function(){


    sessionStorage.setItem("numpalpitescertos13", 0); //variáveis de sessão o resultado so desaparace quando a pagina é fechada, damos-lhe um nome "..." e definimos aqui o valor que queremos que elas assumam neste caso 0
    sessionStorage.setItem("numpalpiteserrados13", 0);
  
}
 





function exercicio1(){
    alert("É preciso fazer todos os exercícios para aprender!");
}

function exercicio2(){
    document.getElementById("resultadoexer2").innerHTML = "";

    if(confirm("Deseja continuar a realizar os exercícios?") == true){
        alert("Bem escolhido!!");
    }else{
        alert("Já chega de JavaScript");
        document.getElementById("resultadoexer2").innerHTML = "<h3 class ='titulonoticia'>Já chega de JavaScript!!!</h2>";
       
    }
  
}

function exercicio3(){

    document.getElementById("resultadoexer3").innerHTML = "";
    var nome = prompt("Introduza o seu nome: ");
    form3 = true;
    if(nome == ""){
      document.getElementById("resultadoexer3").innerHTML = "Por favor intruduza o nome...";
      form3 = false;
    }
    if(form3 == true && nome != null){
        document.getElementById("resultadoexer3").innerHTML = "O formando "+ nome + " está aprovado!"; 
    }

   
}

function exercicio4(){
    var nome = document.getElementById("nome4").value;
    var idade = document.getElementById("idade4").value;

    document.getElementById("resultadonome4").innerHTML = "";
    document.getElementById("resultadoidade4").innerHTML = "";
    document.getElementById("resultadoexer4").innerHTML = "";

    var formok = true;

    if(nome == ""){
        document.getElementById("resultadonome4").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira o nome...";
        formok = false;
    }
    if(idade == "" || idade == 0){
        document.getElementById("resultadoidade4").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira a idade...";
        formok = false;
    }
    if(isNaN(idade)){
        document.getElementById("resultadoidade4").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira a idade correctamente...";
        formok = false;
    }
    if(idade < 0 || idade >=120){
        document.getElementById("resultadoidade4").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira a idade correctamente entre 0 e 120...";
        formok = false;
    }

    if(formok == true){
    document.getElementById("resultadoexer4").innerHTML = "O formando "+ nome + " tem " + idade + " anos.";
}

}

function exercicio5(){
    var nome = document.getElementById("nome5").value;
    var clube = document.getElementById("clube5"). value;

    document.getElementById("resultadonome5").innerHTML = "";
    document.getElementById("resultadoclube5").innerHTML = "";

    var formok = true;
    if(nome == ""){
        document.getElementById("resultadonome5").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira o nome...";
        formok = false;
    }
    if(clube == ""){
        document.getElementById("resultadoclube5").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira o clube..."
        formok = false;
    }

    if(formok == true){
    console.log("Eu sou o(a) " + nome + " e sou adepto do " + clube + ".");
}
}

function exercicio6(){
    var nome = document.getElementById("nome6").value;
    var idade = document.getElementById("idade6").value;
    var email = document.getElementById("email6");
    var email1 = email.value.trim();
    var altura = document.getElementById("altura6").value;

    //para encontar o resultado da selecção
    var e = document.getElementById("estadocivil6");
    var valorestadocivil = e.options[e.selectedIndex].value;// get selected option value
    var textoestadocivil = e.options[e.selectedIndex].text;

    document.getElementById("resultadonome6").innerHTML = "";
    document.getElementById("resultadoidade6").innerHTML ="";
    document.getElementById("resultadoaltura6").innerHTML = "";
    document.getElementById("resultadoestadocivil6").innerHTML = "";
    document.getElementById("resultform6").innerHTML = "";
    
    var form6 = true;
   //para encontar o resultado da escolha 
    var socio = document.getElementsByName("socios6");
    var textosocio;
    for(i = 0; i <socio.length; i++){
        if (socio[i].checked)
        textosocio = socio[i].value;
    }
    


    if(nome == ""){
        document.getElementById("resultadonome6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira o nome...";
        form6 = false;
    }
    if(email1 == ""){
        document.getElementById("resultademail6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira o email...";
        form6 = false;
    }else if(!email1.includes("@")){
        document.getElementById("resultademail6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira o @ no email...";
        form6 = false;
    }
    if(idade == ""){
        document.getElementById("resultadoidade6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira a idade..."
        form6 = false;
    }else if(idade == 0 || isNaN(idade)){
        document.getElementById("resultadoidade6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira uma idade válida...";
        form6 = false;
    }
    if(altura == ""){
        document.getElementById("resultadoaltura6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira a altura..."
        form6 = false;
    }else if(altura == 0 || isNaN(altura) || altura > 2.2){
        document.getElementById("resultadoaltura6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira uma altura válida...";
        form6 = false;
    }
    if(valorestadocivil == "-1"){
        document.getElementById("resultadoestadocivil6").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Escolha um estado civil...";
        form6 = false;
    }

    if(form6 == true){
    document.getElementById("resultform6").innerHTML = "Nome: " + nome + "<br>Estado Civil: " + textoestadocivil + "<br> Idade: " + idade + " anos<br> Altura: " + altura  + "m<br> Sócio: " + textosocio + "<br> E-mail: " + email1 ;
}

}

function dataExercicios(){
   
   var data =  new Date();
   var ano = data.getFullYear();
   var mes = data.getMonth() + 1;
   var dia = data.getDate();
   return {ano, mes, dia};
    
    
}

function dataExercicio7(){
    var {ano, mes, dia} = dataExercicios();
    document.getElementById("horaexer7").innerHTML ="<h1 class='hora7'>Data: "+ dia + "." + mes + "." + ano + "</h1>";  
}
function dataExercicio8(){
    //EXERCICIO 8
    var {ano, mes, dia} = dataExercicios();
    var horas = new Date().getHours();
    if(horas > 6 && horas < 12){
        document.getElementById("tempodia8").innerHTML = "Bom Dia...";
    }else if(horas >= 12 && horas < 20){
        document.getElementById("tempodia8").innerHTML = "Boa Tarde...";
    }else{
        document.getElementById("tempodia8").innerHTML = "Boa Noite...";
    }
}

function exercicio9(){

    window.print();
}

function exercicio10(){
    document.getElementById("resultadoexer10").innerHTML = "URL: <br>" + document.URL;
}

function exercicio11(){
    var num = document.getElementById("num11").value;
    
    document.getElementById("resultadonum11").innerHTML = " ";
    document.getElementById("resultadoexer11").innerHTML = " ";
    var form11 = true;

    if(num == ""){
        document.getElementById("resultadonum11").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + " Insira um número...";
        form11 = false;
    }
    if(isNaN(num)){
        document.getElementById("resultadonum11").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + " Insira caracteres númericos...";
        form11 = false;
    }
    if(form11 == true ){
    if( num < 0 ){
        document.getElementById("resultadoexer11").innerHTML = "O número "+ num + " é negativo...";
    }else{
        document.getElementById("resultadoexer11").innerHTML = "O número "+ num + " é positivo...";
    }
}
}

function exercicio12(){

    var num1 = document.getElementById("num12a").value;
    var num2 = document.getElementById("num12b").value;

   document.getElementById("resultadonum12a").innerHTML = "";
   document.getElementById("resultadonum12b").innerHTML = "";
   document.getElementById("resultadoexer12").innerHTML = "";

    var formok12 = true;

    if(num1 == ""){
        document.getElementById("resultadonum12a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok12 = false;
    }
    if(isNaN(num1)){
        document.getElementById("resultadonum12a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira números...";
       formok12 = false;
    }
    if(num2 == ""){
        document.getElementById("resultadonum12b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira um número...";
       formok12 = false;
    }
    if(isNaN(num2)){
        document.getElementById("resultadonum12b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira números...";
        formok12 = false;
    }
    
    if(formok12 == true){
    if(num1 > num2){
        document.getElementById("resultadoexer12").innerHTML = "O " + num1 + " é maior que " + num2 + ".";
    }else if (num1 < num2){
        document.getElementById("resultadoexer12").innerHTML = "O " + num2 + " é maior que " + num1 + ".";
    }else{
        document.getElementById("resultadoexer12").innerHTML = "Os números são iguais.";
    }
    }
}

function exercicio13(){

    var palpite = document.getElementById("palpite13").value;
    
         
    var form13 = true;

    document.getElementById("resultadopalpite13").innerHTML = "";
    document.getElementById("resultadoexer13").innerHTML = "";

   if(palpite == ""){
        document.getElementById("resultadopalpite13").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira um palpite...";
        form13 = false;
    }else if(isNaN(palpite)){
        document.getElementById("resultadopalpite13").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Insira números...";
        form13 = false;
    }else{
        if(Number(palpite) < 1 || Number(palpite) > 6){
            document.getElementById("resultadopalpite13").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #FFD43B;'></i>" + "Por favor introduza números entre 1 e 6..";
            form13 = false;
        }
    }
    if (form13 == true){
        var numaleatorio13 = Math.floor(Math.random() * 6) + 1;
        if(Number(palpite) == numaleatorio13){
            var numcertos = Number(sessionStorage.getItem("numpalpitescertos13")) + 1;
            //vamos buscar a variavel de secção e adicionamos um elemento

            document.getElementById("numeroscertos13").innerHTML = numcertos;
            sessionStorage.setItem("numpalpitescertos13", numcertos);//atualizamos a variavel de secção
        
        }else{
            var numerrados = Number(sessionStorage.getItem("numpalpiteserrados13")) + 1;
            document.getElementById("numeroserrados13").innerHTML = numerrados;
            sessionStorage.setItem("numpalpiteserrados13", numerrados);
        }
    }
    }
    

function exercicio14(){
    const numeros = new Array(3);
    
    
     numeros[0]= document.getElementById("num14a").value;
     numeros[1] = document.getElementById("num14b").value;
     numeros[2] = document.getElementById("num14c").value;

     num1 = numeros[0];
     num2 = numeros[1];
     num3 = numeros[2];
     var formok14 = true;

     document.getElementById("resultadonum14a").innerHTML = "";
     document.getElementById("resultadonum14b").innerHTML = "";
     document.getElementById("resultadonum14c").innerHTML = "";
     
     document.getElementById("resultadoexer14").innerHTML = "";
     

    if (isNaN(num1) ){
        document.getElementById("resultadonum14a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico...";
        formok14 = false;
    }
    if (num1 == ""){
        document.getElementById("resultadonum14a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok14 = false;
    }
    if (isNaN(num2) ){
        document.getElementById("resultadonum14b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico...";
        formok14 = false;
    }
    if (num2 == ""){
        document.getElementById("resultadonum14b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok14 = false;
    }
    if (isNaN(num3)){
        document.getElementById("resultadonum14c").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico...";
        formok14 = false;
    }
    if (num3 == ""){
        document.getElementById("resultadonum14c").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok14 = false;
    }

    if(formok14 == true){
    numeros.sort(function(a,b){return a - b});
    document.getElementById("resultadoexer14").innerHTML = numeros;
}
}

function exercicio15(){
    var maximo = 100;
    const numeros15 = new Array(3);
    
    
    numeros15[0]= document.getElementById("num15a").value;
    numeros15[1] = document.getElementById("num15b").value;
    numeros15[2] = document.getElementById("num15c").value;

     num1 = numeros15[0];
     num2 = numeros15[1];
     num3 = numeros15[2];
     var formok15 = true;

     document.getElementById("resultadonum15a").innerHTML = "";
     document.getElementById("resultadonum15b").innerHTML = "";
     document.getElementById("resultadonum15c").innerHTML = "";
     
     document.getElementById("resultadoexer15").innerHTML = "";
     

    if (isNaN(num1) ){
        document.getElementById("resultadonum15a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico...";
        formok15 = false;
    }
    if (num1 == ""){
        document.getElementById("resultadonum15a").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok15 = false;
    }
    if (isNaN(num2) ){
        document.getElementById("resultadonum15b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico...";
        formok15 = false;
    }
    if (num2 == ""){
        document.getElementById("resultadonum15b").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok15 = false;
    }
    if (isNaN(num3)){
        document.getElementById("resultadonum15c").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>"  + "Insira um valor numérico...";
        formok15 = false;
    }
    if (num3 == ""){
        document.getElementById("resultadonum15c").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um número...";
        formok15 = false;
    }

    var diferenca1 = Math.abs(num1 - maximo);
    var diferenca2 = Math.abs(num2 - maximo);
    var diferenca3 = Math.abs(num3 - maximo);
    var auxmenorDiferenca = diferenca1;
    var auxmaispertocem = num1;

    if(diferenca2 < auxmenorDiferenca){
        auxmaispertocem = num2;
        auxmenorDiferenca = diferenca2;
    }
    if(diferenca3 < auxmenorDiferenca){
        auxmaispertocem = num3;
        auxmenorDiferenca = diferenca3;
    }

    if(formok15 == true){

    
    document.getElementById("resultadoexer15").innerHTML = "O número mais perto de 100 é " + auxmaispertocem + ". ";
}

}

function exercicio16(){ 
    var nota = document.getElementById("nota16").value;
    var formok16 = true;

    document.getElementById("resultadonota16").innerHTML = "";
    document.getElementById("resultadoexer16").innerHTML = "";

   if(nota == ""){
        document.getElementById("resultadonota16").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira a nota..";
        formok16 = false;
   }
    if(isNaN(nota)){
        document.getElementById("resultadonota16").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor numérico..";
        formok16 = false;
    }
    if(nota < 0 || nota > 20){
        document.getElementById("resultadonota16").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira uma nota entre 0 e 20 valores.";
        formok16 = false;
    }

    if (formok16 == true){
    if(nota < 5){
        document.getElementById("resultadoexer16").innerHTML = nota + " - Muito Insuficiente."
    } else if(nota >= 5 && nota < 9.5){
        document.getElementById("resultadoexer16").innerHTML = nota + " - Insuficiente."
    }else if(nota >= 9.5 && nota < 14){
        document.getElementById("resultadoexer16").innerHTML = nota + " - Suficiente."
    }else if(nota >= 14 && nota < 16){
        document.getElementById("resultadoexer16").innerHTML = nota + " - Bom."
    }else {
        document.getElementById("resultadoexer16").innerHTML = nota + " - Muito Bom."
    }
}
}

function exercicio17(){ 
   var texto17 = document.getElementById("texto17").value;

   document.getElementById("resultadotexto17").innerHTML = "";
   document.getElementById("resultadoexer17").innerHTML = "";
   var form17 = true;

   if(texto17 == ""){
    document.getElementById("resultadotexto17").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um texto..";
    form17 = false;
   }

   if (form17 == true){
   var palavras = texto17.split(' ');//separa a frase em palavras
   var palavrasSemNao = palavras.filter(texto17 => texto17.toLowerCase() !== 'não');//põe a frase em minusculas e procura em toda a frase a palavra não 
   var novaFrase = palavrasSemNao.join(' ');//junta as palavras numa frase novamente

  if(palavrasSemNao.length === palavras.length){
    document.getElementById("resultadoexer17").innerHTML = "Frase sem a palavra 'não'. <br>" ; 
    }else{
        document.getElementById("resultadoexer17").innerHTML = "A frase continha a palavra 'não'. <br>Nova frase: " + novaFrase;
    }
}

}

function exercicio18(){
    var frase18 = document.getElementById("texto18").value;
    var form18 = true;

    document.getElementById("resultadotexto18").innerHTML = "";
    document.getElementById("resultadoexer18").innerHTML = " ";

    if(frase18 == ""){
        document.getElementById("resultadotexto18").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um texto...";
        form18 = false;
    }


    if(form18 == true){
    var contarletras = 0;
    for( var i = 0; i < frase18.length; i++){
        if(!isNaN(parseInt(frase18[i]))){
            contarletras++;
        }
    }
    if(contarletras > 0){
    document.getElementById("resultadoexer18").innerHTML = "A frase tem " + contarletras + " caracteres numéricos.";
    }else{
        document.getElementById("resultadoexer18").innerHTML = "A frase não contem caracteres numéricos.";
    }
}
}

function exercicio19(){
    var texto19 = document.getElementById("texto19").value;
    var form19 = true;
    document.getElementById("resultadotexto19").innerHTML = " ";
    document.getElementById("resultadoexer19").innerHTML = "";
    
    if (texto19 == ""){
        document.getElementById("resultadotexto19").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um texto...";
        form19 = false;
    }

    if(form19 == true){
    
    var fraseInvertida = '';

   for (var i = texto19.length - 1; i >= 0; i--) { //vê todos os caracteres da frase por ordem invertida
     
     fraseInvertida += texto19[i];//vai adicionando à fraseInvertida pela ordem contrária
   }

   document.getElementById("resultadoexer19").innerHTML = fraseInvertida;
}
}

function exercicio20(){ 
    //converte a string num número decimal
    var euros = Number.parseFloat(document.getElementById("num20").value);
    var cambio = Number.parseFloat(document.getElementById("cambio20").value);

    document.getElementById("resultadonum20").innerHTML = " ";
    document.getElementById("resultadocambio20").innerHTML = " ";

    var form20 = true;
 
    if(isNaN(euros)){
        document.getElementById("resultadonum20").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira um valor em euros...";
        form20 = false;
    }
    if(isNaN(cambio)){
        document.getElementById("resultadocambio20").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-xl' style='color: #FFD43B;'></i>" + "Insira o valor do cambio...";
        form20 = false;
    }
    if(form20 == true){

   var conversao = ConverterEurosDolares(euros, cambio);
    

    document.getElementById("resultadoexer20").innerHTML = euros.toFixed(2) + "€ corresponde a " + conversao.toFixed(2)+ "$";//toFixed serve para definir as casas decimais
    }

}

function ConverterEurosDolares(euros, cambio){
    return euros * cambio;
}

function exercicio21(){
    var num21 = Number.parseFloat(document.getElementById("num21").value);
    var form21 = true;
    
    document.getElementById("resultadonum21").innerHTML = "";
    document.getElementById("resultadoexer21").innerHTML = "";

   if(isNaN(num21)){
        document.getElementById("resultadonum21").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor numérico";
        form21 = false;
    }

    if(form21 == true){
            if(num21 > 0){
                var numneg = TrocarNumeroParaNegativo(num21)
                document.getElementById("resultadoexer21").innerHTML = numneg;
            }else if(num21 == 0){
                document.getElementById("resultadoexer21").innerHTML = "O " + num21 + " não dá para converter em negativo.";
            }
            else{
                document.getElementById("resultadoexer21").innerHTML = "O " + num21 + " já é negativo.";
            }
}
}


function TrocarNumeroParaNegativo(num){
  
    return -Math.abs(num);

}

function exercicio22(){
    var valor = Number.parseFloat(document.getElementById("num22").value);
    var imposto = Number.parseFloat(document.getElementById("imposto22").value);
    var form22 = true;

    document.getElementById("resultadonum22").innerHTML = "";
    document.getElementById("resultadoimposto22").innerHTML = "";


    if(isNaN(valor) || valor <= 0){
        document.getElementById("resultadonum22").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor válido";
        form22 = false;
    }
    if(isNaN(imposto) || imposto <= 0 || imposto > 100){
        document.getElementById("resultadoimposto22").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um imposto válido";
        form22 = false;
    }

    if(form22 == true){
        var result = PercentagemImposto(valor, imposto);
        document.getElementById("resultadoexer22").innerHTML = "Valor sem imposto: " + result.valorsemimpost.toFixed(2) + "€ <br>Imposto: " + result.imposto.toFixed(2) + "€";

    }
}

function PercentagemImposto(num, impos){
    
    var imposto = num * (impos / 100);
    var valorsemimpost = num - imposto;
    return{
        valorsemimpost: valorsemimpost,//para que consiga vir buscar um retorno de cada vez
        imposto: imposto
    };
}

function exercicio23(){
    var valor = Number.parseFloat(document.getElementById("num23").value);
    var imposto = Number.parseFloat(document.getElementById("imposto23").value);
    var form23 = true;
    document.getElementById("resultadonum23").innerHTML = "";
    document.getElementById("resultadoimposto23").innerHTML = "";
    document.getElementById("resultadoexer23").innerHTML = "";



    if(isNaN(valor) || valor <= 0){
        document.getElementById("resultadonum23").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor válido";
        form23 = false;
    }
    if(isNaN(imposto) || imposto <= 0 || imposto > 100){
        document.getElementById("resultadoimposto23").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um imposto válido";
        form23 = false;
    }

    if(form23 == true){
        document.getElementById("resultadoexer23").innerHTML = "Valor com imposto : " + (valor+(valor*(imposto/100))).toFixed(2)  + "€";

    }
}

function exercicio24(){
    var quantidade = document.getElementById("num24").value;
    var senha = "";
    var lista = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var form24 = true;

    document.getElementById("resultadonum24").innerHTML = "";
    document.getElementById("resultadoexer24").innerHTML = "";

     if(quantidade == ""){
        document.getElementById("resultadonum24").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form24 = false;
     }
     else if(isNaN(quantidade) || quantidade <= 0){
        document.getElementById("resultadonum24").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor numérico positivo...";
        form24 = false;
     }

     if(form24 == true){
        for(var i = 0; i < quantidade; i++){
            senha += lista.charAt(Math.floor(Math.random()*lista.length));
            //charAt - usada para acessar o caracter na posição especificada dentro da string, a posição é determinada pelo nº inteiro resultante da expressão anterior(Math.random()*lista.length), ou seja um indice aleatório dentro da string - lista
            //Math.floor - arredonda o número para baixo para o inteiro mais proximo
            //Math.random  - retorna um número entre 0 e 1
        }
        document.getElementById("resultadoexer24").innerHTML = "Senha : " + senha;
     }
    


}

function exercicio25(){
    var array25 = [];
    
    for(var i = 0; i < 100; i++){
        array25.push(Math.floor(Math.random() * 10000));
        //criar um array com 100 nº aleatórios até 9999
    }
    var maior25 = array25[0];
console.log(array25);
    for(var i = 1; i < array25.length; i++){//vê todos os valores no array para ver qual o maior
        if(array25[i] > maior25){
            maior25 = array25[i];
        }
    }
    document.getElementById("resultadoexer25").innerHTML = "O maior valor no array é de " + maior25;
}

function exercicio26(){
    var array26 = [];
    
    for(var i = 0; i < 100; i++){
        array26.push(Math.floor(Math.random() * 10000));
        //criar um array com 100 nº aleatórios até 9999
    }
    var menor26 = array26[0];
console.log(array26);
    for(var i = 1; i < array26.length; i++){//vê todos os valores no array para ver qual o maior
        if(array26[i] < menor26){
            menor26 = array26[i];
        }
    }
    document.getElementById("resultadoexer26").innerHTML = "O menor valor no array é de " + menor26;
}

function exercicio27(){
    var km = document.getElementById("km27").value;
    var litros = document.getElementById("combustivel27").value;

    document.getElementById("resultadokm27").innerHTML = "";
    document.getElementById("resultadocomb27").innerHTML = "";
    document.getElementById("resultadoexer27").innerHTML = "";

    console.log(litros);
   var form27 = true;
    if (km == ""){
        document.getElementById("resultadokm27").innerHTML = "Insira um valor...";
        form27 = false;
    }
    else if(isNaN(km) || km <= 0){
        document.getElementById("resultadokm27").innerHTML = "Insira um valor numérico maior que zero...";
        form27 = false;
    }


   if(litros == ""){
        document.getElementById("resultadocomb27").innerHTML = "Insira um valor...";
        form27 = false;
    }else if (isNaN(litros) || litros <= 0){
        document.getElementById("resultadocomb27").innerHTML = "Insira um valor numérico maior que 0";
        form27 = false;
    }

    if(form27 == true){
        const consumo = km / litros;
        document.getElementById("resultadoexer27").innerHTML = "O consumo médio de combustível é de " + consumo.toFixed(2) + " litros/km."
    }

}

function exercicio28(){
    var num28a = document.getElementById("valor1").value;
    var num28b = document.getElementById("valor2").value;

    document.getElementById("resultadovalor1").innerHTML = "";
    document.getElementById("resultadovalor2").innerHTML = "";
    document.getElementById("resultadoexer28").innerHTML = "";

    var form28 = true;
    if(num28a == ""){
        document.getElementById("resultadovalor1").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form28 = false;
    }
    if(isNaN(num28a)){
        document.getElementById("resultadovalor1").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor numérico...";
        form28 = false;
    }
    if(num28b == ""){
        document.getElementById("resultadovalor2").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form28 = false;
    }
    if(isNaN(num28b)){
        document.getElementById("resultadovalor2").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor numérico...";
        form28 = false;
    }


    if(form28 == true){
    var maior = Math.max(num28a, num28b);//devolve o maior nº
    var menor = Math.min(num28a, num28b);//devolve o menor nº

    document.getElementById("resultadoexer28").innerHTML = "A diferença do maior pelo mais pequeno é " + (maior-menor).toFixed(2); 
}
    
}

function exercicio29(){
    resultadoexer29.innerHTML = "";
    var quantasVezes29 = {};

    for(var i = 0; i < 35000; i++){
        var numero29 = Math.floor(Math.random() * 6) + 1; //gera um numero aleatorio entre 1 e 6
        if(quantasVezes29[numero29]){
            quantasVezes29[numero29]++;
        }else{
            quantasVezes29[numero29] = 1;
        }
    }
console.log(quantasVezes29);
    for(var numero in quantasVezes29){
       resultadoexer29.innerHTML += "O nº " + numero + " saiu " + quantasVezes29[numero] + " vezes.<br>";//dá para enviar assim o resultado também
    }
}

function exercicio30(){
    var num30 = document.getElementById("num30").value;
    resultadonum30.innerHTML = "";
    resultadoexer30.innerHTML = "";

    if(num30 == ""){
        resultadonum30.innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um número...";
    }
    if(isNaN(num30)){
        resultadoexer30.innerHTML = "ERRO...Insira um número, não letras...";
    }
}

function exercicio31(){
    var senha1 = document.getElementById("inputPassword31a").value;
    var senha2 = document.getElementById("inputPassword31b").value;
    var form31 = true;

    document.getElementById("resultadopass1").innerHTML = "";
    document.getElementById("resultadopass2").innerHTML = "";
    document.getElementById("resultadoexer31").innerHTML = "";

    
    if(senha1 == ""){
        document.getElementById("resultadopass1").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira a password...";
        form31 = false;
    }
    if(senha2 == ""){
        document.getElementById("resultadopass2").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" +" Insira a password...";
        form31 = false;
    }
    if (form31 == true){
        if(senha1 == senha2){
            document.getElementById("resultadoexer31").innerHTML = "<i class='fa-solid fa-user-secret fa-2xl' style='color: #19181b;'></i>" + " Sucesso...";
        }else{
            document.getElementById("resultadoexer31").innerHTML = "Password incorreta!";
        }
    }
console.log(senha1);
console.log(senha2);



}

function exercicio32(){
    var rect32 = document.getElementById('ex32');
    
    var ctx = rect32.getContext('2d');
    

    ctx.fillStyle = 'blue';
    
    var largura = 200;
    var altura = 100;
    var x = (ctx.canvas.width - largura) / 2;
    var y = (ctx.canvas.height - altura) / 2;
    ctx.fillRect(x, y, largura, altura);
}

function exercicio33(){
    var circ33 = document.getElementById("ex33");
    var circulo = circ33.getContext("2d");

    circulo.fillStyle = "red";

    var x = circ33.width / 2;
    var y = circ33.height / 2;
    var raio = 73.5;

    circulo.beginPath();
    circulo.arc(x, y,raio, 0, Math.PI * 2);
    circulo.fill();
}

function exercicio34(){
    var mail34 = document.getElementById("email34").value;
    var confir34 = /@/;//para confirmar se tem @ no email
    var tem34 = confir34.test(mail34);
    var form34 = true;

    document.getElementById("resultadoemail34").innerHTML = "";
    document.getElementById("resultadoexer34").innerHTML = "";
    
    if(tem34 == false){
        document.getElementById("resultadoemail34").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira @ no email...";
        form34 = false;
    }

    if(mail34 == ""){
        document.getElementById("resultadoemail34").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um email...";
        form34 = false;
    }

    if(form34 == true){
        var separar34 = mail34.split('@');//divide o email em duas partes
        var nome34 = separar34[0];
        var dominio34 = separar34[1];

        var qntoculta = Math.ceil(nome34.length / 2); //calcula a quantidade de caracteres a serem ocultados
        var oculto34 = nome34.substr(0, nome34.length - qntoculta) + '.....';//oculta metade do nome
        var mailoculto34 = oculto34 + "@" + dominio34;//junta a matade oculta com o que estava na segunda parte que não foi alterada(dominio34)

        document.getElementById("resultadoexer34").innerHTML = mailoculto34;
    }
}

function exercicio35(){
    var nome35 = document.getElementById("nomes35").value;
    var form35 = true;
    document.getElementById("resultadoexer35").innerHTML = "";
    document.getElementById("resultadonome35").innerHTML = "";

    if(nome35 == ""){
        document.getElementById("resultadonome35").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um nome...";
        form35 = false;
    }

    if(form35 == true){
        document.getElementById("resultadoexer35").innerHTML = nome35 + "<br>" + nome35[0] + "<br>" + nome35[nome35.length - 1] + "<br>" + nome35.substring(0, 3)+ "<br>" + nome35.substring(1)+ "<br>" + nome35.substring(nome35.length - 2)+ "<br>" + nome35.split(' ').join(' ');
        
        
    }
}

function exercicio36(){
    const numero36 = parseInt(document.getElementById("num36").value);
    let form36 = true;

    document.getElementById("resultadonum36").innerHTML = "";
    document.getElementById("resultadoexer36").innerHTML = "";
    if (numero36 == ""){
        document.getElementById("resultadonum36").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um valor..."
        form36 = false;
    }
    if(isNaN(numero36) || numero36 <= 0){
        document.getElementById("resultadonum36").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um valor númerico superior a 0..."
        form36 = false;
    }
    if(form36 == true){
      
        for(let i = 1; i <= numero36; i++){
            let y = "";
            for (let j = 1; j <= i; j++){//para ir acrecentando *
            
            y += "* " ;
            }
            document.getElementById("resultadoexer36").innerHTML += y + "<br>"  ;//para adicionar ao que ja lá está +=
        }
    }
}


function exercicio37(){
    const numero37 = parseInt(document.getElementById("num37").value);//converter a string em inteiro

    let form37 = true;
    document.getElementById("resultadonum37").innerHTML = "";
    document.getElementById("resultadoexer37").innerHTML = "";

    if(numero37 == ""){
        document.getElementById("resultadonum37").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um número...";
        form37 = false;
    }
    if(isNaN(numero37)){
        document.getElementById("resultadonum37").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + " Insira um valor númerico...";
        form37 = false;
    }

    if(form37 == true){
        let soma = 0;
        for(let i = 1; i <= numero37; i++){
                soma += i;
        }
        document.getElementById("resultadoexer37").innerHTML = soma;
    }
}

function exercicio38(){
    const numero38 = 3;
    const limite38 = 100;
    let multiplos38 = [];
    for(let i = 1; i <= limite38; i++){
        if((i % numero38) == 0 ){
            multiplos38.push(i);//adiciona o número ao array
        }
    }
   const metade38 = Math.ceil(multiplos38.length / 2);//dividir o array a meio para ficar direito na pagina
   const primmetade38 = multiplos38.slice(0 , metade38);//ir buscar a primeira metade do array
   const segunmetade = multiplos38.slice(metade38);//ir buscar a segunda metade do array
   
   document.getElementById("resultadoexer38").innerHTML = "Multiplos de " + numero38 + " até " + limite38 + ":<br> " + primmetade38 + ",<br>" + segunmetade;
}

function exercicio39(){
  const numero39 = document.getElementById("mes39").value;
  var dtaInserida = new Date(numero39);
  const mesesex39= [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    

  var form39 = true;
  document.getElementById("resultadomes39").innerHTML = "";
  document.getElementById("resultadoexer39").innerHTML = "";

  if(isNaN(dtaInserida.getTime())){//verifica se é uma data válida
    document.getElementById("resultadomes39").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + "Data inválida";
    form39 = false;
  }
  if (form39 == true){
     const nummes = dtaInserida.getMonth();
     const mesesextenso = mesesex39[nummes];
     document.getElementById("resultadoexer39").innerHTML = mesesextenso;

  }
}

function exercicio40(){
    const entrada40 = document.getElementById("horaEntrada40").value;
    const saida40 = document.getElementById("horaSaida40").value;

    const confirmarHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;//expressão regular para validar o formato HH:MM 
    var testeEntrada = confirmarHora.test(entrada40);
    var testeSaida = confirmarHora.test(saida40);
   

    var form40 = true;

    document.getElementById("resultadohoraEntrada40").innerHTML = "";
    document.getElementById("resultadohoraSaida40").innerHTML = "";
    document.getElementById("resultadoexer40").innerHTML = "";

    if(testeEntrada == false){
        document.getElementById("resultadohoraEntrada40").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + "Insira uma hora válida...";
        form40 = false;
    }
    if(testeSaida == false){
        document.getElementById("resultadohoraSaida40").innerHTML = "<i class='fa-solid fa-xmark fa-2xl' style='color: #ff0033;'></i>" + "Insira uma hora válida...";
        form40 = false;
    }

    if (form40 == true){
        var horasEntrada = new Date("2024-01-01 " + entrada40);//convertem-se em objectos date para poderem ser comparadas
        var horasSaida = new Date("2024-01-01 " + saida40);
        if(horasEntrada >= horasSaida){
            document.getElementById("resultadoexer40").innerHTML = "As horas de saida não podem ser menores que as horas de entrada.";
        }else{
            document.getElementById("resultadoexer40").innerHTML = "Picagem realizada com sucesso. Entrou às " + entrada40 + "h e saiu às " + saida40 + "h.";
        }
    }
}

function exercicio41(){
    const diasemana = document.getElementById("diaSemana41").value;
    var dataSemana42 = new Date(diasemana);
    const diasSemana42 = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado" ];//a semana começa ao domingo
    var form41 = true;

    document.getElementById("resultadodiaSemana41").innerHTML = "";
    document.getElementById("resultadoexer41").innerHTML = "";

    if(isNaN(dataSemana42.getTime())){
        document.getElementById("resultadodiaSemana41").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Data Inválida...";
        form41 = false; 
    }

    if(form41 == true){
        const semanadias42 = dataSemana42.getDay();//para obter o dia
        const diasPorExtenso = diasSemana42[semanadias42];
        document.getElementById("resultadoexer41").innerHTML = diasPorExtenso;
    }


}

function exercicio42(){
    const nascimento42 = document.getElementById("dataNascimento42").value;
    var nasc42 = new Date(nascimento42);
    var form42 = true;

    document.getElementById("resultadoexer42").innerHTML = "";
    document.getElementById("resultadodiadataNascimento42").innerHTML = "";


    if(isNaN(nasc42.getTime())){
        document.getElementById("resultadodiadataNascimento42").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Data Inválida...";
        form42 = false;
    }
    
    if(form42 == true){
        const dataAtual = new Date();

        const diferencaMilessegundos = dataAtual - nasc42;//calcula a diferença das datas em milissegundos
        const idade42 = Math.floor(diferencaMilessegundos / (1000 * 60 * 60 * 24 * 365));//converter a diferença de milessegundos para anos

        document.getElementById("resultadoexer42").innerHTML = "Idade: " + idade42 + " anos.";

    }

}

function exercicio43(){ 
    
    const certo43 = Number.parseFloat(document.getElementById("precoCerto43").value);
    const palpite1a = Number.parseFloat(document.getElementById("aposta1-43").value);
    const palpite2a = Number.parseFloat(document.getElementById("aposta2-43").value);
    const palpite3a = Number.parseFloat(document.getElementById("aposta3-43").value);

   
    var form43 = true;
    document.getElementById("resultadoprecoCerto43").innerHTML = "";
    document.getElementById("resultadoaposta1ex43").innerHTML = "";
    document.getElementById("resultadoaposta2ex43").innerHTML = "";
    document.getElementById("resultadoaposta3ex43").innerHTML = "";
    document.getElementById("resultadoexer43").innerHTML = "";

    if(isNaN(certo43)){
        document.getElementById("resultadoprecoCerto43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" +  "Insira o valor numérico...";
        form43 = false;
    }
    if (certo43 <= 0){
        document.getElementById("resultadoprecoCerto43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor superior a 0.";
        form43 = false;
    }
   

    if(isNaN(palpite1a)){
        document.getElementById("resultadoaposta1ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor numérico...";
        form43 = false;
    }
    if (palpite1a <= 0){
        document.getElementById("resultadoaposta1ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor superior a 0.";
        form43 = false;
    }
    if(isNaN(palpite2a)){
        document.getElementById("resultadoaposta2ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor numérico...";
        form43 = false;
    }
    if (palpite2a <= 0){
        document.getElementById("resultadoaposta2ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor superior a 0.";
        form43 = false;
    }
    if(isNaN(palpite3a)){
        document.getElementById("resultadoaposta3ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor numérico...";
        form43 = false;
    }
    if (palpite3a <= 0){
        document.getElementById("resultadoaposta3ex43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira o valor superior a 0.";
        form43 = false;
    }

    if(form43 == true){
        if((palpite1a == palpite2a) || (palpite2a == palpite3a) || (palpite1a == palpite3a)){
            document.getElementById("resultadoexer43").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Não podem inserir valores iguais..."
        }
        else{
                
            var diferenca1a = certo43 - palpite1a;   
            var  diferenca2a = certo43 - palpite2a;
            var  diferenca3a = certo43 - palpite3a;
            console.log(diferenca1a);
            console.log(diferenca2a);
            console.log(diferenca3a);
    
            if(diferenca1a >= 0 && (diferenca1a < diferenca2a || diferenca2a <= 0) && (diferenca1a < diferenca3a || diferenca3a <= 0 ))
                {
                document.getElementById("resultadoexer43").innerHTML = "1º Concorrente ganhou!!!Parabéns...";
            }
            else if(diferenca2a >= 0 && (diferenca2a < diferenca1a || diferenca1a <= 0) && (diferenca2a < diferenca3a || diferenca3a <= 0)){
                    document.getElementById("resultadoexer43").innerHTML = "2º Concorrente ganhou!!!Parabéns...";
            }
            else if(diferenca3a >= 0 && (diferenca3a < diferenca1a || diferenca1a <= 0) && (diferenca3a < diferenca2a || diferenca2a <= 0)){
                document.getElementById("resultadoexer43").innerHTML = "3º Concorrente ganhou!!!Parabéns...";
            }
            else{
                document.getElementById("resultadoexer43").innerHTML = "Não há vencedores. Todos os preços são superiores ao preço certo.";
            }
        }
        
     }
}

function exercicio44(){

    const candidatoA = document.getElementById("canditadoA44").value;
    const candidatoB = document.getElementById("canditadoB44").value;
    const candidatoC = document.getElementById("canditadoC44").value;

    var form44 = true;

    document.getElementById("resultadocanditadoA44").innerHTML = "";
    document.getElementById("resultadocanditadoB44").innerHTML = "";
    document.getElementById("resultadocanditadoC44").innerHTML = "";
    document.getElementById("resultadoexer44").innerHTML = "";

    if(candidatoA == ""){
        document.getElementById("resultadocanditadoA44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor!";
        form44 = false;
    }else if(isNaN(candidatoA) || candidatoA < 0){
        document.getElementById("resultadocanditadoA44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor numérico maior ou igual a zero!";
        form44 = false;
    }
    if(candidatoB == ""){
        document.getElementById("resultadocanditadoB44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor!";
        form44 = false;
    }else if(isNaN(candidatoB) || candidatoB < 0){
        document.getElementById("resultadocanditadoB44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor numérico maior ou igual a zero!";
        form44 = false;
    }
    if(candidatoC == ""){
        document.getElementById("resultadocanditadoC44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor!";
        form44 = false;
    }else if(isNaN(candidatoC) || candidatoC < 0){
        document.getElementById("resultadocanditadoC44").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor numérico maior ou igual a zero!";
        form44 = false;
    }

    if(form44){

        if(candidatoA == candidatoB && candidatoB == candidatoC){
            document.getElementById("resultadoexer44").innerHTML = "Empate de todos os candidatos";
        }else if(candidatoA == candidatoB && candidatoA != candidatoC){
            document.getElementById("resultadoexer44").innerHTML = "Empate dos candidatos A e B";
        }else if(candidatoA == candidatoC && candidatoA != candidatoB){
            document.getElementById("resultadoexer44").innerHTML = "Empate dos candidatos A e C";
        }else if(candidatoB == candidatoC && candidatoB != candidatoA){
            document.getElementById("resultadoexer44").innerHTML = "Empate dos candidatos B e C";
        }else if(candidatoA > candidatoB && candidatoA > candidatoC){
            document.getElementById("resultadoexer44").innerHTML = "Vitória para o Candidato A";
        }else if(candidatoB > candidatoA && candidatoB > candidatoC){
            document.getElementById("resultadoexer44").innerHTML = "Vitória para o candidato B";
        }else{
            document.getElementById("resultadoexer44").innerHTML = "Vitória para o candidato C";
        }
    }



}


function exercicio45() {
    const numeroDeElementos45 = 100;
    var arrayNumeros45 = [];

   
    for (var i = 0; i < numeroDeElementos45; i++) {
        arrayNumeros45.push(Math.floor(Math.random() * 100) + 1);//cria um array com numeros aleatórios 
    }

    var numerosRepetidos45 = {};//array para os numeros repetidos

    // contar quantas vezes cada número ocorre
    for (var i = 0; i < arrayNumeros45.length; i++) {
        var numero45 = arrayNumeros45[i];
        if (numerosRepetidos45[numero45] === undefined) {//estreitamente igual a undefined se for quer dizer que ainda não encontramos o número e inicializamos a contagem
            numerosRepetidos45[numero45] = 1;
        } else {
            numerosRepetidos45[numero45]++;
        }
        
    }
   
    var resultadoHTML45 = "";
    for (var chave in numerosRepetidos45) {
        var contagem = numerosRepetidos45[chave];//temos que criar uma variável para os numeros aparecerem
        resultadoHTML45 += "O número " + chave + " ocorre " + contagem + " vezes.<br>";
    }
    document.getElementById("resultadoexer45").innerHTML = resultadoHTML45;
   
}

function exercicio46(){
    const numeroDeElementos46 = 100;
    var arrayNumeros46 = [];

   
    for (var i = 0; i < numeroDeElementos46; i++) {
        arrayNumeros46.push(Math.floor(Math.random() * 100) + 1);//cria um array com numeros aleatórios 
    }

    var arraySemREpeticoes = arrayNumeros46.filter((item, index) => arrayNumeros46.indexOf(item) === index);//esta expressão cria um novo array removendo os elementos duplicados

    var arrayRepetidos46 = arrayNumeros46.filter((item, index) => arrayNumeros46.indexOf(item) !== index);//esta expressão cria um novo array removendo os elementos não duplicados
    
    //Os parametros a e b são usados para garantir que os elementos são ordenados numericamente em ordem crescente
    var aSR = arraySemREpeticoes.sort((a, b) => a - b);
    var aOrig = arrayNumeros46.sort((a, b) => a - b);
    var aRep = arrayRepetidos46.sort((a, b) => a - b);

    document.getElementById("resultadoexer46").innerHTML = "O array Original: <br>" + MostarArray(aOrig) + "<br>Array sem repetições: " + MostarArray(aSR) + "<br>Numeros retirados do array: " + MostarArray(aRep);
}

function MostarArray(aray){
    let resultado = "";
    for(var i = 0; i < aray.length; i +=12){
        var bocados = aray.slice(i, i + 12);
        resultado += bocados.join(",") + "<br>";
    }
return resultado;
}

function exercicio47(){
    const numeroDeElementos47 = 100;
    var arrayNumeros47 = [];

   
    for (var i = 0; i < numeroDeElementos47; i++) {
        arrayNumeros47.push(Math.floor(Math.random() * 100) + 1);//cria um array com numeros aleatórios 
    }

    var numerosRepetidos47 = {};//array para os numeros repetidos

    // contar quantas vezes cada número ocorre
    for (var i = 0; i < arrayNumeros47.length; i++) {
        var numero47 = arrayNumeros47[i];
        if (numerosRepetidos47[numero47] === undefined) {//estreitamente igual a undefined se for quer dizer que ainda não encontramos o número e inicializamos a contagem
            numerosRepetidos47[numero47] = 1;
        } else {
            numerosRepetidos47[numero47]++;
        }
        
    }
   
    var numeroMaisFrequente;
    var maiorContagem = 0;

    for (var chave in numerosRepetidos47) {
        var contagem = numerosRepetidos47[chave];
        if (contagem > maiorContagem) {
            numeroMaisFrequente = chave;
            maiorContagem = contagem;
        }
    }

    document.getElementById("resultadoexer47").innerHTML = "O nº que ocorre mais vezes é o " + numeroMaisFrequente;

}


function adicionarTracosEntrePares(numero) {
    // Converter o número para uma string
    var numeroString = numero.toString();
    
    var resultado = "";

    // Ver os numeros
    for (var i = 0; i < numeroString.length; i++) {
        // Adicionar ao atual ao resultado
        resultado += numeroString[i];
        
        //adicionar um traço
        if (parseInt(numeroString[i]) % 2 === 0 && parseInt(numeroString[i + 1]) % 2 === 0) {
            resultado += "-";
        }
    }

    return resultado;
}

function exercicio48() {
    var numero = document.getElementById("numero48").value;
    var form48 = true;

    document.getElementById("resultadonumero48").innerHTML = "";
    document.getElementById("resultadoexer48").innerHTML = "";
    
    if(numero == ""){
        document.getElementById("resultadonumero48").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor!";
        form48 = false; 
    }else if(isNaN(numero) || numero < 1000){
        document.getElementById("resultadonumero48").innerHTML = "<i class='fa-solid fa-triangle-exclamation fa-2xl' style='color: #f2240d;'></i>" + "Insira um valor numérico superior a 1000!";
        form48 = false; 
    }

    if(form48){
        document.getElementById("resultadoexer48").innerHTML = "Resultado: <br>" + adicionarTracosEntrePares(numero);
    }
  
  
}



function exercicio49(){
    const numeroDeElementos49 = 10;
    var arrayNumeros49a = [];
    var arrayNumeros49b = [];
    var resultado49 = [];
   
    for (var i = 0; i < numeroDeElementos49; i++) {
        arrayNumeros49a.push(Math.floor(Math.random() * 30) + 1);//cria um array com numeros aleatórios 
        arrayNumeros49b.push(Math.floor(Math.random() * 30) + 1);//cria um array com numeros aleatórios 
    }

 
    for(var i = 0; i < numeroDeElementos49; i++){
        
      const valor49a = arrayNumeros49a[i];
      const valor49b = arrayNumeros49b[i];
      resultado49.push(valor49a + valor49b);
       
    }
    document.getElementById("resultadoexer49").innerHTML = "1º Array <br>" + arrayNumeros49a + "<br>2º Array<br> " + arrayNumeros49b + "<br>Soma dos Arrays <br>" + resultado49;
   
}

function exercicio50(){
    const matriz50 = [];
    const numlinhas50 = 10;//para o tamanho da matriz
    const numcolunas50 = 10;
    var cont50 = 0;

    for (var i = 0; i < numlinhas50; i++) {//para preencher a matriz
        const linha50 =[];
        for ( var j = 0; j < numcolunas50; j++){
            linha50.push(Math.floor(Math.random() * 100) + 1);//cria um array com numeros aleatórios 
        }
        matriz50.push(linha50);
    }

    for (var i = 0; i < matriz50.length; i++){//para comparar quais valores estão ere 10 e 20
        for(var j = 0; j < matriz50[i].length; j++){
            const elemento50 = matriz50[i][j];
            if(elemento50 >= 10 && elemento50 <=20){
                cont50++;
            }
        }
    }
    console.log(matriz50);

    document.getElementById("resultadoexer50").innerHTML = "O nº de elementos entre 10 e 20 é de " + cont50;


}

function exercicio51(){
    const letras51 = document.getElementById("frase52").value;

    form51 = true;

    document.getElementById("resultadofrase52").innerHTML = "";
    document.getElementById("resultadoexer51").innerHTML =  "";

    if(letras51 == ""){
        document.getElementById("resultadofrase52").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira um texto...";
        form51 = false;
    }

    if (form51 == true){
        const frasesemCaracteres = letras51.replace(/[^\w\s]/gi, '');//expressão que retira todos os caracteres especiais temos que a por noutra variavel
        document.getElementById("resultadoexer51").innerHTML = 'Frase sem caracteres especiais: <br>' + frasesemCaracteres;

    }
}

function exercicio52(){
    const num52 = document.getElementById("numero52").value;
    
    let form52 = true;

    document.getElementById("resultadonumero52").innerHTML = "";
    document.getElementById("resultadoexer52").innerHTML = "";

    // Validar a entrada do usuário
    if (num52 === "") {
        document.getElementById("resultadonumero52").innerHTML =  "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" +" Insira um número.";
        form52 = false;
    } else if (!Number.isInteger(Number(num52))) {
        document.getElementById("resultadonumero52").innerHTML =  "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira um  valor númerico inteiro.";
        form52 = false;
    }

    if (form52) {
        // Converter o número decimal para binário
        const binario52 = parseInt(num52, 10).toString(2);
        document.getElementById("resultadoexer52").innerHTML = "O número decimal " + num52 + " em binário é: <br>" + binario52;
    }
}

function exercicio53(){
    //para gerar as cores aleatórias
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);

    const cor53 = `rgb(${a}, ${b}, ${c})`;//templates da string permite que insira o valor da variável dentro da string

    document.body.style.background = cor53;
}

function exercicio54(){
    const cor54 = document.getElementById("cor54").value;
    document.getElementById("resultadoexer54").style.backgroundColor = cor54;
}

function exercicio55(){
    const num55a = parseInt(document.getElementById("numero55a").value);
    const num55b = parseInt(document.getElementById("numero55b").value);

    var form55 = true;

    document.getElementById("resultadonumero55a").innerHTML = "";
    document.getElementById("resultadonumero55b").innerHTML = "";
    document.getElementById("resultadoexer55").innerHTML = "";

    if(!num55a){
        document.getElementById("resultadonumero55a").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form55 = false; 
    }else if(num55a <= 0){
        document.getElementById("resultadonumero55a").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira um valor superior a 0...";
        form55 = false;
    }
    if(!num55b){
        document.getElementById("resultadonumero55b").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira um valor...";
        form55 = false; 
    }else if(num55b <= 0){
        document.getElementById("resultadonumero55b").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + " Insira um valor superior a 0...";
        form55 = false;
    }
    
    if (form55 == true){
        let tabelaHTML = "<table border='1'>";
        for (let i = 0; i < num55a; i++) {
            tabelaHTML += "<tr>";
            for (let j = 0; j < num55b; j++) {
                tabelaHTML += "<td></td>";
            }
            tabelaHTML += "</tr>";
        }
        tabelaHTML += "</table>";
    
        document.getElementById("resultadoexer55").innerHTML = tabelaHTML;
    }


}

function Exercicio56(){ 
    
    var tabelaexer56 = document.getElementById("tabelaExercicio56");
    var escolherlinha56 = document.getElementById("numero56a").value;
    var escolherColuna56 = document.getElementById("numero56b").value;
    var texto56 = document.getElementById("texto56").value;
    var form56 = true;
  

    const numlinhas56 = 3;
    const numcolunas56 = 3;
    document.getElementById("resultadonumero56a").innerHTML = "";
    document.getElementById("resultadonumero56b").innerHTML = "";
    document.getElementById("resultadotexto56").innerHTML = "";
    document.getElementById("tabelaExercicio56").innerHTML = "";



    if(escolherColuna56 <= 0 || escolherColuna56 > 3){
        document.getElementById("resultadonumero56b").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor entre 1 e 3...";
        form56 = false; 
    }else if(escolherColuna56 == ""){
        document.getElementById("resultadonumero56b").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form56 = false; 

    }
    if(escolherlinha56 <= 0 || escolherlinha56 > 3){
        document.getElementById("resultadonumero56a").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor entre 1 e 3...";
        form56 = false; 
    }else if(escolherlinha56 == ""){
        document.getElementById("resultadonumero56a").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um valor...";
        form56 = false; 

    }
    if(texto56 == ""){
        document.getElementById("resultadotexto56").innerHTML = "<img src='imagens/erro.png' alt='Erro' class='imgerro'>" + "Insira um texto...";
        form56 = false; 
    }

    if(form56){
          // Loop para criar as linhas da tabela
    for (var i = 0; i < numlinhas56; i++){
        var linha = tabelaexer56.insertRow();

        // Loop para criar as colunas da linha
        for (var j = 0; j < numcolunas56; j++){
            var coluna = linha.insertCell();
        }      
    }
 
    tabelaexer56.rows[escolherlinha56 - 1].cells[escolherColuna56 - 1].innerHTML = texto56;
    }


  
}


function Exercicio57() {
    // Obter a altura e largura da janela
    var altura = window.innerHeight;
    var largura = window.innerWidth;
    console.log(altura);
    console.log(largura);
    document.getElementById("resultadoexer57").innerHTML = "Altura: " + altura + "px <br> Largura: " + largura + "px";
}

function ArrayAleatorio(n, min, max){//podes usar noutros exercicios ver
    //para criar um array aleatório dentro dos valores que precisamos(que vamos definir quando a função for chamada)
    var array = [];
    for(var i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}
function bubbleSort58(array58){
    //Algoritmo que percorre repetidamente a lista, compara os elementos adjacentes array58[i] = array58[i+1] e troca se estiverem na ordem errada usamos uma variavel auxiliar para não destruirmos o valor da variavel original, e faz até que a troca 58 se torne verdadeiro, tem que returnar o array
    var troca58;
    do{
        troca58 = false;
        for(var i = 0; i < array58.length - 1; i++){
            if(array58[i] > array58[i+1]){
                //trocar os elementos de posição
                var ex58 = array58[i];
                array58[i] = array58[i+1];
                array58[i + 1] = ex58;
                troca58 = true;
            }
        }
    }while(troca58);
    return array58;
}

function exercicio58(){
    //cria um array de 100 elementos entre 1 e 1000, definimos aqui o n = 100 º de elementos, min = 1 valor minimo, max = 1000 valor maximo

    //criamos o array o mostramos o resultado do array original
    var numaleatorio58 = ArrayAleatorio(100, 1, 1000);
    document.getElementById("resultadoexer58").innerHTML = "Array original:<br>" + MostarArray(numaleatorio58); 

    //ordenar o array usando a algoritmo e mostrar resultados
    var numerosbubble = bubbleSort58(numaleatorio58);

    document.getElementById("resultadoexer58").innerHTML += "<br>Array ordenado:<br>" + MostarArray(numerosbubble);
     
}


function InsertionSort59(array59){
    //algoritmo de classificação simples  para cada elemento do array, ele compara o elemento com os anteriores já ordenados e insere o elemento na posição correta, tem que retornar o array
        var tmnh59 = array59.length;
        for(var i = 0; i < tmnh59; i++){
            var num59 = array59[i];
            var j = i - 1;
            while(j >= 0 && array59[j] > num59){
                array59[j + 1] = array59[j];
                j = j - 1;
            }
            array59[j + 1] = num59;

        }
        return array59;

}

function exercicio59(){
     //cria um array de 100 elementos entre 1 e 1000, definimos aqui o n = 100 º de elementos, min = 1 valor minimo, max = 1000 valor maximo

     //criamos o array o mostramos o resultado do array original
    var numaleatorio59 = ArrayAleatorio(100, 1, 1000);
    document.getElementById("resultadoexer59").innerHTML = "Array original:<br>" + MostarArray(numaleatorio59);
    //ordenar o array usando a algoritmo e mostrar resultados
    var insSort59 = InsertionSort59(numaleatorio59);
    document.getElementById("resultadoexer59").innerHTML += "<br>Array ordenado:<br>" + MostarArray(insSort59);

}

function EncontrarMenor60(array, ini){
    //encontar o indice de menor elemento nua parte não ordenada do array
    var menor60 = ini;
    for( var i = ini + 1; i < array.length; i++){
        if(array[i] < array[menor60]){
            menor60 = i;
        }
    }
    return menor60;
}

function TrocaElementos60(array60a, i1, i2){
    //função para trocar dois elementos de posição no array
    var troc60 = array60a[i1];
    array60a[i1] = array60a[i2];
    array60a[i2]= troc60;
}

function SelectionSort60(array60){
    //divide o array em duas partes: uma ordenada e outra não ordenada, o algoritmo encontra o menor elemento da parte não ordenada e move para o final da parte ordenada
    var tamnh60 = array60.length;
    for(var i = 0; i < tamnh60 -1; i++){
        var inMenor60 = EncontrarMenor60(array60, i);
        if(inMenor60 !== i){
            TrocaElementos60(array60, i, inMenor60);
        }
    }
    return array60;
}

function exercicio60(){
     //cria um array de 100 elementos entre 1 e 1000, definimos aqui o n = 100 º de elementos, min = 1 valor minimo, max = 1000 valor maximo

    //criamos o array o mostramos o resultado do array original
    var aleatorios60 = ArrayAleatorio(100, 1, 1000);
    document.getElementById("resultadoexer60").innerHTML = "Array original:<br>" + MostarArray(aleatorios60);
    //ordenar o array usando a algoritmo e mostrar resultados
    var selSort60 = SelectionSort60(aleatorios60);
    document.getElementById("resultadoexer60").innerHTML += "<br>Array ordenado:<br>" + MostarArray(selSort60);

}



function StartRece(){

var aposta1 = document.getElementById("txtaposta1").value;
var aposta2 = document.getElementById("txtaposta2").value;
var aposta3 = document.getElementById("txtaposta3").value;
var aposta4 = document.getElementById("txtaposta4").value;
var aposta5 = document.getElementById("txtaposta5").value;
var credito = document.getElementById("creditos").innerHTML;

//Verificações
if(aposta1 == 0 && aposta2 == 0 && aposta3 == 0 && aposta4 == 0 && aposta5 == 0){
    alert("Por favor faça a sua aposta!!");
    return;
}

if(isNaN(aposta1) == true){
    alert("O valor da aposta 1 é inválido...");
    return;
}
if(Number(aposta1) > Number(credito) || Number(aposta1) < 0){
    alert("O valor da aposta 1 tem que ser maior que zero e inferior a " + credito);
}

if(isNaN(aposta2) == true){
    alert("O valor da aposta 2 é inválido...");
    return;
}
if(Number(aposta2) > Number(credito) || Number(aposta2) < 0){
    alert("O valor da aposta 2 tem que ser maior que zero e inferior a " + credito);
}

if(isNaN(aposta3) == true){
    alert("O valor da aposta 3 é inválido...");
    return;
}
if(Number(aposta3) > Number(credito) || Number(aposta3) < 0){
    alert("O valor da aposta 3 tem que ser maior que zero e inferior a " + credito);
}

if(isNaN(aposta4) == true){
    alert("O valor da aposta 4 é inválido...");
    return;
}
if(Number(aposta4) > Number(credito) || Number(aposta4) < 0){
    alert("O valor da aposta 4 tem que ser maior que zero e inferior a " + credito);
}

if(isNaN(aposta5) == true){
    alert("O valor da aposta 5 é inválido...");
    return;
}
if(Number(aposta5) > Number(credito) || Number(aposta5) < 0){
    alert("O valor da aposta 5 tem que ser maior que zero e inferior a " + credito);
}

//calculos para retirar os créditos e colocar na pagina os resultados
document.getElementById("creditos").innerHTML = Number(credito) - (Number(aposta1) + Number(aposta2) + Number(aposta3) + Number(aposta4) + Number(aposta5) );

//Função para as imagens começarem a "correr"

var imgjogador1 = document.getElementById("jogador1");
var imgjogador2 = document.getElementById("jogador2");
var imgjogador3 = document.getElementById("jogador3");
var imgjogador4 = document.getElementById("jogador4");
var imgjogador5 = document.getElementById("jogador5");

//Definir onde a imagem vai começar (partida) e acabar (meta)
var partida = window.innerWidth * 0.16;
var meta = window.innerWidth * 0.60;

//Definir posição de partida
var pos1 = partida;
var pos2 = partida;
var pos3 = partida;
var pos4 = partida;
var pos5 = partida;

credito = Number(credito) - (Number(aposta1) + Number(aposta2) + Number(aposta3) + Number(aposta4) + Number(aposta5) );

//definir intervalo de tempo para eles continuarem a correr
var time = setInterval(frame,25);

//função para realizar a corrida
function frame(){

pos1 += (5 * Math.random());
pos2 += (5 * Math.random());
pos3 += (5 * Math.random());
pos4 += (5 * Math.random());
pos5 += (5 * Math.random());

imgjogador1.style.left = pos1 + "px";
imgjogador2.style.left = pos2 + "px";
imgjogador3.style.left = pos3 + "px";
imgjogador4.style.left = pos4 + "px";
imgjogador5.style.left = pos5 + "px";

//por os metros a contar
document.getElementById("metros1").innerHTML = Math.round((pos1 * 100 / meta)) + "/100";
document.getElementById("metros2").innerHTML = Math.round((pos2 * 100 / meta)) + "/100";
document.getElementById("metros3").innerHTML = Math.round((pos3 * 100 / meta)) + "/100";
document.getElementById("metros4").innerHTML = Math.round((pos4 * 100 / meta)) + "/100";
document.getElementById("metros5").innerHTML = Math.round((pos5 * 100 / meta)) + "/100";

//o vencedor
if(pos1 >= meta){
    document.getElementById("vitorias1").innerHTML = Number(document.getElementById("vitorias1").innerHTML) + 1;
    // adicionar creditos
    document.getElementById("creditos").innerHTML = Number(credito) + (2 * Number(aposta1));
    alert("O jogador 1 ganhou!!");
    clearInterval(time);
    imgjogador1.style.left = window.innerWidth * 0.16;
}

if(pos2 >= meta){
    document.getElementById("vitorias2").innerHTML = Number(document.getElementById("vitorias2").innerHTML) + 1;
    // adicionar creditos
    document.getElementById("creditos").innerHTML = Number(credito) + (2 * Number(aposta2));
    alert("O jogador 2 ganhou!!");
    clearInterval(time);
}

if(pos3 >= meta){
    document.getElementById("vitorias3").innerHTML = Number(document.getElementById("vitorias3").innerHTML) + 1;
    // adicionar creditos
    document.getElementById("creditos").innerHTML = Number(credito) + (2 * Number(aposta3));
    alert("O jogador 3 ganhou!!");
    clearInterval(time);
}


if(pos4 >= meta){
    document.getElementById("vitorias4").innerHTML = Number(document.getElementById("vitorias4").innerHTML) + 1;
    // adicionar creditos
    document.getElementById("creditos").innerHTML = Number(credito) + (2 * Number(aposta4));
    alert("O jogador 4 ganhou!!");
    clearInterval(time);
}

if(pos5 >= meta){
    document.getElementById("vitorias5").innerHTML = Number(document.getElementById("vitorias5").innerHTML) + 1;
    // adicionar creditos
    document.getElementById("creditos").innerHTML = Number(credito) + (2 * Number(aposta5));
    alert("O jogador 5 ganhou!!");
    clearInterval(time);
}

}



}