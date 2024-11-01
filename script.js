// Script para enviar o formulário de contato
const contactForm = document.querySelector('#contato form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obter os dados do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Criar um objeto com os dados do formulário
  const formData = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  // Enviar os dados para o servidor (substituir com sua lógica de envio)
  fetch('/contato', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      // Exibir mensagem de sucesso
      alert('Mensagem enviada com sucesso!');
      // Limpar o formulário
      contactForm.reset();
    } else {
      // Exibir mensagem de erro
      alert('Erro ao enviar mensagem.');
    }
  })
  .catch(error => {
    // Exibir mensagem de erro
    alert('Erro ao enviar mensagem.');
  });
});