import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {

  mode: any; // todo: enum. valid options:  present, input, gameOver 
  potentialAnswers: any[] = ['red', 'yellow', 'green', 'blue'];
  answerList: any[] = [];
  guessList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.mode = 'present';
    this.addAnswer();
    this.presentAnswers();
  }

  click(color: any) {
    if (this.mode !== 'input') {
      return;
    }

    this.guessList.push(color);
    this.checkAnswers();
  }

  addAnswer() {
    var newAnswer = this.potentialAnswers[Math.floor(Math.random() * this.potentialAnswers.length)];
    this.answerList.push(newAnswer);
  }

  checkAnswers() {
    var vm = this;
    this.guessList.forEach(function (value: any, index: number, array: any[]) {
      if (vm.answerList[index] !== value) {
        vm.mode = 'gameOver';
        alert('you lose');
      }
    });

    if (this.mode === 'gameOver') {
      return;
    }

    if (this.guessList.length === this.answerList.length) {
      this.addAnswer();
      this.presentAnswers();
      this.guessList = [];
    }
  }

  presentAnswers() {
    this.mode = 'present';
    this.mode = 'input';
  }

}
