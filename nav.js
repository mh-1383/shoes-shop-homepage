const nav=document.getElementById('nav');
console.log(nav);

window.addEventListener('scroll',()=>{
    if(scrollY>500){
        nav.classList.remove('relative');
        nav.classList.add('fixed');
        nav.classList.add('top-0');
        
    }
    if(scrollY==0){
        nav.classList.add('relative');
         nav.classList.remove('fixed');
        nav.classList.remove('top-0');
    }
})