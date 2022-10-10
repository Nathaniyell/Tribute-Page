const sideBar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');


toggleBtn.addEventListener('click', ()=>{
    sideBar.classList.add('show-sidebar')
    toggleBtn.style.display = 'none'
});

closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('show-sidebar')
    toggleBtn.style.display = 'block'
})