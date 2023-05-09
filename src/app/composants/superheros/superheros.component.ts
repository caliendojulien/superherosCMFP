import {Component} from '@angular/core';
import {Super} from "../../modeles/Super";

@Component({
  selector: 'app-superheros',
  templateUrl: './superheros.component.html',
  styleUrls: ['./superheros.component.scss']
})
export class SuperherosComponent {

  public banner: string = "Hulk";
  public superheros: Super[] = [];
  public monInput: string = "";

  constructor() {
    let ww = new Super(1, "WonderWoman");
    this.superheros.push(ww);

    this.superheros.push(
      new Super(2, "CatWoman")
    );
    this.superheros.push(
      new Super(3, "Wanda")
    );
    this.superheros.push(
      new Super(4, "Hulk")
    );
  }

  public retireUnSuperHero(): void {
    this.superheros.pop();
  }

  public ajouter(monInput: string): void {
    // this.superheros.push(monInput);
    this.monInput = '';
  }
}
