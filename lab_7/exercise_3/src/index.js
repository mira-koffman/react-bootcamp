class AutoBind {
    constructor() {
        this.inc = this.inc.bind(this);
    }

    inc() {
        console.log('this function gets overriden in the child class');
    }
}

class Counter extends AutoBind { 
    constructor(btn) {
      super();
      this.btn = btn;
      this.btn.textContent = '0';
      btn.addEventListener('click', this.inc);
    }
    
    inc() {
      this.btn.textContent++;
    }
  }
  
  const c = new Counter(document.querySelector('button'));