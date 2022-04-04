import Cell from './cell';
import Cursor from '../cursor';
import './index.scss';

export default class Map {
  constructor(selector) {
    this.app = document.querySelector(selector);
    this.area = document.createElement('div');
    this.area.classList.add('area');
    this.area.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.area.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    this.area.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    this.area.addEventListener('mouseenter', this.onMouseEnter.bind(this), false);
    this.area.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    this.size = 4;
    this.cells = [];
    this.cursor = new Cursor();
    this.coords = {
      x: 0,
      y: 0,
    };
  }

  init() {
    this.cells = [];
    for (let i = 0; i < this.size ** 2; i += 1) {
      const cell = new Cell(i);
      this.cells.push(cell);
    }
    console.log(this.cells);
  }

  onMouseMove(evt) {
    this.cursor.move({ x: evt.x - this.coords.x, y: evt.y - this.coords.y });
  }

  onMouseDown() {
    this.cursor.hit();
  }

  onMouseUp() {
    this.cursor.reset();
  }

  onMouseEnter() {
    this.cursor.show();
  }

  onMouseLeave() {
    this.cursor.hide();
  }

  drowMap() {
    this.area.innerHTML = '';
    this.area.appendChild(this.cursor.init());
    this.cells.forEach((cell) => {
      cell.check();
      this.area.appendChild(cell.init());
    });
    this.app.appendChild(this.area);
    this.getAreaCoords();
  }

  getAreaCoords() {
    this.coords.x = this.area.getBoundingClientRect().x;
    this.coords.y = this.area.getBoundingClientRect().y;
  }

  updateMap() {
    this.cells.forEach((cell) => {
      cell.check();
    });
  }
}
