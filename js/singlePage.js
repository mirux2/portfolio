class SinglePage {
  constructor(els,id,btn){
    this.cards = document.querySelectorAll(els);
    this.modal = document.querySelector(id);
    this.closeBtn = document.querySelector(btn);
    this._clickEvent();
  }
  _clickEvent(){
    cards.forEach(card => {
      card.addEventListener("click", async () => {
        const url = card.dataset.detail;
        
        const res = await fetch(url);
        const html = await res.text();
        detailArea.innerHTML = html;
        this.modal.style.display = "flex";
      })
    });
  }
}