import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {

  curtainsOpened = false;

  OpenCurtains() {
    const curtainLeft = document.getElementById("curtainLeft")!;
    const curtainRight = document.getElementById("curtainRight")!;
    curtainLeft.style.transition = "all 1s ease-out"
    curtainRight.style.transition = "all 1s ease-out"

    curtainLeft.style.transform = "translateX(-100%)";
    curtainRight.style.transform = "translateX(100%)";

    setTimeout(() => {
      this.curtainsOpened = true
    }, 1000);
  }

  spinRoulette() {
    const roulette = document.getElementById('roulette')!;
    let rand = Math.random() * 7200;
    roulette.style.transform = "rotate("+rand+"deg)";
    roulette.style.transition = "all 5s";
    setTimeout(() => {
      console.log("ganaste")
      Swal.fire({
        title:"¡Felicidades!",
        text: "Ahora tus datos son nuestros",
        icon:"warning",
        iconColor:"red",
        confirmButtonText:"OK",
        confirmButtonColor:"black"
      })
    }, 5000);
  }
}
