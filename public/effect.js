window.addEventListener('DOMContentLoaded',()=>{
  new TypeIt("#type-text", {
    speed: 120,
    waitUntilVisible: true,
    loop: true,
    breakLines: true
  })
    .type("احساس خوب زندگی")
    .pause(1000)
    .delete()
    .pause(2000)
    .type("با کفش‌های <span class='text-purple-800 font-medium'>آرتی شاب</span>")
    .pause(5000)
    .delete()
    .go();
})




window.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    ScrollReveal().reveal('.my-section', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      duration: 800,
      easing: 'ease-in-out',
      reset: true,
    });
  }
});


// از چپ
 if(window.innerWidth>768){
  ScrollReveal().reveal('.from-left', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 200,
    opacity: 0,
    easing: 'ease-out',
    scale: 0.95,
    reset: true,
  });
 }

  // از راست
  if(window.innerWidth>768){
    ScrollReveal().reveal('.from-right', {
    origin: 'right',
    distance: '80px',
    duration: 1000,
    delay: 200,
    opacity: 0,
    easing: 'ease-out',
    scale: 0.95,
    reset: true,
  });
  }

