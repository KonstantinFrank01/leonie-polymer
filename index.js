import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `leonie-polymer`
 * polymer website leonie
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LeoniePolymer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'leonie-polymer',
      },
    };
  }
}

window.customElements.define('leonie-polymer', LeoniePolymer);
