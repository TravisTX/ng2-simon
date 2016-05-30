import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  level: number = 1;
  state: stateEnum = stateEnum.preStart;
  answerList: colorEnum[] = [];
  guessList: colorEnum[] = [];

  constructor() { }

  reset() {
    this.answerList = [];
    this.guessList = [];
    this.addAnswer();
    this.state = stateEnum.reveal;
  }

  addAnswer() {
    let newAnswer = this.getRandomElementOfEnum<colorEnum>(colorEnum);
    this.answerList.push(newAnswer);
    this.level = this.answerList.length;
    this.guessList = [];
  }

  checkAnswers() {
    this.guessList.forEach(function (value: colorEnum, index: number, array: any[]) {
      if (this.answerList[index] !== value) {
        this.state = stateEnum.gameOver;
      }
    }.bind(this));

    if (this.state === stateEnum.gameOver) {
      return;
    }

    if (this.guessList.length === this.answerList.length) {
      this.addAnswer();
    }
  }
  
  guess(color: colorEnum) {
    if (this.state !== stateEnum.input) {
      return;
    }
    this.guessList.push(color);
    this.checkAnswers();
  }

  getRandomElementOfEnum<E>(e: any): E {
    let keys = Object.keys(e),
      index = Math.floor(Math.random() * keys.length),
      k = keys[index];
    if (typeof e[k] === 'number')
      return <any>e[k];
    return <any>parseInt(k, 10);
  }

}

export enum stateEnum {
  preStart,
  reveal,
  input,
  gameOver
};

export enum colorEnum {
  red,
  yellow,
  green,
  blue
};
