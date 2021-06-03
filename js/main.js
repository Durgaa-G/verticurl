const toogleMenu = () => {
    let body = document.querySelector('body');
    body.classList.toggle('sidebarOpen')
}
const closePanel = () => {
    let body = document.querySelector('body');
    body.classList = ''
}
const resetScreen = () => {
    closePanel();
    window.innerWidth > 1024 ?
        document.querySelector('.nav').removeAttribute('hidden') : document.querySelector('.nav').setAttribute('hidden', true);
}
const togglePrimayNav = () => {
    document.querySelector('.nav').toggleAttribute('hidden');
}
const init = () => {
    let toggleBtn = document.querySelectorAll('.menu-toggle');
    let primaryMenu = document.querySelector('.primary-menu');
    toggleBtn.forEach(btn => btn.addEventListener('click', toogleMenu));
    primaryMenu.addEventListener('click', togglePrimayNav);
    window.addEventListener("resize", resetScreen);
    resetScreen()
}

init()
