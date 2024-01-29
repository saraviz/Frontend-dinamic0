document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const input = counter.querySelector("input");
        const incrementButton = counter.querySelector(".input-group__button--small:nth-child(2)");
        const decrementButton = counter.querySelector(".input-group__button--small:nth-child(1)");

        incrementButton.addEventListener("click", function() {
            input.value = parseInt(input.value) + 1;
        });

        decrementButton.addEventListener("click", function() {
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });

    const calcularButton = document.querySelector(".default-button");

    calcularButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Recupera os valores dos contadores
        const quantidadeHomens = parseInt(document.getElementById("Homens").value);
        const quantidadeMulheres = parseInt(document.getElementById("Mulheres").value);
        const quantidadeCriancas = parseInt(document.getElementById("Crianças").value);

        // Calcula o total de pessoas
        const totalPessoas = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;

        
        window.location.href = `result.html?homens=${quantidadeHomens}&mulheres=${quantidadeMulheres}&criancas=${quantidadeCriancas}`;
    });
});

