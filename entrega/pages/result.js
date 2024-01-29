document.addEventListener("DOMContentLoaded", function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const quantidadeHomens = parseInt(urlParams.get('homens'));
    const quantidadeMulheres = parseInt(urlParams.get('mulheres'));
    const quantidadeCriancas = parseInt(urlParams.get('criancas'));

    //  total de convidados
    const totalConvidados = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;

    // texto de total de convidados
    const totalGuestElement = document.getElementById("total-guest");
    totalGuestElement.textContent = `${totalConvidados} convidado(s)`;

    // Atualizar a quantidade de homens, mulheres e crianças
    const quantidadeHomensElement = document.getElementById("quantidade-homens");
    const quantidadeMulheresElement = document.getElementById("quantidade-mulheres");
    const quantidadeCriancasElement = document.getElementById("quantidade-criancas");

    quantidadeHomensElement.textContent = `${quantidadeHomens} Homens`;
    quantidadeMulheresElement.textContent = `${quantidadeMulheres} Mulheres`;
    quantidadeCriancasElement.textContent = `${quantidadeCriancas} Crianças`;

    // Calcular as quantidades 
    const quantidadeBolo = (0.6 * quantidadeHomens) + (0.42 * quantidadeMulheres) + (0.20 * quantidadeCriancas);
    const quantidadeSalgado = (2 * (quantidadeHomens + quantidadeMulheres)) + quantidadeCriancas;
    const quantidadeDoce = (2 * (quantidadeHomens + quantidadeMulheres)) + quantidadeCriancas;
    const quantidadeRefrigerante = Math.ceil(totalConvidados / 5);
    const quantidadeAgua = Math.ceil(totalConvidados / 5);

    // Atualizar os resultados na tabela
    const resultadosElement = document.querySelector(".results");
    resultadosElement.children[0].children[1].textContent = `${quantidadeBolo.toFixed(3)} KG`;
    resultadosElement.children[1].children[1].textContent = `${quantidadeSalgado} unidade(s)`;
    resultadosElement.children[2].children[1].textContent = `${quantidadeDoce} unidade(s)`;
    resultadosElement.children[3].children[1].textContent = `${quantidadeRefrigerante * 2000} ml`;
    resultadosElement.children[4].children[1].textContent = `${quantidadeAgua * 1000} ml`;

    // Selecionar o botão "Novo cálculo"
    const novoCalculoButton = document.querySelector(".default-button");

    // Adicionar um evento de clique ao botão
    novoCalculoButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        window.location.href = "segunda_pagina.html";
    });
});
