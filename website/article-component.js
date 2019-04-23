import { LitElement, html, css } from "lit-element";

class ArticleComponent extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="article.css" />

      <div id="box">
        <div id = "overlay1"><div class ="excerptHeader"><span>Schlossmuseum: Blick in technologische Zukunft</span></div><br><div class="excerptText"><span>Die Besucher lernen Leonie kennen - eine Sprachassistentin, die neben einer Stimme auch einen digitalen Körper hat. Leonie kann nicht nur auf Kommando tanzen, sondern auch Fragen beantworten, etwa über die technologischen Innovationen, die auf uns zukommen, erklärt der Maturant Karsten Köhne. In der HTL Leonding wurde Leonie von Schülern entwickelt.</span></div><a href="https://ooe.orf.at/news/stories/2957975/?fbclid=IwAR1woeeBFuToOVibSdHlwoRkSXZEZcKXG6wphbcmq9WR9W-F9zebeUEeqo4" class="button">Artikel lesen</a></div>
        <div id="article1"><img src = "images/code.jpeg"><div id ="white1"><span class="title">Blick in technologische Zukunft</span><br><span class = "summary">Die Besucher lernen Leonie kennen - eine Sprachassistentin, die neben einer Stimme auch einen digitalen Körper hat.</span></div></img></div>

        <div id = "overlay2"><div class ="excerptHeader"><span>Neues aus der Zukunft</span></div><div class ="excerptText"><span>Alexa und Siri kennen Sie vermutlich. Aber kennen Sie auch Leonie? Die Oö. Zukunftsakademie, ein Think Tank der Oö. Landesregierung, blickt in die Zukunft und stellt im Innovationseck der Dauerausstellung „Technik Oberösterreich“ technologische Entwicklungen der nächsten Jahre, Jahrzehnte, vielleicht auch Jahrhunderte vor.</span></div><a href="http://www.landesmuseum.at/de/ausstellungen/detail/techvisionen-neues-aus-der-zukunft.html" class="button">Artikel lesen</a></div><div id="article2"><img src = "images/girl.jpeg"><div id ="white2"><span class="title">Neues aus der Zukunft</span><br><span class = "summary">Alexa und Siri kennen Sie vermutlich. Aber kennen Sie auch Leonie?</span></div></img></div>
        
        <div id = "overlay3"><div class ="excerptHeader"><span>Welt der Zukunft</span></div><div class ="excerptText"><span>3D-Avatare, ein Gehirn-Computer-Interface, humanoide Roboter, Ganzkörperscanner – die Sonderschau Tech Visionen – Neues aus der Zukunf gibt seit Mittwoch im Linzer Schlossmuseum einen Ausblick auf künftige technologische Entwicklungen. Die in Kooperation mit der Zukunftsakademie – dem Thinktank der Landesregierung – entstandene Schau läuft bis 31. März. Zu sehen ist sie im Innovationseck der Dauerausstellung Technik Oberösterreich.</span></div><a href="https://www.nachrichten.at/nachrichten/kultur/das-schlossmuseum-wirft-einen-blick-in-die-welt-der-zukunft;art16,3090778" class="button">Artikel lesen</a></div><div id="article3"><img src = "images/meeting.jpeg"><div id ="white3"><span class="title">Schlossmuseum wirft einen Blick in die Welt der Zukunft</span><br><span class = "summary">Die neue Sonderausstellung Tech Visionen - Neues aus der Zukunft ist bis 31. März im Innovationseck zu sehen</span></div></img></div>
        
        <div id = "overlay4"><div class ="excerptHeader"><span>TechVisionen – Neues aus der Zukunft</span></div><div class ="excerptText"><span>Der Avatar Leonie als 3D-Hologramm der HTL Leonding wurde für die Ausstellung trainiert, Fragen zu aktuellen Studien der Zukunftsakademie zu beantworten. Eine Sonderschau TechVisionen – Neues aus der Zukunft gibt seit Mittwoch im Bereich der Technik-Dauerausstellung im Linzer Schlossmuseum einen Ausblick auf künftige Technologien.</span></div><a href="https://derstandard.at/2000095788518/Neues-aus-der-Zukunft-im-Linzer-Schlossmuseum" class="button">Artikel lesen</a></div><div id="article4"><img src = "images/pupils.jpeg"><div id ="white4"><span class="title">TechVisionen - Neues aus der Zukunft</span><br><span class = "summary">Eine Sonderschau TechVisionen – Neues aus der Zukunft</span></div></img></div>
      </div>
    `;
  }
}

customElements.define("article-component", ArticleComponent);
