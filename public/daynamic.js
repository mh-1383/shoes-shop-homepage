
const bannerSlides = [
    {
      image: "./images/shoes1.webp",
      title: "مدل نایکی آبی",
      bg: "linear-gradient(135deg, #e3e0e4, #1e9ae7)"
    },
    {
      image: "./images/shoes1.webp",
      title: "کفش های جردن",
      bg: "linear-gradient(135deg, #e3e0e4, #1e9ae7)"
    },
    {
      image: "./images/shoes3.png",
      title: "کفش راحتی تابستونی",
      bg: "linear-gradient(135deg, #ed0404, #1d1d1d)"
    },
    {
      image: "./images/shoes4.webp",
      title: "کفش راحتی  نایکی",
      bg: "linear-gradient(135deg, #828282, #000000)"
    },
    {
      image: "./images/shoes1.webp",
      title: "کفش راحتی  نایکی",
      bg: "linear-gradient(135deg, #e3e0e4, #1e9ae7)"
    },
    {
      image: "./images/shoes4.webp",
      title: "کفش راحتی  نایکی",
      bg: "linear-gradient(135deg, #828282, #000000)"
    }
  ];

 const bannerContainer = document.getElementById("slide1");

  bannerSlides.forEach(slide => {
  const div = document.createElement("div");
  div.className = "swiper-slide flex items-center justify-center relative";
  div.style.background = slide.bg;

  div.innerHTML = `
    <img 
      src="${slide.image}"
      class="w-full h-full object-contain rounded-md transition-transform duration-500 hover:scale-105"
      alt="${slide.title}" loading="lazy" />
    <div class="absolute bottom-6 left-6 text-white bg-black/50 px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm animate-fade-in">
      <h3 class="text-xl font-bold">${slide.title}</h3>
      <button class="mt-2 px-4 py-1 bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition">مشاهده بیشتر</button>
    </div>
  `;
  bannerContainer.appendChild(div);
});


 
 const products = [
    {
      title: "کفش پیاده روی مدل Nov-BK",
      price: "360 هزارتومان",
      image: "./images/shoes1.webp",    
    },
    {
      title: "کفش رانینگ مدل Light-X",
      price: "420 هزارتومان",
      image: "./images/shoes1.webp",
      
    },
    {
      title: "کفش اسپرت مدل Speed-Red",
      price: "380 هزارتومان",
      image: "./images/shoes1.webp",
    
    },
    {
      title: "کفش طبی مردانه مدل Comfort",
      price: "510 هزارتومان",
      image: "./images/shoes1.webp",
      
    },
    {
      title: "کفش طبی مردانه مدل Comfort",
      price: "510 هزارتومان",
      image: "./images/shoes4.webp",
      
    },
    {
      title: "کفش طبی مردانه مدل Comfort",
      price: "510 هزارتومان",
      image: "./images/shoes4.webp",
      
    },
    {
      title: "کفش طبی مردانه مدل Comfort",
      price: "510 هزارتومان",
      image: "./images/shoes4.webp",
      
    },
    {
      title: "کفش طبی مردانه مدل Comfort",
      price: "510 هزارتومان",
      image: "./images/shoes4.webp",
      
    },
  ];


function toPersianDigits(str) {
  return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");
  const viewMoreBtn = document.getElementById("view-more-btn");
  const MAX_VISIBLE_CARDS = 6;

  products.forEach((product, index) => {
    const red = Math.floor(250 * Math.random());
    const green = Math.floor(250 * Math.random());
    const blue = Math.floor(250 * Math.random());

    // قیمت فارسی‌سازی شده
    const priceFa = toPersianDigits(product.price.replace("هزارتومان", "")) + " هزار تومان";

    // تولید رندوم ستاره (بین 2 تا 5)
    const randomStars = Math.floor(Math.random() * 4) + 2;

    const article = document.createElement("article");
    article.className = `border border-gray-500 rounded-md p-4 bg-white shadow-md w-full sm:w-[47%] md:w-[30%] lg:w-[22%] transition-all duration-300 hover:bg-purple-400 cursor-pointer
    ${
      index >= MAX_VISIBLE_CARDS ? "max-md:hidden" : ""
    }`;

    article.innerHTML = `
      <div class=" rounded-md flex justify-center mb-3" style="background-color:rgba(${red}, ${green}, ${blue});">
        <img src="${product.image}" alt="${product.title}" width="60%">
      </div>
      <div class="text-center px-2">
        <p class="text-blue-700 text-sm font-medium mb-2">${product.title}</p>
        <p class="text-[10pt] text-gray-800 mb-1">${priceFa}</p>
        <div class="text-yellow-400 text-sm">
          ${"<i class='fa-solid fa-star'></i>".repeat(randomStars)}
          ${"<i class='fa-regular fa-star'></i>".repeat(5 - randomStars)}
        </div>
      </div>
    `;

    container.appendChild(article);
  });

  viewMoreBtn?.addEventListener("click", () => {
    const hiddenCards = container.querySelectorAll(".max-md\\:hidden");
    hiddenCards.forEach((card) => card.classList.remove("max-md:hidden"));
    viewMoreBtn.style.display = "none";
  });
});



  const products2=[
    {
        title: "کفش پیاده روی مدل Nov-BK",
        price: "360 هزارتومان",
        image: "./images/shoes1.webp",
      },
      {
        title: "کفش رانینگ مدل Light-X",
        price: "420 هزارتومان",
        image: "./images/shoes4.webp",
      },
      {
        title: "کفش اسپرت مدل Speed-Red",
        price: "380 هزارتومان",
        image: "./images/shoes1.webp",
      },
      {
        title: "کفش طبی مردانه مدل Comfort",
        price: "510 هزارتومان",
        image: "./images/shoes4.webp",
      },
      
  ]



const container2 = document.getElementById("products-container2");

products2.map((product2) => {
  // رنگ رندومی برای هر کارت
  const red2 = Math.floor(250 * Math.random());
  const blue2 = Math.floor(250 * Math.random());
  const green2 = Math.floor(250 * Math.random());

  // تبدیل قیمت به فارسی
  const priceFa = toPersianDigits(product2.price.replace("هزارتومان", "")) + " هزار تومان";

  // ستاره رندومی
  const randomStars = Math.floor(Math.random() * 4) + 2;

  const article2 = document.createElement("article");
  article2.className = "border border-gray-500 rounded-md w-full sm:w-[47%] md:w-[30%] lg:w-[22%] h-auto h p-4 transition-all duration-300 hover:bg-purple-400 cursor-pointer";

  article2.innerHTML = `
    <div class=" rounded-md flex justify-center mb-2" style="background-color:rgba(${red2}, ${green2}, ${blue2});">
      <img src="${product2.image}" alt="${product2.title}" width="60%">
    </div>
    <div class=" p-2 text-center">
      <p class="text-blue-700 text-[10pt] w-full mb-2">${product2.title}</p>
      <p class="text-[10pt] text-gray-800 mb-1">${priceFa}</p>
      <div class="text-yellow-400 text-sm">
        ${"<i class='fa-solid fa-star'></i>".repeat(randomStars)}
        ${"<i class='fa-regular fa-star'></i>".repeat(5 - randomStars)}
      </div>
    </div>
  `;

  container2.appendChild(article2);
});




  const products3=[
    {
        title: "کفش پیاده روی مدل Nov-BK",
        price: "360 هزارتومان",
        image: "./images/shoes1.webp",
        stars: 5,
        bgColor: "bg-pink-400",
      },
      {
        title: "کفش رانینگ مدل Light-X",
        price: "420 هزارتومان",
        image: "./images/shoes4.webp",
        stars: 4,
        bgColor: "bg-yellow-300",
      },
      {
        title: "کفش اسپرت مدل Speed-Red",
        price: "380 هزارتومان",
        image: "./images/shoes1.webp",
        stars: 3,
        bgColor: "bg-blue-300",
      },
      {
        title: "کفش طبی مردانه مدل Comfort",
        price: "510 هزارتومان",
        image: "./images/shoes4.webp",
        stars: 4,
        bgColor: "bg-green-400",
      },
      
  ]



const container3 = document.getElementById("products-container3");

products3.map((product3) => {
  // رنگ رندوم برای هر کارت
  const red3 = Math.floor(250 * Math.random());
  const blue3 = Math.floor(250 * Math.random());
  const green3 = Math.floor(250 * Math.random());

  // قیمت به فارسی
  const priceFa = toPersianDigits(product3.price.replace("هزارتومان", "")) + " هزار تومان";

  // ستاره رندومی
  const randomStars = Math.floor(Math.random() * 4) + 2;

  const article3 = document.createElement("article");
  article3.className = "border border-gray-500 rounded-md w-full sm:w-[47%] md:w-[30%] lg:w-[22%] cursor-pointer  p-4 transition-all duration-300 hover:bg-purple-400 cursor-pointer ";
  
  article3.innerHTML = `
    <div class=" rounded-md flex justify-center mb-2" style="background-color:rgba(${red3}, ${green3}, ${blue3});">
      <img src="${product3.image}" alt="${product3.title}" width="60%">
    </div>
    <div class="  p-2 text-center">
      <p class="text-blue-700 text-[10pt] w-full mb-2">${product3.title}</p>
      <p class="text-[10pt] text-gray-800 mb-1">${priceFa}</p>
      <div class="text-yellow-400 text-sm">
        ${"<i class='fa-solid fa-star'></i>".repeat(randomStars)}
        ${"<i class='fa-regular fa-star'></i>".repeat(5 - randomStars)}
      </div>
    </div>
  `;

  container3.appendChild(article3);
});






  // sliders-content
  const newestProducts = [
    {
      title: "کفش پیاده روی مدل Nov-BK",
      price: "360 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 5,
      bgColor: "bg-pink-400"
    },
    {
      title: "کفش اسپرت مدل Max-Air",
      price: "420 هزارتومان",
      image: "./images/shoes4.webp",
      stars: 4,
      bgColor: "bg-blue-300"
    },
    {
      title: "کفش رانینگ مدل Zoom",
      price: "510 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 3,
      bgColor: "bg-yellow-300"
    },
    {
      title: "کفش کوهنوردی مدل Strong",
      price: "480 هزارتومان",
      image: "./images/shoes4.webp",
      stars: 4,
      bgColor: "bg-green-400"
    },
    {
      title: "کفش کوهنوردی مدل Strong",
      price: "480 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 4,
      bgColor: "bg-green-400"
    },
    
   
  ];

  const slidersContainer = document.getElementById("sliders-container");

  newestProducts.forEach((product) => {
    const article = document.createElement("article");
    article.className = "swiper-slide border border-gray-500 rounded-md p-3 h-auto";
     // قیمت به فارسی
  const priceFa = toPersianDigits(product.price.replace("هزارتومان", "")) + " هزار تومان";

  // ستاره رندومی
  const randomStars = Math.floor(Math.random() * 4) + 2;
    article.innerHTML = `
      <div class="${product.bgColor} rounded-md flex justify-center">
        <img src="${product.image}" alt="${product.title}" height="200px">
      </div>
      <div class="text-center p-2">
        <p class="text-blue-700 text-[10pt] w-full text-center mb-2">${product.title}</p>
        <p class="text-[10pt] text-gray-800">${priceFa}</p>
        <div class="text-yellow-400 text-sm">
         ${"<i class='fa-solid fa-star'></i>".repeat(randomStars)}
        ${"<i class='fa-regular fa-star'></i>".repeat(5 - randomStars)}
        </div>
      </div>
      
    `;

    slidersContainer.appendChild(article);
  });

  const bestsellerProducts = [
    {
      title: "کفش بسکتبال مدل Dunk-Pro",
      price: "530 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 5,
      bgColor: "bg-red-400"
    },
    {
      title: "کفش فوتسال مدل Speed-X",
      price: "390 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 4,
      bgColor: "bg-orange-300"
    },
    {
      title: "کفش ورزشی مدل ActiveRun",
      price: "450 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 4,
      bgColor: "bg-purple-300"
    },
    {
      title: "کفش تمرینی مدل PowerFit",
      price: "499 هزارتومان",
      image: "./images/shoes1.webp",
      stars: 3,
      bgColor: "bg-teal-400"
    },
    {
      title: "کفش حرفه‌ای مدل Elite-Z",
      price: "620 هزارتومان",
      image: "./images/shoes4.webp",
      stars: 5,
      bgColor: "bg-indigo-400"
    },
  ];
  
  const bestsellerContainer = document.getElementById("sliders-container2");
  
  bestsellerProducts.forEach((product) => {
    const article = document.createElement("article");
    article.className = "swiper-slide border border-gray-500 rounded-md p-3 h-auto";
     // قیمت به فارسی
  const priceFa = toPersianDigits(product.price.replace("هزارتومان", "")) + " هزار تومان";

  // ستاره رندومی
  const randomStars = Math.floor(Math.random() * 4) + 2;
    article.innerHTML = `
      <div class="${product.bgColor} rounded-md flex justify-center">
        <img src="${product.image}" alt="${product.title}" height="200px">
      </div>
      <div class="text-center p-2">
        <p class="text-blue-700 text-[10pt] w-full text-center mb-2">${product.title}</p>
        <p class="text-[10pt] text-gray-800">${priceFa}</p>
        <div class="text-yellow-400 text-sm">
          ${"<i class='fa-solid fa-star'></i>".repeat(randomStars)}
        ${"<i class='fa-regular fa-star'></i>".repeat(5 - randomStars)}
        </div>
      </div>
    `;
  
    bestsellerContainer.appendChild(article);
  });
  
  