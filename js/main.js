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
  //スクロールオブザーバー制御
  const ta = (el,isIntersecting) => {
    if(isIntersecting){
      const title = new TextAnimation(el);
      title.animate();
    }
  }
  const fa = (el,isIntersecting) => {
    if(isIntersecting){
      const float = new floatAnimation(el);
      float.animate();
    }
  }
  const titleobserver = new ScrollObserver(".title",ta);
  const floatobserver = new ScrollObserver(".info",fa);

  //SPA
  const spa = new SinglePage(".work-cards","#modal","close-btn");

});