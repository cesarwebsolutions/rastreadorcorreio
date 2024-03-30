import { Component } from '@angular/core';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  eventos: any[] = []
  erro: boolean = false
  constructor(
    private readonly correioService: CorreioService
  ) {}

  pesquisar(event: CustomEvent) {
    this.erro = false
    const codigoObjeto = event.detail.value

    this.correioService.localizarObjeto(codigoObjeto).subscribe((resp:any) => {

      this.eventos = resp.objetos[0].eventos
    }, (err) => {
      this.erro = true
    })
  }
}
