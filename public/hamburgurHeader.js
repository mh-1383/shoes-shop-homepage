const btnMenu = document.getElementById('menu-toggle2');
const headerMobile = document.getElementById('hambur-header');
const bgBlack=document.getElementById('black');
const exiticon=document.getElementById('exit-icon');
btnMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  bgBlack.classList.toggle('hidden');
  headerMobile.classList.toggle('translate-x-full');
  headerMobile.classList.toggle('opacity-0');
  headerMobile.classList.toggle('opacity-100');
});

headerMobile.addEventListener('click', (e) => e.stopPropagation());

document.body.addEventListener('click', () => {
  bgBlack.classList.add('hidden');
  headerMobile.classList.add('translate-x-full');
  headerMobile.classList.remove('opacity-100');
  headerMobile.classList.add('opacity-0');
});

exiticon.addEventListener('click',()=>{
  bgBlack.classList.add('hidden');
  headerMobile.classList.add('translate-x-full');
  headerMobile.classList.remove('opacity-100');
  headerMobile.classList.add('opacity-0');
})
