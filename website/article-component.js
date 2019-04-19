import { LitElement, html, css } from "lit-element";

class ArticleComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="article.css" />

      <div id="box">
        <div id="article1"></div>
        <div id="article2"></div>
        <div id="article3"></div>
        <div id="article4"></div>
      </div>
    `;
  }
}

customElements.define("article-component", ArticleComponent);
