// Alternando Caixas de Conteúdo
function toggleContent(contentId) {

    // Exibe a caixa de conteúdo correspondente ao ícone clicado
    var content = document.getElementById('content' + contentId);

    // Verifica se o conteúdo está visível
    var isVisible = content.style.display !== 'none';

    // Oculta todas as caixas de conteúdo    
    var contents = document.querySelectorAll('.box-content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Exibe a caixa de conteúdo correspondente se não estiver visível, caso contrário, oculta
    if (!isVisible) {
        content.style.display = 'block';
    }
}