import { LitElement, html } from 'lit-element';
import Fontawesome from 'lit-fontawesome';
// import "@dotlottie/player-component";
// import "@lottiefiles/lottie-player";
import { colourfulChangesStyles } from '../colourfulChangesLit.styles.js';

export class collapsibleItem extends LitElement {
  static get properties() {
    return {
      _isOpen: { type: Boolean },
      _content: { type: String },
      _animation: { type: String },
    };
  }

  constructor(props) {
    super(props);
    this._isOpen = false;
    this._animation = 'plus';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return [Fontawesome, colourfulChangesStyles];
  }

  render() {
    // return html`${this._isOpen ? this.open() : this.close()}`;
    // return html`<div class="animationConatainer">
    //
    //               <lottie-player
    //                 autoplay
    //                 controls
    //                 loop
    //                 mode="normal"
    //                 src=${`../../assets/images/${this.animation}.json`}
    //                 style="width: 320px"
    //               >
    //               </lottie-player>
    //             </div>
    //             <section>${this._content}</section>`;
  }

  toggleState() {
    this._isOpen = !this._isOpen;
    if (this._isOpen) {
      this.animation = 'minus';
    } else {
      this.animation = 'plus';
    }
  }

  open() {
    // return html`<fa-icon
    //   @click=${this.toggleState}
    //   class="fas fa-plus-square"
    // ></fa-icon>`;

    return html`<div class="plus-gif" @click=${this.toggleState}></div>`;
  }

  close() {
    // return html`<fa-icon
    //   @click=${this.toggleState}
    //   class="fas fa-minus-square"
    // ></fa-icon>`;
    return html`<div class="minus-gif" @click=${this.toggleState}></div>`;
  }
}
