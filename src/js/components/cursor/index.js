import './index.scss';

export default class Cursor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.element = document.createElement('div');
    this.element.classList.add('cursor');
    this.element.style.top = this.x;
    this.element.style.left = this.y;
  }

  init() {
    return this.element;
  }

  move(coords) {
    this.element.style.top = `${coords.y - 50}px`;
    this.element.style.left = `${coords.x - 25}px`;
  }

  hit() {
    this.element.style.transform = 'rotate(225deg)';
  }

  reset() {
    this.element.style.transform = 'rotate(270deg)';
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}
