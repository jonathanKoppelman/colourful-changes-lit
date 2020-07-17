import { LitElement, html } from 'lit-element';

export class collapsibleItem extends LitElement {
  static get properties() {
    return {
      _isOpen: { type: Boolean },
      _content: { type: String },
    };
  }

  constructor(props) {
    super(props);
    this._isOpen = false;
  }
  // TODO: structure ->

  render() {
    return html`${this._isOpen ? this.open(): this.close() }`;
  }

  toggleState() {
    this._isOpen = !this._isOpen;
  }

  open() {
    return html`<fa-icon @click = ${this.toggleState} class="fas fa-plus-square"></fa-icon>`;
  }

  close(){
    return html`<fa-icon @click = ${this.toggleState} class="fas fa-minus-square"></fa-icon>`;
  }
}