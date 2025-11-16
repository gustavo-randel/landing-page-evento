// formulário

const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      if (!nome) {
        alert('Nome não inserido');
        return;
      }
      if (!email) {
        alert('E-mail não inserido');
        return;
      }
      if (!mensagem) {
        alert('Mensagem não inserida');
        return;
      }

      console.log(`Mensagem enviada por ${nome}: ${mensagem}. E-mail do remetente: ${email}.`);
      alert('Mensagem enviada com sucesso!');
    
      form.reset();
    });

// menu hamburguer -> fazer adicionar classe 'active' ao ul q carrega o nav-list

const burguer = document.querySelector(".burguer")
const ul = document.querySelector('ul')

burguer.addEventListener('click', () => {
    ul.classList.toggle('active')
})


