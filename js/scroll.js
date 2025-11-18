class ScrollObserver{
  constructor(els,cb,options){
    this.els = document.querySelectorAll(els);
    this.cb = cb;
    const defaultOptions = {
        root: null,
        rootMargin: "-120px"
    }
    this.options = Object.assign(defaultOptions,options);
    this._init();
  }
  _init() {
    const observer = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                this.cb(entry.target, true);
                observer.unobserve(entry.target);
            } else {
                this.cb(entry.target, false);
            }
        });
    },this.options);
    this.els.forEach(el => observer.observe(el));
  }
}