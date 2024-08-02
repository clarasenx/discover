function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img');    
    
    html.classList.toggle('light')
    
    if(html.classList.contains('light')) {
        img.setAttribute('src', '/assets/imgPerfil.jpg');
    } else {
        img.setAttribute('src', '/assets/avatar.png');
    }

    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'foto de um homem adulto sorrindo, usando óculos escuros e jaqueta cinza escuro');
    } else {
        img.setAttribute('alt', 'foto de um homem adulto com barba sorrindo, usando óculos e camisa preta');
    }
}
