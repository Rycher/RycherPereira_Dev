import { Component, OnInit } from '@angular/core';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-contas-apagar',
  templateUrl: './contas-apagar.component.html',
  styleUrls: ['./contas-apagar.component.scss']
})
export class ContasAPagarComponent implements OnInit {

  Contas: Array<any> = new Array();

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarContas();
  }


  listarContas(){
    this.contasService.listarContas().subscribe(contas =>{
      this.Contas = contas;
    }, err =>{
      console.log('erro ao listar as contas!')
    }
    );
  }
}
