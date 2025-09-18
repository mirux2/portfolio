class floatAnimation {
    constructor(el){
        if(el instanceof HTMLElement){
            this.el = el;
        }else {
            this.el = document.querySelector(el);
        }
    }
    animate(){
    this.el.classList.add('inview');
      gsap.fromTo(this.el,
    { y: "30%", opacity: 0 },
    {
      y: "0%", opacity: 1,
      duration: 0.7
    }
  );
  }
}