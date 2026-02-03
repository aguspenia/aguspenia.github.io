// Menu responsive
const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Cerrar menú al hacer click en un link (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Año en footer
document.getElementById("year").textContent = new Date().getFullYear();

// UX de formulario (para Formspree u otro endpoint)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", async (e) => {
    // Si querés envío tradicional, borrá todo este handler.
    e.preventDefault();

    note.textContent = "Enviando…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        note.textContent = "Listo. Te respondemos a la brevedad ✅";
      } else {
        note.textContent = "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.";
      }
    } catch {
      note.textContent = "Error de red. Probá de nuevo o escribinos por WhatsApp.";
    }
  });
}
