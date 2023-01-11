const ham = document.getElementById('ham')
const nav = document.querySelector('.nav')
const cancel = document.getElementById('cross')
ham.addEventListener('click',()=>{
    nav.style.top='0px'
})
cancel.addEventListener('click',()=>{
    nav.style.top='-1000px'
})