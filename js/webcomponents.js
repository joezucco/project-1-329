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

    console.log(name);

    this.innerHTML = `
        <sl-card class="card">
        <h2 slot="header">${name}</h2>
        <img src=${img} alt=${name} slot="image">
        <p class="card-text">${description}</p>
        <sl-button-group class="btn-grp" slot="footer">
          <a href=${git}><sl-button class="sl-btn">Git</sl-button></a>
          <a href=${live}><sl-button class="sl-btn">Live</sl-button></a>
        </sl-button-group>
        </sl-card>
        `;
  }
}

///////////////////////////////
// Register the HTML Tag
///////////////////////////////

customElements.define("my-card", MyCard);
