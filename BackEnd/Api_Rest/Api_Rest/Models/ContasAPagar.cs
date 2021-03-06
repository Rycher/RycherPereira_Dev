﻿using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace Api_Rest.Models
{
    public class ContasAPagar
    {

        [Key]
        [Required]
        public string Cpf { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public double ValorOriginal { get; set; }
        public double ValorCorrigido { get; set; }
        [Required]
        public DateTime DtVencimento { get; set; }
        [Required]
        public DateTime DtPagamento { get; set; }
        public double QtdDiasAtraso { get; set; }

        public void CalculaDiasAtraso() 
        {
           double _qtdDeDias;
            _qtdDeDias = (DtVencimento - DtPagamento).TotalDays;

            if (_qtdDeDias <= 0)
            {                
                _qtdDeDias = _qtdDeDias * -1;
                QtdDiasAtraso = _qtdDeDias;
            }
            else
            {
                QtdDiasAtraso = 0;
            }
            BuscaValorCorrigido();
        }

        public void BuscaValorCorrigido()
        {
            double _valorComMultaAplicada = 0;
            if (QtdDiasAtraso > 0) {
                if (QtdDiasAtraso <= 3)
                {
                     //Valor Com Multa Aplicada
                    _valorComMultaAplicada = (ValorOriginal * 0.02 + ValorOriginal);

                    //Valor Com Multa Aplicada + Juros por dia de atraso
                    ValorCorrigido = (_valorComMultaAplicada * 0.001) * QtdDiasAtraso + _valorComMultaAplicada;
                }
                else if (QtdDiasAtraso == 4 || QtdDiasAtraso == 5)
                {
                    //Valor Com Multa Aplicada
                    _valorComMultaAplicada = (ValorOriginal * 0.03 + ValorOriginal);

                    //Valor Com Multa Aplicada + Juros por dia de atraso
                    ValorCorrigido = (_valorComMultaAplicada * 0.002) * QtdDiasAtraso + _valorComMultaAplicada;
                }
                else if (QtdDiasAtraso > 5)
                {
                    //Valor Com Multa Aplicada
                    _valorComMultaAplicada = (ValorOriginal * 0.05 + ValorOriginal);

                    //Valor Com Multa Aplicada + Juros por dia de atraso
                    ValorCorrigido = (ValorOriginal * 0.003) * QtdDiasAtraso + _valorComMultaAplicada;                
                }                
            }
        }
    }
}
