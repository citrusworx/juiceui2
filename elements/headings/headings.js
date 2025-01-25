class H1Element extends HTMLElement {
  static get observedAttributes(){
    return ['condensed', 'bold', 'uppercase', 'lowercase', 'capitalize',
            'font-size', 'color', 'shadow', 'align', 'margin', 'padding', 'theme'];
  }

  connectedCallback(){

    if(this.hasAttribute("uppercase")){
      this.style.textTransform = "uppercase";
    }
    if(this.hasAttribute("bold")){
      this.style.fontWeight = '700';
    }
    if(this.hasAttribute("condensed")){
      this.style.letterSpacing = '-1.5px';
    }
  }

  attributeChangedCallback(name, value, oldValue){
          this.render();
  }
  render(){
      const h1FontSize = this.getAttribute('font-size') || '';
      const h1Color = this.getAttribute('color') || '';
      const h1Shadow = this.getAttribute('shadow') || '';
      const h1Class = this.getAttribute('class') || '';

      this.innerHTML = `
              <h1 class="${h1FontSize} ${h1Color} ${h1Shadow} ${h1Class}"></h1>
      `;
      }



}

customElements.define('h-1', H1Element);
