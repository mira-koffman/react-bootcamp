class LightBulb {
    constructor(div) {
        this.panel = div;
        this.bulbOn = false;
        div.addEventListener('click', this.handleClick);
    }

    handleClick = () => {
        this.bulbOn ? this.off() : this.on();
        this.bulbOn = !this.bulbOn;

    }

    on = () => {
        this.panel.style.color = "yellow";
    }

    off = () => {
        this.panel.style.removeProperty("color");
    }
}

const section1 = new LightBulb(document.querySelector(".section1"));
const section2 = new LightBulb(document.querySelector(".section2"));