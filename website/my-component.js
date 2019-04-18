import { LitElement, html, css } from "lit-element";

class HeadComponent extends LitElement {
  static get styles() {
    return [
      css`
        img {
          margin: -8px;
          position: absolute;
          top: 5.5%;
          height: 780px;
          width: 1920px;
          z-index: -1;
        }

        #first {
          float: right;
          text-decoration: none;
          color: #007bff;
          font-size: 18px;
          font-family: "Segoe UI Emoji";
          position: absolute;
          right: 1%;
        }

        #second {
          float: right;
          text-decoration: none;
          color: #007bff;
          font-size: 18px;
          font-family: "Segoe UI Emoji";
          position: absolute;
          right: 7%;
        }

        #first:hover {
          text-decoration: underline;
        }

        #second:hover {
          text-decoration: underline;
        }
      `
    ];
  }

  render() {
    return html`
      <a href = "#" id = "first">Contact</a>
      <a href = "#" id = "second">Articles</a>
      <img src = "images/heroImage.jpg"></img>
    `;
  }
}

customElements.define("head-component", HeadComponent);

class TypeffectComponent extends LitElement {
  static get styles() {
    return [
      css`
        #firstLine {
          font-size: 40px;
          font-family: "Courier New", Courier, monospace;
          color: white;
        }

        p {
          font-family: "Courier New", Courier, monospace;
          font-size: 20px;
          color: white;
        }

        #type {
          position: absolute;
          top: 53%;
          left: 3%;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="type">
        <p id="firstLine">Hallo, mein Name ist Leonie!</p>

        <p>
          Ich bin ein digitaler Spracherkennungs-Avatar<br />
          und wurde von den Schülern<br />
          der HTl Leonding entwickelt.
        </p>
      </div>
    `;
  }
}

customElements.define("typeffect-component", TypeffectComponent);
