import { Component, OnInit } from '@angular/core';
import { ContasService } from '../contas.service';
import { Conta } from './Conta';

@Component({
  selector: 'app-contas-apagar',
  templateUrl: './contas-apagar.component.html',
  styleUrls: ['./contas-apagar.component.scss']
})
export class ContasAPagarComponent implements OnInit {
  
  rowData: Array<any>;  
  conta = new Conta();

  columnDefs = [
    { headerName: 'CPF', field: 'cpf' },
    { headerName: 'Nome', field: 'nome' },
    { headerName: 'Valor Original', field: 'valorOriginal'},    
    {
      headerName: 'Valor Corrigido', field: 'valorCorrigido',
      cellRenderer: (data) => {
        return data.value ? (new Number(data.value)).toFixed(2) : '';
      }
    },
    {
      headerName: 'Data Pagamento', field: 'dtPagamento',
      cellRenderer: (data) => {
        return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      }
    },
    { headerName: 'Dias de Atraso', field: 'qtdDiasAtraso' },
    
  ];

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {    
  }

  listarContas(){    
    this.contasService.listarContas().subscribe(contas =>{
      this.rowData = contas;
    }, err =>{
      console.log('erro ao listar as contas!')
    });
   }

  addConta() {    
    this.contasService.addConta(this.conta)
      .subscribe(data => {
        console.log(data)
        this.listarContas();
      })     
  }    
}
