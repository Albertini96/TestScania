import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  private readonly api_path = 'https://mocki.io/v1/9920a856-03a3-49f3-b654-952cc3eb8562';

  public carros:Carro[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Carro[]>(this.api_path).subscribe(data=>{
      this.carros = data;
    })
  }

}
