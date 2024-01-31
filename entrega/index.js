document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('register-button');

    registerButton.addEventListener('click', async function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Validar campos do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const postalCode = document.getElementById('postal-code').value.trim();
        const optIn = document.getElementById('consent-checkbox').checked;

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

        // Salvar os dados no localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('postal-code', postalCode);
        localStorage.setItem('optIn', optIn);

        // Imprimir os valores do localStorage no console para verificar
        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('postal-code'));
        console.log(localStorage.getItem('optIn'));

        const formObject = {
            name: name,
            email: email,
            postalCode: postalCode,
            optIn: optIn
        };

        try {
            const response = await fetch('https://churrascometro-api.vercel.app/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                // flag para identificar se já foi enviado o form
                localStorage.setItem('formSubmitted', 'true');
                window.location.href = './result.html';
            } else {
                alert('Erro ao enviar os dados para a API. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
            alert('Erro ao enviar os dados para a API. Por favor, tente novamente.');
        }

        // Redirecionar para a próxima página
        window.location.href = './pages/segunda_pagina.html';
    });
});
