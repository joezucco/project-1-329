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
        <div class="btn-grp btn-group-lg" role="group" slot="footer">
          <a href=${git}><button type="button" class="btn btn-secondary">Git</button></a>
          <a href=${live}><button type="button" class="btn btn-secondary">Live</button></a>
        </div>
        </sl-card>
        `;
  }
}

///////////////////////////////
// Register the HTML Tag
///////////////////////////////

customElements.define("my-card", MyCard);
