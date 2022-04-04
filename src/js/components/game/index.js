import Map from '../map';
import Popup from '../popup';
import random from '../../utils/random';

import hit from '../../../audio/hit.ogg';
import damage from '../../../audio/damage.ogg';

export default class Game {
  constructor(selector) {
    this.gameElement = document.querySelector(selector);
    this.scoreElement = document.createElement('div');
    this.scoreElement.style.fontFamily = 'Arial';
    this.scoreElement.style.fontSize = '28px';
    this.scoreElement.style.marginBottom = '30px';
    this.scoreElement.style.color = '#ffffff';
    this.scoreElement.style.textAlign = 'center';
    this.gameElement.appendChild(this.scoreElement);
    this.audio = document.createElement('audio');
    this.to = null;
    this.score = 0;
    this.missScore = 0;
    this.activeCell = null;
    this.map = new Map(selector);
    this.popup = new Popup();
    this.gameElement.appendChild(this.popup.init());
    this.SPEED = 1000;

    this.listeners();
  }

  init() {
    this.score = 0;
    this.missScore = 0;
    this.activeCell = 0;
    this.drawScore();
    this.map.init();
    this.map.drowMap();
    this.play();
  }

  listeners() {
    document.addEventListener('GOAL', this.goalHandler.bind(this));
    document.addEventListener('MISS', this.missHandler.bind(this));
    document.addEventListener('CLICK_POPUP', this.init.bind(this));
  }

  goalHandler() {
    if(!this.isLose()) {
      this.goalCount();
      this.drawScore();
    }
  }

  missHandler() {
    if(!this.isLose()) {
      this.missCount();
      this.drawScore();
    }
  }

  goalCount() {
    this.sound(damage);
    this.score += 1;
  }

  missCount() {
    this.sound(hit);
    this.missScore += 1;
  }

  sound(file) {
    this.audio.src = file;
    this.audio.play();
  }

  drawScore() {
    this.scoreElement.textContent = `score: ${this.score} / miss: ${this.missScore}`;
  }

  isLose() {
    return this.missScore >= 5;
  }

  gameOver() {
    this.popup.show();
  }

  play() {
    const rnd = random(this.map.size);
    this.map.cells[this.activeCell].active = false;
    this.map.cells[rnd].active = true;
    this.map.updateMap();
    this.activeCell = rnd;

    this.to = setTimeout(() => {
      if(!this.isLose()) {
        this.play();
      } else {
        this.gameOver();
      }
    }, this.SPEED);
  }
}
