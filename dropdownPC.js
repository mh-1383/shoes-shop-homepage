const menuItems2 = [
  { title: "مردانه", subitems: ["تی‌شرت", "پیراهن", "شلوار"] },
  { title: "زنانه", subitems: ["مانتو", "شومیز", "شلوار"] },
  { title: "بچگانه", subitems: ["ست دخترانه", "ست پسرانه"] },
  { title: "شگفت انگیز", subitems: ["ست دخترانه", "ست پسرانه"] },
  { title: "جدیدترین ها", subitems: ["ست دخترانه", "ست پسرانه"] },
  { title: "بلاگ", subitems: ["ست دخترانه", "ست پسرانه"] },
  { title: "پشتیبانی", subitems: ["ست دخترانه", "ست پسرانه"] },
];

document.addEventListener("DOMContentLoaded", () => {
  const pcMenu = document.getElementById("pc-menu");

  menuItems2.forEach(item => {
    const wrapper = document.createElement("li");
    wrapper.className = "relative ";

    const button = document.createElement("button");
    button.className = "flex items-center  font-medium text-[15pt] max-xl:text-[13pt]";
    button.setAttribute("data-toggle", "");

    const titleText = document.createTextNode(item.title);
    const span = document.createElement("span");
    span.innerHTML = `
      <svg class="w-4 h-4 transition-transform duration-300" data-arrow fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;

    button.appendChild(titleText);
    button.appendChild(span);

    const dropdown = document.createElement("ul");
    dropdown.className = "absolute top-full bg-white shadow rounded overflow-hidden max-h-0 transition-all duration-300 w-40 z-50";
    dropdown.setAttribute("data-dropdown", "");

    item.subitems.forEach(sub => {
      const li = document.createElement("li");
      li.className = "px-4 py-2 hover:bg-gray-100 cursor-pointer text-[12pt]";
      li.textContent = sub;
      dropdown.appendChild(li);
    });

    wrapper.appendChild(button);
    wrapper.appendChild(dropdown);
    pcMenu.appendChild(wrapper);
  });

  const toggles = pcMenu.querySelectorAll("[data-toggle]");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const wrapper = toggle.parentElement;
      const dropdown = wrapper.querySelector("[data-dropdown]");
      const arrow = toggle.querySelector("[data-arrow]");

      const isOpen = dropdown.classList.contains("open");
      // بستن همه منوها
      document.querySelectorAll("#pc-menu [data-dropdown]").forEach(d => {
        d.style.maxHeight = "0px";
        d.classList.remove("open");
      });
      document.querySelectorAll("#pc-menu [data-arrow]").forEach(a => {
        a.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        dropdown.classList.add("open");
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });

  // کلیک بیرون از منو
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = pcMenu.contains(event.target);

    if (!isClickInsideMenu) {
      document.querySelectorAll("#pc-menu [data-dropdown]").forEach(d => {
        d.style.maxHeight = "0px";
        d.classList.remove("open");
      });
      document.querySelectorAll("#pc-menu [data-arrow]").forEach(a => {
        a.style.transform = "rotate(0deg)";
      });
    }
  });
});
