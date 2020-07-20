import { html } from 'lit-element';
import './components/collapsible-item.js';
// import { localize } from '@lion/localize';
const isaPowerLink = 'https://www.isapower.nl';
// language=HTML
export const aboutTemplate = handlers => html`<p class="text">
    ${handlers.translate('colourful-changes:ABOUT_LIST')}
  </p>
  <li class="text text-li" id="groups" @click=${handlers.viewChanged}>
    <fa-icon class="fas fa-users"> </fa-icon> ${handlers.translate(
      'colourful-changes:ABOUT_LIST_ITEM_1'
    )}
  </li>
  <li class="text text-li" id="groups" @click=${handlers.viewChanged}>
    <fa-icon class="fas fa-users"> </fa-icon> ${handlers.translate(
      'colourful-changes:ABOUT_LIST_ITEM_2'
    )}
  </li>
  <li class="text text-li" id="groups" @click=${handlers.viewChanged}>
    <fa-icon class="fas fa-users"></fa-icon> ${handlers.translate(
      'colourful-changes:ABOUT_LIST_ITEM_3'
    )}
  </li>
  <li class="text text-li" id="groups" @click=${handlers.viewChanged}>
    <fa-icon class="fas fa-users"></fa-icon> ${handlers.translate(
      'colourful-changes:ABOUT_LIST_ITEM_4'
    )}
  </li>
  <li class="text text-li" id="cookingClub" @click=${handlers.viewChanged}>
    <fa-icon class="fas fa-utensils"></fa-icon> ${handlers.translate(
      'colourful-changes:ABOUT_LIST_ITEM_5'
    )}
  </li>

  <section class="second-section-container margin-container">
    <div class="image-left"></div>
    <div class="card-wrapper">
      <p>${handlers.translate('colourful-changes:ABOUT_HEADER')}:</p>
      <p class="text text-wrap">
        ${handlers.translate('colourful-changes:ABOUT_TEXT')}
        <a class="text" href=${isaPowerLink} target="_blank">ISAPower</a>
      </p>
    </div>
  </section>`;

export const groupTemplate = () => html` <section class="groups"></section> `;

export const mapTemplate = () =>
  html`<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1901009376024!2d5.452732216131738!3d52.51189867981273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c626bf966defb1%3A0x25433fe2a6b63e7a!2sGondel%2027%2041%2C%208243%20CP%20Lelystad!5e0!3m2!1sen!2snl!4v1594140870878!5m2!1sen!2snl"
    width="600"
    height="450"
    frameborder="0"
    style="border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>`;

export const cookingClubTemplate = () => html`
  <section class="margin-container">
    <h1>
      <div class="image-icon"></div>
      Wat is de Colourful Changes Cooking Club?
    </h1>

    <div class="second-section-container">
      <div class="image-right"></div>

      <p class="text text-wrap">
        De Colourful Changes Cooking Club is opgezet vanuit de visie dat het
        eten en de eetmomenten voor ieder kind fijn en gezellig dienen te zijn.
        De Colourful Changes Cooking Club is een kookclub, waar kinderen in
        groepsverband, meer leren over koken, eten en de essentie van eten. Een
        keer per week wordt er in huiselijke sfeer samen gekookt en gegeten.
        Naast het koken en eten wordt er op een speelse wijze ook meer verteld
        over verschillende producten en het belang van voeding. Het leer- en
        ontdekproces wordt door middel van thuisopdrachten voortgezet. Tijdens
        deze thuisopdrachten worden zowel kind als ouders/verzorgers uitgedaagd.
        Samen aan de slag, met leuke opdrachten. Zo wordt de impact op de
        huidige eetgewoonte nog groter!
        <br />
        <strong
          >> voor ouders is het ook mogelijk om extra begeleiding te
          ontvangen.</strong
        >
        <br />
        Het doel van de Colourful Changes Cooking Club is het eten en het
        eetmoment weer leuk en gezellig maken en ervoor zorgen dat het kind
        kennis maakt met verschillende smaken en structuren wat bijdraagt aan
        een uitgebreider en gezonder eetpatroon.
        <br />
      </p>
    </div>

    <div class="second-section-container">
      <div class="image-left"></div>

      <h2>Waarom de Colourful Changes Cooking Club?</h2>
      <p class="text text-wrap">
        Het ontdekken van verschillende smaken en texturen, draagt bij aan een
        gevarieerd voedingspatroon. Door op jonge leeftijd kennis te maken met
        verschillende soorten voedsel is de kans groter dat het kind ook op
        latere leeftijd een gevarieerder voedingspatroon krijgt. Een gevarieerd
        voedingspatroon is van belang voor het binnenkrijgen van voldoende
        voedingsstoffen. Voldoende voedingsstoffen zijn van essentieel belang
        voor het uitvoeren van alle levensprocessen. Er zijn rond de vijftig
        voedingsstoffen zoals: eiwitten (aminozuren), vetten, koolhydraten
        (zetmeel en suikers) en een groot aantal vitamines en mineralen, welke
        het lichaam niet of onvoldoende zelf kan aanmaken, deze dienen daarom
        uit voeding gehaald te worden (Voedingscentrum, z.d.).
      </p>
      <strong class="text"
        >Kinderen met een leeftijd van 4 tot 12 jaar zijn niet altijd de beste
        en gemakkelijkste eters.
      </strong>
      <p class="text">De Colourful Changes Cooking Club helpt!</p>
      <p class="text">
        Eten is leuk, gezellig, sociaal en essentieel. Een betere sfeer nodigt
        kind uit tot meer en gevarieerder te eten. Daarbij is de kans groter dat
        kinderen iets proeven en iets opeten wanneer zij zelf hebben meegeholpen
        bij het maken van het gerecht. Door zelf in de keuken van Colourful
        Changes Cooking Club te gaan staan, en hier te snijden, bakken, kneden
        en creëren wordt het kind uitgedaagd om nieuwe dingen te leren. Kinderen
        krijgen meer zelfvertrouwen in de keuken en in het eten zelf. Dit
        bevorderd de eetlust, het ontdekken van: smaken en structuren en een
        uitgebreider voedingspatroon in dagelijks leven. Wat bijdraagt aan een
        meer gevarieerd voedingspatroon en het binnen krijgen van meer
        essentiële voedingsstoffen. De Colourful Changes Cooking Club is uniek,
        leerzaam, effectief en vooral heel erg leuk voor kind en gezin!
      </p>
    </div>

    <div class="second-section-container">
      <div class="image-right"></div>

      <h2>Kosten</h2>
      <p class="text">
        De kosten bedragen 135 euro. Wat krijg je?
        <br />
      </p>

      <ul class="text">
        <li>
          6 bijeenkomsten van 1,5 uur
        </li>

        <li>
          6 keer een avondmaaltijd en wat te drinken
        </li>

        <li>
          Een Cooking Club Kit met:
          <ul>
            <li>
              Cooking Club Thuisopdrachten boek met 12 opdrachten
            </li>
            <li>
              Stiften
            </li>
            <li>
              Lijm
            </li>
            <li>
              Leeg notieboekje
            </li>
            <li>
              Uitdagingen mini boekje
            </li>
            <li>
              Kookschortje
            </li>
          </ul>
        </li>
      </ul>
      <p class="text">
        Ook ouders kunnen ter ondersteuning bij het Coulorful Changes Cooking
        Club programma, een coachingsessie inplannen. Ouders van deelnemende
        kinderen ontvangen eenmalig 10,- euro korting op een coachinggesprek.
      </p>
      <p class="text">
        Speciale dieetwensen of allergieën graag doorgeven.
      </p>
    </div>
  </section>
`;
