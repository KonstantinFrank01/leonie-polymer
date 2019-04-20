import { LitElement, html, css } from "lit-element";

class ArticleComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="article.css" />

      <div id="box">
        <div id="article1"><img src = "images/code.jpeg"><div id ="white1"><span class="title">Blick in technologische Zukunft</span></div></img></div>
        <div id="article2"><img src = "images/girl.jpeg"><div id ="white2"><span class="title">Neues aus der Zukunft</span></div></img></div>
        <div id="article3"><img src = "images/meeting.jpeg"><div id ="white3"><span class="title">Schlossmuseum wirft einen Blick in die Welt der Zukunft</span></div></img></div>
        <div id="article4"><img src = "images/pupils.jpeg"><div id ="white4"><span class="title">TechVisionen - Neues aus der Zukunft</span></div></img></div>
      </div>
    `;
  }
}

customElements.define("article-component", ArticleComponent);
