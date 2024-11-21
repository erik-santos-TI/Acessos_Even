function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove classe ativa dos botões
    const buttons = document.querySelectorAll('.company-button');
    buttons.forEach(button => button.classList.remove('active-button'));

    // Exibe a seção correspondente
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active-button');
}

function hideSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
}
