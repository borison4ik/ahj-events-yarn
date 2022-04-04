import './index.scss';

export default class Popup {
  constructor(options) {
    this.options = options;
    this.backgroundElement = document.createElement('div');
    this.backgroundElement.classList.add('dark-background');
    this.popupBodyElement = document.createElement('div');
    this.popupBodyElement.classList.add('popup-body');
    this.popupBodyElement.textContent = options?.text || 'Game Over';
    this.button = document.createElement('button');
    this.button.classList.add('popup-button');
    this.button.textContent = options?.text || 'Restart';
    this.button.addEventListener('click', this.click.bind(this));
    this.popupBodyElement.appendChild(this.button);
    this.backgroundElement.appendChild(this.popupBodyElement);
  }

  init() {
    return this.backgroundElement;
  }

  show() {
    this.backgroundElement.classList.add('shown');
  }

  hide() {
    if(this.backgroundElement.classList.contains('shown')) {
      this.backgroundElement.classList.remove('shown');
    }
  }

  click() {
    this.hide();
    document.dispatchEvent(new CustomEvent('CLICK_POPUP'));
  }
}
