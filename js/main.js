document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニュー制御
  const header = document.querySelector(".jsHeader");
  const menuToggle = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");
  const cover = document.querySelector(".curtain");
  menuToggle.addEventListener("click", () => {
    header.classList.toggle("active");
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    cover.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      header.classList.remove("active");
      cover.classList.remove("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      header.classList.remove("active");
      cover.classList.remove("active");
    }
  });

  // ヒーロースライダー制御
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //タイトルアニメーション制御
  //スクロールオブザーバー制御
  const ta = (el, isIntersecting) => {
    if (isIntersecting) {
      const title = new TextAnimation(el);
      title.animate();
    }
  };
  const fa = (el, isIntersecting) => {
    if (isIntersecting) {
      const float = new floatAnimation(el);
      float.animate();
    }
  };
  const titleobserver = new ScrollObserver(".title", ta);
  const floatobserver = new ScrollObserver(".stagger", fa);
});
