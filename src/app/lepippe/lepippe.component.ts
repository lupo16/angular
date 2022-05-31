import { Component, OnInit } from '@angular/core';
// SPIEGAZIONE DEI COMPONENTI PIPES

//Le pipes in angular permettono di trasformare i dati e la loro formattazione
/**
 * Le pipes hanno diversi operatori che sono:
 * - lowercase (trasforma tutti i caratteri in minuscolo)
 * - uppercase (trasforma tutti i caratteri in maiuscolo)
 * - titlecase (trasforma tutte le prime lettere delle parole in maiuscole)
 * - slice (inizializza una parola partendo da un indice la sintassi e' slice:numero
 *          riscrivendo :numero dopo il primo tagliera' la restante parte della parola)
 * - JSON (permette la visualizzazione di un file json nel browser di ricerca)
 * - number (Permette la visualizzazione dei dati in un determinato modo)
 * - percent (Permette di visualizzare la percentuale di un numero inserito)
 * - currency (Permette di visualizzare la valuta corrente inserendo la valuta cambia ) 
*/


@Component({
  selector: 'app-lepippe',
  templateUrl: './lepippe.component.html',
  styleUrls: ['./lepippe.component.scss']
})
export class LepippeComponent implements OnInit {

  public name = "Laura"
  public message = "Tutorial sulle pipes"
  public persona = {
    "firstname": "Laura",
    "cognome": "Lupo"
  }
  public ciao = new Date
  constructor() { }

  ngOnInit(): void {
  }

}