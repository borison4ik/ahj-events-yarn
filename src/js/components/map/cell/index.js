import './index.scss';

export default class Cell {
  constructor(id) {
    this.id = id;
    this.active = false;
    this.element = document.createElement('div');
    this.element.classList.add('cell');
    this.element.dataset.id = this.id;
    this.element.addEventListener('click', this.onClickHandler.bind(this), false);
  }

  check() {
    if(this.active) {
      this.element.classList.add('active');
    } else {
      this.element.classList.remove('active');
      if(this.element.classList.contains('hited')) {
        this.element.classList.remove('hited');
      }
    }
  }

  init() {
    return this.element;
  }

  onClickHandler() {
    if(this.active) {
      this.element.classList.add('hited');
      setTimeout(() => {
        this.active = false;
        this.check();
      }, 500);
      document.dispatchEvent(new CustomEvent('GOAL', { detail: { id: this.id } }));
    } else {
      document.dispatchEvent(new CustomEvent('MISS'));
    }
  }
}
