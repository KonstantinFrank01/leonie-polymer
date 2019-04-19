import { LitElement, html, css } from "lit-element";

class FooterComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="footer.css" />
      <div id="footerbox">
        <div id="social-media">
          <ul class="social-icons">
            <li>
              <a href="mailto:t.stuetz@htl-leonding.ac.at"
                ><img src="icons/Mail.png"
              /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/htlleonding/"
                ><img src="icons/Facebook.png"
              /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC5zrWVUTmjnWqdl-2Dt0DVg"
                ><img src="icons/Youtube.png"
              /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/htlleonding/"
                ><img src="icons/Instagram.png"
              /></a>
            </li>
          </ul>
        </div>
        <div id="htl">
          2019 HTL Leonding: <a href="htl-leonding.at">htl-leonding.ac.at</a>
        </div>
      </div>
      </div>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
