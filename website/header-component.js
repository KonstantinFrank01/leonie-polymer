import { LitElement, html, css } from "lit-element";

class HeadComponent extends LitElement {
  render() {
    return html`
    <div id = "header">
      <link rel="stylesheet" href="header.css">
      <a href = "#" id = "first">Contact</a>
      <a href = "#" id = "second">Articles</a>
      <img src = "images/heroImage.jpg"></img>
    </div>
    `;
  }
}

customElements.define("head-component", HeadComponent);
