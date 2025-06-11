// dropdown 
  const menuItems = [
    { title: "مردانه", 
      subitems: ["تی‌شرت", "پیراهن", "شلوار"] 
    },
    { title: "زنانه", 
      subitems: ["مانتو", "شومیز", "شلوار"] 
    },
    { title: "بچگانه", 
      subitems: ["ست دخترانه", "ست پسرانه"] 
    },
    { title: "شگفت انگیز", 
      subitems: ["ست دخترانه", "ست پسرانه"] 
    },
    { title: "جدیدترین ها", 
      subitems: ["ست دخترانه", "ست پسرانه"] 
    },
    { title: "بلاگ", 
      subitems: ["ست دخترانه", "ست پسرانه"] 
    },
    { title: "پشتیبانی", 
      subitems: ["ست دخترانه", "ست پسرانه"] 
    }
  ];


  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById("mobile-menu");

    // ساخت منوی داینامیک
    menuItems.forEach(item => {
      const wrapper = document.createElement("div");
      wrapper.className = "border-b";

      const button = document.createElement("button");
      button.className = "w-full flex justify-between items-center py-3 px-4 text-sm font-medium";
      button.setAttribute("data-toggle", "");

      const titleText = document.createTextNode(item.title);
      const svg = document.createElement("span");
      svg.innerHTML = `
        <svg class="w-4 h-4 transition-transform duration-300" data-arrow fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `;
      button.appendChild(titleText);
      button.appendChild(svg);

      const ul = document.createElement("ul");
      ul.className = "pl-6 pr-4 max-h-0 overflow-hidden transition-all duration-300 space-y-2 text-md text-gray-700";
      ul.setAttribute("data-dropdown", "");

      item.subitems.forEach(sub => {
        const li = document.createElement("li");
        li.textContent = sub;
        ul.appendChild(li);
      });

      wrapper.appendChild(button);
      wrapper.appendChild(ul);
      mobileMenu.appendChild(wrapper);
    });

    // مدیریت باز و بسته شدن زیرمنوها
    const toggles = mobileMenu.querySelectorAll("[data-toggle]");
    toggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const wrapper = toggle.parentElement;
        const dropdown = wrapper.querySelector("[data-dropdown]");
        const arrow = toggle.querySelector("[data-arrow]");

        const isOpen = dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px";

        // بستن همه زیرمنوها
        document.querySelectorAll("#mobile-menu [data-dropdown]").forEach(d => d.style.maxHeight = "0px");
        document.querySelectorAll("#mobile-menu [data-arrow]").forEach(a => a.style.transform = "rotate(0deg)");

        if (!isOpen) {
          dropdown.style.maxHeight = dropdown.scrollHeight + "px";
          arrow.style.transform = "rotate(180deg)";
        }
      });
    });
  });
