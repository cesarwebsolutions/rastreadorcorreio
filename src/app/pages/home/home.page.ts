import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  eventos: any[] = []
  constructor(
    private readonly correioService: CorreioService,
    private readonly toastController: ToastController
  ) {}

  pesquisar(event: CustomEvent) {
    const codigoObjeto = event.detail.value

    this.correioService.localizarObjeto(codigoObjeto).subscribe((resp:any) => {

      this.eventos = resp.objetos[0].eventos

      if(!this.eventos){
        this.exibirToast("Objeto não encontrado")
      }
    }, (err) => {
      this.exibirToast("Houve um erro ao buscar dados")
    })
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    })

    toast.present();
  }
}
