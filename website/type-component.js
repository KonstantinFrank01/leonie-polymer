import { LitElement, html, css } from "lit-element";

class TypeffectComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="type.css" />
      <div id="type">
        <p class="line-1 anim-typewriter1">Hallo, mein Name ist Leonie!</p>
        <p class="line-2 anim-typewriter2">
          Ich bin ein digitaler Spracherkennungs-Avatar
        </p>
        <p class="line-3 anim-typewriter3">und wurde von den Schülern</p>
        <p class="line-4 anim-typewriter4">der HTl Leonding entwickelt.</p>
      </div>
    `;
  }
}

customElements.define("typeffect-component", TypeffectComponent);
