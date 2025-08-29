// ハンバーガーメニュー制御
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ヒーロースライダー制御
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  }
});