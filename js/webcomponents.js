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
    const img = this.getAttribute("img");
    const description = this.getAttribute("description");

    console.log(live, git);

    this.innerHTML = `
        <sl-card>
        <h2 slot="header">${name}</h2>
        <img src=${img} alt=${name} slot="image">
        <sl-button-group slot="footer">
        <a href=${git}><sl-button>Git</sl-button></a>
        <a href=${live}><sl-button>Live</sl-button></a>
        <p>${description}</p>
        </sl-button-group>
        </sl-card>
        `;
  }
}

///////////////////////////////
// Register the HTML Tag
///////////////////////////////

customElements.define("my-card", MyCard);
