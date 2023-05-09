import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-un-seul-super-heros',
  templateUrl: './un-seul-super-heros.component.html',
  styleUrls: ['./un-seul-super-heros.component.scss']
})
export class UnSeulSuperHerosComponent {

  @Input() public leNomDeMonSuperHeroes: string = "";

}
