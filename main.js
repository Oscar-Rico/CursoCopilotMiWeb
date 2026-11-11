const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      primaryNav.classList.remove("is-open");
    }
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const message = contactForm.querySelector(".form-message");
    if (message) {
      message.textContent = "Email validado. Este formulario aún no está conectado a un servicio de envío.";
      contactForm.reset();
    }
  });
}

const clock = document.querySelector(".mini-clock");

if (clock) {
  const hourHand = clock.querySelector(".clock-hour");
  const minuteHand = clock.querySelector(".clock-minute");
  const secondHand = clock.querySelector(".clock-second");
  const updateClock = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    if (hourHand && minuteHand && secondHand) {
      hourHand.style.transform = `rotate(${hours * 30}deg)`;
      minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
      secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    }

    clock.setAttribute("aria-label", `Reloj analógico: ${now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}`);
  };

  updateClock();
  window.setInterval(updateClock, 1000);
}

const originProducts = {
  norteamerica: {
    name: "Norteamérica",
    description: "De las costas del Pacífico a las huertas del norte, ingredientes llenos de carácter.",
    products: [
      ["Maíz dulce", "Quebec, Canadá", "Verdura"],
      ["Arándano silvestre", "Quebec, Canadá", "Fruta"],
      ["Edamame", "Iowa, Estados Unidos", "Verdura"],
      ["Mango ataulfo", "Chiapas, México", "Fruta"],
      ["Camarón del Pacífico", "Sonora, México", "Marisco"],
    ],
  },
  sudamerica: {
    name: "Sudamérica",
    description: "Sabores intensos de cordilleras, valles fértiles y aguas frías.",
    products: [
      ["Espárrago verde", "Ica, Perú", "Verdura"],
      ["Arándano azul", "Maule, Chile", "Fruta"],
      ["Mango Kent", "Piura, Perú", "Fruta"],
      ["Frutilla patagónica", "Patagonia, Argentina", "Fruta"],
      ["Langostino del Pacífico", "Guayas, Ecuador", "Marisco"],
    ],
  },
  europa: {
    name: "Europa",
    description: "Clásicos de la huerta y el mar, cultivados y capturados con mimo.",
    products: [
      ["Guisante dulce", "Navarra, España", "Verdura"],
      ["Alcachofa", "Murcia, España", "Verdura"],
      ["Frambuesa", "Lubusz, Polonia", "Fruta"],
      ["Bacalao", "Nordland, Noruega", "Pescado"],
      ["Espinaca baby", "Flandes, Bélgica", "Verdura"],
    ],
  },
  africa: {
    name: "África",
    description: "Frutas al sol, huertas generosas y productos de aguas atlánticas.",
    products: [
      ["Okra", "Dakar, Senegal", "Verdura"],
      ["Mango Kent", "Ashanti, Ghana", "Fruta"],
      ["Piña tropical", "Abiyán, Costa de Marfil", "Fruta"],
      ["Judía verde", "Agadir, Marruecos", "Verdura"],
      ["Merluza del Cabo", "Walvis Bay, Namibia", "Pescado"],
    ],
  },
  asia: {
    name: "Asia",
    description: "Una despensa diversa que reúne frutos delicados y sabores umami.",
    products: [
      ["Edamame", "Hokkaido, Japón", "Verdura"],
      ["Lichi", "Chiang Mai, Tailandia", "Fruta"],
      ["Shiitake", "Fujian, China", "Seta"],
      ["Atún listado", "Malé, Maldivas", "Pescado"],
      ["Mango Alphonso", "Ratnagiri, India", "Fruta"],
    ],
  },
  oceania: {
    name: "Oceanía",
    description: "Tesoros de islas, huertas templadas y costas de aguas limpias.",
    products: [
      ["Kiwi verde", "Bay of Plenty, Nueva Zelanda", "Fruta"],
      ["Guisante de Tasmania", "Tasmania, Australia", "Verdura"],
      ["Salmón de Tasmania", "Tasmania, Australia", "Pescado"],
      ["Aguacate", "Northland, Nueva Zelanda", "Fruta"],
      ["Langostino tigre", "Moreton Bay, Australia", "Marisco"],
    ],
  },
};

const worldMap = document.querySelector(".world-map");
const originTitle = document.querySelector("#origin-region-title");
const originDescription = document.querySelector("#origin-description");
const originCount = document.querySelector("#origin-count");
const originList = document.querySelector("#origin-product-list");

function selectOriginRegion(regionElement) {
  const region = originProducts[regionElement.dataset.region];
  if (!region || !originTitle || !originDescription || !originCount || !originList) return;

  worldMap?.querySelectorAll(".map-region").forEach((item) => {
    const selected = item === regionElement;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", String(selected));
  });

  originTitle.textContent = region.name;
  originDescription.textContent = region.description;
  originCount.textContent = `${String(region.products.length).padStart(2, "0")} productos`;
  originList.replaceChildren(...region.products.map(([name, location, type], index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    const detail = document.createElement("span");
    const productName = document.createElement("span");
    const productLocation = document.createElement("span");
    const productType = document.createElement("span");

    number.className = "origin-item-number";
    number.textContent = String(index + 1).padStart(2, "0");
    detail.className = "origin-item-detail";
    productName.className = "origin-item-name";
    productName.textContent = name;
    productLocation.className = "origin-item-location";
    productLocation.textContent = location;
    detail.append(productName, productLocation);
    productType.className = "origin-item-type";
    productType.textContent = type;
    item.append(number, detail, productType);
    return item;
  }));
}

if (worldMap) {
  worldMap.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const regionElement = event.target.closest(".map-region");
    if (regionElement) selectOriginRegion(regionElement);
  });

  worldMap.addEventListener("keydown", (event) => {
    if ((event.key !== "Enter" && event.key !== " ") || !(event.target instanceof Element)) return;
    const regionElement = event.target.closest(".map-region");
    if (!regionElement) return;
    event.preventDefault();
    selectOriginRegion(regionElement);
  });

  const firstRegion = worldMap.querySelector('.map-region[data-region="norteamerica"]');
  if (firstRegion) selectOriginRegion(firstRegion);
}
