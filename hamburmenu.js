
// document.addEventListener('DOMContentLoaded', () => {
//     // سوییچ زیرمنوها
//     const dropdowns = document.querySelectorAll("#mobile-menu [data-dropdown]");
//     const arrows = document.querySelectorAll("#mobile-menu [data-arrow]");
//     const toggles = document.querySelectorAll("#mobile-menu [data-toggle]");
  
//     const closeAll = () => {
//       dropdowns.forEach(d => d.style.maxHeight = '0px');
//       arrows.forEach(a => a.style.transform = 'rotate(0deg)');
//     };
  
//     toggles.forEach((toggle, i) => {
//       toggle.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.stopPropagation();
  
//         const drop = dropdowns[i];
//         const arrow = arrows[i];
//         const isOpen = drop.style.maxHeight !== '0px';
  
//         closeAll();
//         if (!isOpen) {
//           drop.style.maxHeight = drop.scrollHeight + 'px';
//           arrow.style.transform = 'rotate(180deg)';
//         }
//       });
//     });
  
//     // بستن منو با کلیک بیرون
//     document.body.addEventListener('click', (e) => {
//       if (!e.target.closest("#mobile-menu") && !e.target.closest("#menu-toggle")) {
//         mobileMenu.classList.add("hidden");
//       }
//     });
//   });
  