import { common, pages } from "./content.js";

const pageKey = document.body.dataset.page;
const page = pages[pageKey];
const config = {
  companyName: "Название компании",
  phone: "+7 (___) ___-__-__",
  phoneHref: "",
  email: "sales@example.ru",
  address: "Укажите адрес производства",
  formEndpoint: "",
  ...(window.HYDRO_SITE_CONFIG || {})
};

if (!page) {
  throw new Error(`Unknown page key: ${pageKey}`);
}

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const icon = (name) => {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
    upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>'
  };
  return icons[name] || "";
};

const button = (label, href = "#contact", secondary = false) =>
  `<a class="button${secondary ? " button--secondary" : ""}" href="${href}">${esc(label)}${icon("arrow")}</a>`;

const visualSvg = () => {
  if (pageKey === "cylinders") {
    return `<svg class="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация гидроцилиндра">
      <g class="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370"/></g>
      <g class="machine-svg__body"><rect x="115" y="132" width="330" height="108" rx="13"/><rect x="445" y="163" width="165" height="46" rx="7"/><path d="M610 186h45M96 154v64M70 145h26v82H70z"/><path d="M160 146v80M420 146v80"/></g>
      <g class="machine-svg__accent"><circle cx="160" cy="186" r="25"/><path d="M160 161v50M470 186h130"/><circle cx="610" cy="186" r="10"/></g>
    </svg>`;
  }
  if (pageKey === "stations") {
    return `<svg class="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация гидростанции">
      <g class="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370"/></g>
      <g class="machine-svg__body"><path d="M98 270h485l-22-90H120z"/><rect x="150" y="95" width="105" height="85" rx="8"/><circle cx="202" cy="137" r="29"/><rect x="300" y="105" width="165" height="75" rx="7"/><path d="M326 105V78h113v27M498 180v-70h55v70M150 270v25M540 270v25"/></g>
      <g class="machine-svg__accent"><path d="M202 108v58M173 137h58M255 137h45M465 142h33"/><circle cx="525" cy="135" r="12"/></g>
    </svg>`;
  }
  return `<svg class="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация испытательного стенда">
    <g class="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370"/></g>
    <g class="machine-svg__body"><rect x="85" y="62" width="510" height="245" rx="10"/><path d="M255 62v245M85 235h510"/><rect x="115" y="92" width="110" height="113" rx="5"/><circle cx="170" cy="132" r="24"/><path d="M170 156v32M145 188h50M300 105h245M300 145h165M300 185h210M115 270h440"/></g>
    <g class="machine-svg__accent"><path d="M170 132l12-14M280 270h95M328 225v-40M328 225h110v-40"/><circle cx="328" cy="180" r="8"/><circle cx="438" cy="180" r="8"/></g>
  </svg>`;
};

const header = `
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="../" aria-label="На главную">
        <span class="brand__mark">H</span>
        <span><strong data-company>${esc(config.companyName)}</strong><small>Инженерные гидросистемы</small></span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Открыть меню</span></button>
      <nav class="site-nav" id="site-nav" aria-label="Основная навигация">
        ${common.nav.map(([href, label]) => `<a href="#${href}">${label}</a>`).join("")}
        <a class="site-nav__phone" href="${esc(config.phoneHref || "#contact")}">${icon("phone")}${esc(config.phone)}</a>
        ${button("Обсудить проект")}
      </nav>
    </div>
  </header>`;

const hero = `
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <p class="eyebrow">${esc(page.hero.eyebrow)}</p>
        <h1>${esc(page.hero.title)}</h1>
        <p class="hero__lead">${esc(page.hero.lead)}</p>
        <div class="hero__actions">${button(page.hero.primary)}${button(page.hero.secondary, "#parameters", true)}</div>
        <ul class="hero__tags">${page.hero.tags.map((tag) => `<li>${icon("check")}${esc(tag)}</li>`).join("")}</ul>
      </div>
      <div class="hero-visual">
        <div class="hero-visual__top"><span>Схема решения</span><strong>${esc(page.hero.visualTitle)}</strong></div>
        ${visualSvg()}
        <div class="hero-visual__metrics">${page.hero.metrics.map(([value, label]) => `<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div>
      </div>
    </div>
  </section>`;

const proof = `
  <section class="proof-strip" aria-label="Ключевые преимущества">
    <div class="container proof-strip__grid">${page.proof.map(([title, text], index) => `<article><span>0${index + 1}</span><div><h2>${esc(title)}</h2><p>${esc(text)}</p></div></article>`).join("")}</div>
  </section>`;

const products = `
  <section class="section" id="products">
    <div class="container">
      <div class="section-heading section-heading--split"><div><p class="eyebrow">Продукция</p><h2>${esc(page.products.title)}</h2></div><p>${esc(page.products.lead)}</p></div>
      <div class="product-grid">${page.products.items.map(([title, text, number]) => `<article class="product-card"><span class="product-card__number">${esc(number)}</span><div class="product-card__icon"><span></span><i></i></div><h3>${esc(title)}</h3><p>${esc(text)}</p><a href="#contact">Обсудить задачу ${icon("arrow")}</a></article>`).join("")}</div>
    </div>
  </section>`;

const parameters = `
  <section class="section section--dark" id="parameters">
    <div class="container parameter-layout">
      <div class="section-heading"><p class="eyebrow">${esc(page.parameters.kicker)}</p><h2>${esc(page.parameters.title)}</h2><p>${esc(page.parameters.lead)}</p>${button("Получить консультацию")}</div>
      <div class="parameter-grid">${page.parameters.items.map(([title, text], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`).join("")}</div>
    </div>
  </section>`;

const production = `
  <section class="section" id="production">
    <div class="container production-layout">
      <div class="photo-placeholder">
        <span class="photo-placeholder__label">Фото заказчика</span>
        <div class="photo-placeholder__lines"></div>
        <strong>${esc(common.production.imageLabel)}</strong>
        <small>Не используйте стоковое изображение</small>
      </div>
      <div class="production-content">
        <p class="eyebrow">${esc(common.production.kicker)}</p>
        <h2>${esc(common.production.title)}</h2>
        <p>${esc(common.production.text)}</p>
        <ol>${common.production.steps.map((step) => `<li><span>${icon("check")}</span>${esc(step)}</li>`).join("")}</ol>
      </div>
    </div>
  </section>`;

const custom = `
  <section class="section section--accent" id="solutions">
    <div class="container custom-layout">
      <div><p class="eyebrow">${esc(page.custom.kicker)}</p><h2>${esc(page.custom.title)}</h2><p>${esc(page.custom.text)}</p>${button(page.custom.cta)}</div>
      <ul>${page.custom.items.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${esc(item)}</li>`).join("")}</ul>
    </div>
  </section>`;

const advantages = `
  <section class="section">
    <div class="container">
      <div class="section-heading section-heading--split"><div><p class="eyebrow">Почему с нами удобно работать</p><h2>Инженерный подход без лишней неопределенности</h2></div><p>Фиксируем исходные данные, состав решения и результат каждого этапа.</p></div>
      <div class="advantage-grid">${page.advantages.map(([title, text], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>
    </div>
  </section>`;

const workflow = `
  <section class="section section--soft">
    <div class="container">
      <div class="section-heading"><p class="eyebrow">Этапы работы</p><h2>Понятный путь от задачи до оборудования</h2></div>
      <ol class="workflow">${page.workflow.map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${esc(step)}</p></li>`).join("")}</ol>
    </div>
  </section>`;

const cases = `
  <section class="section" id="cases">
    <div class="container">
      <div class="section-heading section-heading--split"><div><p class="eyebrow">Кейсы</p><h2>Покажите решение через задачу и результат</h2></div><p>Ниже подготовлены карточки-структуры. Перед публикацией замените их подтвержденными проектами и реальными фотографиями.</p></div>
      <div class="case-grid">${page.cases.map(([title, text, tags], index) => `<article class="case-card"><div class="case-card__visual"><span>Кейс ${String(index + 1).padStart(2, "0")}</span><div></div><small>Добавить фото проекта</small></div><div class="case-card__body"><h3>${esc(title)}</h3><p>${esc(text)}</p><ul>${tags.map((tag) => `<li>${esc(tag)}</li>`).join("")}</ul></div></article>`).join("")}</div>
    </div>
  </section>`;

const documents = `
  <section class="section section--dark">
    <div class="container documents-layout">
      <div class="section-heading"><p class="eyebrow">Комплектность</p><h2>Документы для эксплуатации и приемки</h2><p>Фактический комплект согласуется для конкретного изделия и проекта.</p></div>
      <div class="document-list">${common.documents.map(([title, text]) => `<article>${icon("file")}<div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></article>`).join("")}</div>
    </div>
  </section>`;

const faq = `
  <section class="section" id="faq">
    <div class="container faq-layout">
      <div class="section-heading"><p class="eyebrow">FAQ</p><h2>Частые вопросы</h2><p>Не нашли нужного ответа? Отправьте параметры или описание задачи.</p>${button("Задать вопрос")}</div>
      <div class="faq-list">${page.faq.map(([question, answer], index) => `<details${index === 0 ? " open" : ""}><summary><span>${esc(question)}</span><i></i></summary><p>${esc(answer)}</p></details>`).join("")}</div>
    </div>
  </section>`;

const contact = `
  <section class="section contact-section" id="contact">
    <div class="container contact-layout">
      <div class="contact-copy">
        <p class="eyebrow">Обсудить проект</p>
        <h2>${esc(page.contact.title)}</h2>
        <p>${esc(page.contact.text)}</p>
        <div class="contact-details">
          <a href="${esc(config.phoneHref || "#")}"><span>Телефон</span><strong>${esc(config.phone)}</strong></a>
          <a href="mailto:${esc(config.email)}"><span>Email</span><strong>${esc(config.email)}</strong></a>
          <div><span>Производство</span><strong>${esc(config.address)}</strong></div>
        </div>
      </div>
      <form class="lead-form" enctype="multipart/form-data" novalidate>
        <div class="form-row"><label>Имя<input name="name" autocomplete="name" placeholder="Как к вам обращаться" required></label><label>Телефон<input name="phone" type="tel" autocomplete="tel" placeholder="+7 (___) ___-__-__" required></label></div>
        <label>Email<input name="email" type="email" autocomplete="email" placeholder="name@company.ru"></label>
        <label>Опишите задачу<textarea name="message" rows="4" placeholder="Назначение, параметры, сроки и другие исходные данные"></textarea></label>
        <label class="file-field">${icon("upload")}<span><strong>${esc(page.contact.file)}</strong><small data-file-name>PDF, DOCX, XLSX, JPG, PNG — до 20 МБ</small></span><input name="attachment" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"></label>
        <label class="consent"><input name="consent" type="checkbox" required><span>Согласен на обработку персональных данных</span></label>
        <button class="button button--submit" type="submit">Отправить заявку ${icon("arrow")}</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>`;

const footer = `
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <a class="brand brand--footer" href="../"><span class="brand__mark">H</span><span><strong>${esc(config.companyName)}</strong><small>Инженерные гидросистемы</small></span></a>
      <div><span>Направления</span><a href="../test-stands/">Испытательные стенды</a><a href="../hydraulic-stations/">Гидростанции</a><a href="../hydraulic-cylinders/">Гидроцилиндры</a></div>
      <div><span>Контакты</span><a href="${esc(config.phoneHref || "#contact")}">${esc(config.phone)}</a><a href="mailto:${esc(config.email)}">${esc(config.email)}</a></div>
      <p>© ${new Date().getFullYear()} ${esc(config.companyName)}<br>Информация на сайте не является публичной офертой.</p>
    </div>
  </footer>`;

document.querySelector("#app").innerHTML = `${header}<main>${hero}${proof}${products}${parameters}${production}${custom}${advantages}${workflow}${cases}${documents}${faq}${contact}</main>${footer}`;

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

document.querySelectorAll('.site-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const label = document.querySelector("[data-file-name]");
  if (!file) return;
  if (file.size > 20 * 1024 * 1024) {
    fileInput.value = "";
    label.textContent = "Файл превышает лимит 20 МБ";
    return;
  }
  label.textContent = file.name;
});

const form = document.querySelector(".lead-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = form.querySelector(".form-status");
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = "Заполните обязательные поля.";
    return;
  }
  if (!config.formEndpoint) {
    status.textContent = "Форма готова. Укажите formEndpoint в config.js для отправки в CRM или на сервер.";
    return;
  }
  const submit = form.querySelector('button[type="submit"]');
  submit.disabled = true;
  status.textContent = "Отправляем…";
  try {
    const response = await fetch(config.formEndpoint, { method: "POST", body: new FormData(form) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.reset();
    document.querySelector("[data-file-name]").textContent = "PDF, DOCX, XLSX, JPG, PNG — до 20 МБ";
    status.textContent = "Заявка отправлена. Мы свяжемся с вами.";
  } catch {
    status.textContent = "Не удалось отправить заявку. Позвоните или напишите нам по email.";
  } finally {
    submit.disabled = false;
  }
});
