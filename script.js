document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Usuário cadastrado: ${nome}, ${email}, ${idade} anos.`;
    

    this.reset();
});
