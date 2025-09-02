document.addEventListener("DOMContentLoaded",function(){

  // ハンバーガーメニュー制御
  const menuToggle = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ヒーロースライダー制御
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }
  });
  
  //タイトルアニメーション制御
  const animation = new TextAnimation(".title");
  animation.animate();
});