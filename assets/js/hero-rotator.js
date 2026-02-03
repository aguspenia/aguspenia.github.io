(function () {
  const images = [
    "assets/img/hero/01.jpg",
    "assets/img/hero/02.jpg",
    "assets/img/hero/03.jpg",
    "assets/img/hero/04.jpg",
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const order = shuffle(images);
  let idx = 0;

  const slideA = document.querySelector(".hero__slide--a");
  const slideB = document.querySelector(".hero__slide--b");

  if (!slideA || !slideB || order.length === 0) return;

  // Preload
  order.forEach((src) => { const img = new Image(); img.src = src; });

  // Init
  slideA.style.backgroundImage = `url("${order[idx]}")`;
  slideA.classList.add("is-visible");

  let showingA = true;

  function next() {
    idx = (idx + 1) % order.length;
    const src = order[idx];

    const show = showingA ? slideB : slideA;
    const hide = showingA ? slideA : slideB;

    show.style.backgroundImage = `url("${src}")`;
    show.classList.add("is-visible");
    hide.classList.remove("is-visible");

    showingA = !showingA;
  }

  // cada 6s
  setInterval(next, 6000);
})();
