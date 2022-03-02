import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Caminhao } from './caminhao';

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.css']
})
export class CaminhoesComponent implements OnInit {

  private readonly api_path = 'https://mocki.io/v1/0b18617e-bcc5-49f7-8ec6-5aebca8e7ef2';

  public caminhoes:Caminhao[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Caminhao[]>(this.api_path).subscribe(data=>{
      this.caminhoes = data;
    })
  }

}
