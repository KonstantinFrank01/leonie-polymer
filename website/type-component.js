import { LitElement, html, css } from "lit-element";

class TypeffectComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="type.css" />
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
