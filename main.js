function onScroll() {    
    if (scrollY > 0) {
    /* "navigation" é o objeto que tem o id "navigation" */
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}


ScrollReveal({
    origin: 'top', // movimentar do topo pra baixo
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);