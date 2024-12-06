
document.addEventListener('DOMContentLoaded', function() {

  const enviarMensagemBtn = document.getElementById('enviarMensagem');

  if (enviarMensagemBtn) {

    enviarMensagemBtn.addEventListener('click', function() {
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('msg').value;

      const mensagemObj = {
        nome: nome,
        email: email,
        mensagem: mensagem
      };

      inserirMensagem(mensagemObj);
      alert('Mensagem enviada com sucesso!');
    });
  }

  const loginBtn = document.getElementById('login');

  if (loginBtn) {

    loginBtn.addEventListener('click', function() {
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      const objLoginSenha = {
        email: email,
        senha: senha
      };

      if (validarUsuario(objLoginSenha)) {
        window.location.href = 'mensagens.html';
      } else {
        alert('E-mail e Senha inválidos');
      }
    });
  }

  const mensagensContainer = document.getElementById('mensagens');

  if (mensagensContainer) {
    
    const mensagens = obterMensagens();
    const tbody = mensagensContainer.querySelector('tbody');

    mensagens.forEach(function(mensagem) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${mensagem.nome}</td>
        <td>${mensagem.email}</td>
        <td>${mensagem.mensagem}</td>
      `;
      tbody.appendChild(row);
    });
  }
});