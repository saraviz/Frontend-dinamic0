document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');
    const registrationForm = document.getElementById('registration-form');

    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Validar campos do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const postalCode = document.getElementById('postal-code').value.trim();

        // Validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(email);

        // Verificar se todos os campos obrigatórios foram preenchidos
        if (name === '' || email === '' || postalCode === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return; // Impede o envio do formulário se algum campo estiver em branco
        }

        // Verificar se o e-mail é válido
        if (!isEmailValid) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return; // Impede o envio do formulário se o e-mail for inválido
        }

       
        window.location.href = './pages/segunda_pagina.html';
    });
});
