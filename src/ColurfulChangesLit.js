import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';
import Fontawesome from 'lit-fontawesome';
import {
  aboutTemplate,
  mapTemplate,
  cookingClubTemplate,
  groupTemplate,
} from './pages.template.js';
import { colourfulChangesStyles } from './colourfulChangesLit.styles.js';

export class ColurfulChangesLit extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      lang: { type: String },
    };
  }

  constructor(props) {
    super(props);
    this.page = 'about';
    this.lang = 'NL';
  }

  static get styles() {
    return [Fontawesome, colourfulChangesStyles];
  }

  static get localizeNamespaces() {
    const getTranslations = locale => {
      // This verbose and explicit notation is unfortunately required for Polymer build, that
      // doesn't handle dynamic strings as imports
      // Once switched to Webpack, wildcard imports can be used with some build support.
      switch (locale) {
        case 'en':
        case 'en-GB':
          return import('../assets/translations/en-GB.js');
        case 'nl':
        case 'nl-NL':
        case 'nl-BE':
        default:
          return import('../assets/translations/nl-NL.js');
      }
    };

    return [
      {
        'colourful-changes': getTranslations,
      },
      ...super.localizeNamespaces,
    ];
  }

  render() {
    return html`
      <main>
        <nav>
          <ul class="flex-container">
            <li
              class="nav"
              style="background-color: grey "
              id="about"
              @click=${this.changePageContent}
            >
              <fa-icon class="fas fa-info-circle"></fa-icon>
            </li>
            <li class="nav" id="groups" @click=${this.changePageContent}>
              <fa-icon class="fas fa-users"></fa-icon>
            </li>
            <li class="nav" id="cookingClub" @click=${this.changePageContent}>
              <fa-icon class="fas fa-utensils"></fa-icon>
            </li>
            <li class="nav" id="location" @click=${this.changePageContent}>
              <fa-icon class="fas fa-map-marker"></fa-icon>
            </li>
            <li class="nav">
              <a href="tel:+31618915811"
                ><fa-icon class="fas fa-phone"></fa-icon
              ></a>
            </li>
            <li class="nav">
              <a href="mailto:info@colourful-changes.nl"
                ><fa-icon class="fas fa-envelope"></fa-icon
              ></a>
            </li>
            <li class="nav" id="lang" @click=${this.changeLanguage}>
              <p class="nav-text">${this.lang}</p>
              <img class="country-icon" src="../assets/images/NL.png" />
            </li>
          </ul>
        </nav>
        <div class="banner-wrap">
          ${this.page === 'about'
            ? html`<p class="banner-welcome">
                ${this.msgLit(`colourful-changes:BANNER_WELCOME`)}
              </p>`
            : html``}
          <p class="banner-text">
            ${this.msgLit(`colourful-changes:BANNER_${this.page}`)}
          </p>
        </div>
        ${this.renderPageContent()}
      </main>

      <section class="app-footer">
        <a href="tel:+31618915811" class="footer-text"
          ><fa-icon class="fas fa-phone"></fa-icon>+31618915811</a
        >
        <a href="mailto:info@colourful-changes.nl" class="footer-text"
          ><fa-icon class="fas fa-envelope"></fa-icon
          >info@colourful-changes.nl</a
        >
        <a href="javascript:void(0);" class="footer-text"
          ><fa-icon class="fas fa-map-marker"></fa-icon>Gondel 27 41 8243CP</a
        >
      </section>
    `;
  }

  renderPageContent() {
    const handlers = {
      viewChanged: this.changePageContent,
      translate: this.msgLit.bind(this),
    };

    switch (this.page) {
      case 'about':
        return aboutTemplate(handlers);
      case 'groups':
        return groupTemplate();
      case 'cookingClub':
        return cookingClubTemplate();
      case 'location':
        return mapTemplate();
      default:
        return html`<img src="../assets/images/wood.png" />`;
    }
  }

  changePageContent(ev) {
    if (ev.currentTarget && ev.currentTarget.id) {
      this.page = ev.currentTarget.id;
      this.makeNavItemActive(ev.currentTarget);
    } else {
      this.page = 'about';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  changeLanguage() {
    const page = document.querySelector('html');
    const countryIcon = this.get('.country-icon');
    if (page.lang === 'en') {
      page.lang = 'nl';
      this.lang = 'NL';
      countryIcon.setAttribute('src', '../assets/images/NL.png');
      return;
    }
    page.lang = 'en';
    this.lang = 'EN';
    countryIcon.setAttribute('src', '../assets/images/EN.png');
  }

  makeNavItemActive(element) {
    const elementId = element.id;
    const navItems = this.getAll('li.nav');
    navItems.forEach(item => {
      if (item.id === elementId) {
        item.setAttribute('style', 'background-color:grey');
      } else {
        item.setAttribute('style', '');
      }
    });
  }

  getAll(selector) {
    return this.shadowRoot.querySelectorAll(selector);
  }

  get(selector) {
    return this.shadowRoot.querySelector(selector);
  }
}
