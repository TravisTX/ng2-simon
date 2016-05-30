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
  illuminatedColor: colorEnum;
  unilluminateTimeoutId: any;
  illuminationTime = 1000;
  illuminationPause = 1000;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.reset();
    this.revealAnswers();
  }

  click(color: colorEnum) {
    this.illuminateColor(color);
    this.gameService.guess(color);
    if (this.gameService.guessList.length === 0 && this.gameService.state !== stateEnum.gameOver) {
      this.revealAnswers();
    }
  }

  revealAnswers() {
    this.gameService.state = stateEnum.reveal;
    this.answerList = this.gameService.answerList;
    // timeout to make sure the illumination is done from the player action
    setTimeout(function () { this.revealNextAnswer(0) }.bind(this), this.illuminationTime + this.illuminationPause);
  }

  revealNextAnswer(i: number) {
    this.illuminateColor(this.gameService.answerList[i]);

    if (this.gameService.answerList.length > i + 1) {
      setTimeout(function () { this.revealNextAnswer(i + 1) }.bind(this), this.illuminationTime + this.illuminationPause);
    }
    else {
      this.gameService.state = stateEnum.input;
    }
  }

  illuminateColor(color: colorEnum) {
    window.clearTimeout(this.unilluminateTimeoutId);
    this.illuminatedColor = color;
    this.unilluminateTimeoutId = setTimeout(function () { this.illuminatedColor = null }.bind(this), this.illuminationTime);
  }

}