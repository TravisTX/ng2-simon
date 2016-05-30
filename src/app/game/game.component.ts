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
  
  constructor() {}

  ngOnInit() {
    this.mode = 'present';
  }
  
  click(color: any) {
    this.guessList.push(color);
  }
  
  addAnswer() {
    var newAnswer = this.potentialAnswers[Math.floor(Math.random() * this.potentialAnswers.length)];
    this.answerList.push(newAnswer);
  }
  
  presentAnswers() {
    
  }

}
