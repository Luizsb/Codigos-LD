// Função para copiar o código
function copyCode(button) {
    const code = button.previousElementSibling.innerText;
    const message = button.nextElementSibling; // O span que contém a mensagem

    navigator.clipboard.writeText(code).then(() => {
        // Altera a cor do botão para verde
        button.classList.add('copied');

        // Exibe a mensagem "Código copiado!"
        message.style.display = 'inline';

        // Remove a classe e a mensagem após 3 segundos
        setTimeout(() => {
            button.classList.remove('copied');
            message.style.display = 'none';
        }, 3000); // Exibe por 3 segundos
    }).catch(err => {
        alert('Erro ao copiar o código.');
    });
}

// Função para filtrar os itens com base na busca
document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const codeItems = document.querySelectorAll('.code-item');
    const noResultsMessage = document.querySelector('.no-results');
    let hasResults = false;

    codeItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = '';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Exibe ou oculta a mensagem de "nenhum resultado encontrado"
    if (hasResults) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
});

// Botão para voltar ao topo
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão ao rolar para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Volta ao topo ao clicar
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para redirecionar para a biblioteca
function redirectToLibrary() {
    window.location.href = "https://luizsb.github.io/Codigos-LD/";
}
