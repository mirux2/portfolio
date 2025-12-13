class floatAnimation {
  constructor(el) {
    if (el instanceof HTMLElement) {
      this.el = el;
    } else {
      this.el = document.querySelector(el);
    }
    const els = this.el.querySelectorAll("p, div, ul,li");
    this.els = els;
  }
  animate() {
    this.el.classList.add("inview");
    gsap.fromTo(
      this.els,
      { y: "30%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      this.el,
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
  }
}
