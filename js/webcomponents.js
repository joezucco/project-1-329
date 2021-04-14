// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class MyCard extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute("name");
    const git = this.getAttribute("git");
    const live = this.getAttribute("live");
    const img = this.getAttribute("image");

    this.innerHTML = `
        <sl-card>
        <h1>${name}</h1>
        <img src=${img} alt=${name} slot="image">
        <sl-button-group>
        <a href=${git}><sl-button>Left</sl-button></a>
        <a href=${live}><sl-button>Right</sl-button></a>
        </sl-button-group>
        </slcard>
        `;
  }
}

///////////////////////////////
// Register the HTML Tag
///////////////////////////////

customElements.define("my-card", MyCard);
