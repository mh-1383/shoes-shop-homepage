const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

// تعریف متغیرهای اسلایدرها
// تعریف متغیرهای اسلایدرها
let swiperNew; // برای نگهداری نمونه جدیدترین
let swiperBest; // برای نگهداری نمونه پرفروش‌ترین

// مقداردهی اولیه اسلایدر جدیدترین


  document.addEventListener("DOMContentLoaded",()=>{
    swiperNew = new Swiper(".newest-swiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".newest-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 4 },
        640: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
      grabCursor: true,
      observer: true,
      observeParents: true,
    });
  })
  


  document.addEventListener("DOMContentLoaded",()=>{
    swiperBest = new Swiper(".bestseller-swiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".bestseller-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 4 },
        640: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
      grabCursor: true,
      observer: true,
      observeParents: true,
    });
  })
  



// مدیریت رویداد کلیک روی تب‌ها

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active-tab"));
    contents.forEach((c) => c.classList.add("hidden"));

    tab.classList.add("active-tab");
    const targetContent = document.getElementById(tab.dataset.tab);
    targetContent.classList.remove("hidden");

    setTimeout(() => {
      if (targetContent.id === "newest") {
        swiperNew.update();
        swiperNew.slideTo(0);
      } else if (targetContent.id === "bestseller") {
        swiperBest.update();
        swiperBest.slideTo(0);
      }
    }, 100);
  });
});
