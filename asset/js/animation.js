class TextAnimation {
  constructor(el){
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
    this.chars = this.el.querySelectorAll(".char");
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate(){
    this.el.classList.add('inview');
      this.chars.forEach((c, i) => {
        gsap.fromTo(c,
    { y: "-100%", opacity: 0 },
    {
      y: "0%", opacity: 1,
      duration: 0.6,
      ease: "Back.easeOut",
      delay: i * .025
    }
  );
      });
  }
}