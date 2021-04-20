const iconMenu = document.querySelector('#icon-menu')
const listMenu = document.querySelector('#list-menu')

iconMenu.addEventListener('click' ,(e) =>{
    
    listMenu.classList.toggle('active')
})