// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#a855f7" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#a855f7",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    },
    modes: {
      repulse: { distance: 100 }
    }
  }
});


// FORM → WHATSAPP
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Vim pelo site da Anup Solutions.%0A
Nome: ${nome}%0A
Empresa: ${empresa}%0A
Serviço: ${servico}%0A
Mensagem: ${mensagem}`;

  const url = `https://wa.me/5511987293823?text=${texto}`;

  window.open(url, "_blank");
});


// FAQ
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// FECHAR AO CLICAR NOS LINKS
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// FECHAR CLICANDO FORA
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});