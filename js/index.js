const nav = document.getElementById('nav');
const btnToggleMenu = document.getElementById('toggle-menu');


btnToggleMenu.addEventListener('click', ()=>{
    console.log('Has been clicked')
    nav.classList.toggle('nav--show');
})


