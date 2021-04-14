// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class MyCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git");
        const live = this.getAttribute("live");
        const image = this.getAttribute("image");

        console.log(name, git, live, image)
    }
}



///////////////////////////////
// Register the HTML Tag
///////////////////////////////

customElements.define("my-card", MyCard)