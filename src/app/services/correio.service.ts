import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor(
    private readonly http: HttpClient
  ) { }

  localizarObjeto(codigo: string) {
    let url = `https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${codigo}`

    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }

    return this.http.get(url, header)
    
  }
}
