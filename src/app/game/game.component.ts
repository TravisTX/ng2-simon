import { Component, OnInit } from '@angular/core';
import { GameService, stateEnum, colorEnum } from '../game.service';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  providers: [GameService]
})
export class GameComponent implements OnInit {
  stateEnum = stateEnum;
  colorEnum = colorEnum;
  answerList: colorEnum[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.reset();
    this.presentAnswers();
  }

  click(color: colorEnum) {
    this.gameService.guess(color);
    if (this.gameService.state !== stateEnum.gameOver) {
      this.presentAnswers();
    }
  }

  presentAnswers() {
    this.gameService.state = stateEnum.present;
    this.answerList = this.gameService.answerList;
    this.gameService.state = stateEnum.input;
  }

}