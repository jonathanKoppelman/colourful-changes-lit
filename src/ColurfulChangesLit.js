import { LitElement, html } from 'lit-element';
import { LocalizeMixin } from '@lion/localize';
import { aboutTemplate, mapTemplate, cookingClubTemplate } from './pages.template.js';
import { colourfulChangesStyles } from './colourfulChangesLit.styles.js';
import 'fa-icons';

export class ColurfulChangesLit extends LocalizeMixin(LitElement)  {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      lang: {type: String },
    };
  }

  constructor(props) {
    super(props);
    this.page = 'about';
    this.lang = 'NL';
  }

  static get styles() {
    return colourfulChangesStyles;
  }

  static get localizeNamespaces() {
    const getTranslations = (locale) => {
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
              <li class="nav" style="background-color: grey " id="about" @click = ${this.changePageContent} > <fa-icon class="fas info-circle"></fa-icon> </liclass>
              <li class="nav" id="groups" @click = ${this.changePageContent} > <fa-icon class="fas fa-users"></fa-icon></li>
              <li class="nav" id="cookingClub" @click = ${this.changePageContent} > <fa-icon class="fas fa-utensils"></fa-icon></li>
              <li class="nav" id="location" @click = ${this.changePageContent} > <fa-icon class="fas fa-map-marker"></fa-icon></li>
              <li class="nav"><a href="tel:+31618915811"><fa-icon class="fas fa-phone"></fa-icon></a></li>
              <li class="nav"><a href="mailto:info@colourful-changes.nl"><fa-icon class="fas fa-envelope"></fa-icon></a></li>
              <li class="nav" id="lang" @click = ${this.changeLanguage} ><p class="text">${this.lang}</p></li>

           </ul>
        </nav>
        <p>${this.msgLit('colourful-changes:greetings')}</p>
        ${this.renderPageContent()}
      </main>

      <p class="app-footer">

      </p>
    `;
  }

  renderPageContent() {
    const handlers = {
      viewChanged: this.changePageContent,
      translate: this.msgLit.bind(this),
    }

    switch(this.page) {
      case 'about':
        return aboutTemplate(handlers);
      case 'groups':
        return html `
            <h1>groups</h1>
      `;
      case 'cookingClub':
        return cookingClubTemplate();
      case 'location':
        return mapTemplate();
      default:
        return html `<img src="../assets/images/wood.png">`
    }
  }

  changePageContent(ev) {
    if(ev.currentTarget && ev.currentTarget.id) {
      this.page = ev.currentTarget.id;
      this.makeNavItemActive(ev.currentTarget);
    } else {
      this.page = 'about';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  changeLanguage() {
    // TODO: add cookie/local storage lang and try to read it from there to know the users pref next time they visit
    const page = document.querySelector('html');
    if(page.lang === 'en') {
      page.lang = 'nl';
      this.lang = 'NL';
      return;
    }
    page.lang = 'en';
    this.lang = 'EN';
  }

  makeNavItemActive(element) {
    const elementId = element.id;
    const navItems = this.getAll('li.nav');
    navItems.forEach( item =>  {
      if(item.id === elementId) {
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
