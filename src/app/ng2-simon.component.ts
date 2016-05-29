import { Component } from '@angular/core';
import { GameComponent } from './game';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ng2-simon-app',
  templateUrl: 'ng2-simon.component.html',
  styleUrls: ['ng2-simon.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/game', component: GameComponent}
])
export class Ng2SimonAppComponent {
  title = 'ng2-simon works!';
}
