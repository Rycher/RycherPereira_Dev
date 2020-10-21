using System.ComponentModel.DataAnnotations;
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
        public decimal ValorOriginal { get; set; }

        [Required]
        public decimal ValorCorrigido { get; set; }

        [Required]
        public DateTime DtVencimento { get; set; }

        [Required]
        public DateTime DtPagamento { get; set; }

       public decimal QtdDiasAtraso { get; set; }
    }
}
