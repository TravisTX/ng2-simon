import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {
  stateEnum: any = stateEnum;
  colorEnum: any = colorEnum;
  state: stateEnum;
  answerList: colorEnum[] = [];
  guessList: colorEnum[] = [];

  constructor() { }

  ngOnInit() {
    this.addAnswer();
    this.presentAnswers();
  }

  click(color: colorEnum) {
    if (this.state !== stateEnum.input) {
      return;
    }

    this.guessList.push(color);
    this.checkAnswers();
  }

  addAnswer() {
    let newAnswer = this.getRandomElementOfEnum<colorEnum>(colorEnum);
    this.answerList.push(newAnswer);
  }

  checkAnswers() {
    this.guessList.forEach(function (value: colorEnum, index: number, array: any[]) {
      if (this.answerList[index] !== value) {
        this.state = stateEnum.gameOver;
        alert('you lose');
      }
    }.bind(this));

    if (this.state === stateEnum.gameOver) {
      return;
    }

    if (this.guessList.length === this.answerList.length) {
      this.addAnswer();
      this.presentAnswers();
      this.guessList = [];
    }
  }

  presentAnswers() {
    this.state = stateEnum.present;
    this.state = stateEnum.input;
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

enum stateEnum {
  present,
  input,
  gameOver
};

enum colorEnum {
  red,
  yellow,
  green,
  blue
};
