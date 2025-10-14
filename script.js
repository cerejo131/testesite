// script.js — efeitos profissionais e UX aprimorada

// ===== CABEÇALHO DINÂMICO =====
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;
  if (current > lastScroll && current > 80) {
    header.style.transform = "translateY(-100%)"; // esconde o header
  } else {
    header.style.transform = "translateY(0)"; // mostra o header
  }
  lastScroll = current;
});

// ===== NAVEGAÇÃO SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== DESTAQUE DE SEÇÃO ATIVA NO MENU =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

function highlightSection() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`nav ul li a[href*=${id}]`)?.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightSection);

// ===== ANIMAÇÕES AO ROLAR =====
const animatedItems = document.querySelectorAll(".animate");

function showOnScroll() {
  const windowHeight = window.innerHeight;
  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// ===== FEEDBACK DE FORMULÁRIO =====
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  if (!name || !email || !msg) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  e.target.reset();
}
